import { isValidCategory } from "@/lib/review-categories";
import {
  checkReviewRateLimit,
  recordSuccessfulGeneration,
  getDailyUsageStats,
} from "@/lib/rate-limit";

const SYSTEM_PROMPT = `You are a helpful review assistant for authentic customers of B★STAR Unisex Salon, located at Stylo Plaza, TC Palya Main Rd, Battarahalli, Bengaluru.
Your sole task is to turn the customer's provided visit feedback into a natural, genuine, personal Google review in concise conversational English (2 to 3 sentences, 35 to 65 words).

STRICT RULES:
1. Base the draft EXCLUSIVELY on the customer's provided service and specific observations.
2. NEVER invent treatments, products, staff names, prices, or claims of painlessness unless stated by the customer.
3. NEVER assume a 5-star experience or force promotional praise. If the customer had a neutral, mixed, or constructive experience, reflect that faithfully.
4. NEVER use promotional marketing clichés (e.g., "Look no further", "hidden gem", "best in town", "pampered to perfection", "world-class").
5. Write in the first person from the customer's perspective ("I got...", "The stylist...", "My haircut was...").
6. Sound like an everyday person who visited the salon in Battarahalli / Bengaluru and wrote an honest review on their phone.
7. Return ONLY valid JSON in this exact structure: {"draft": "review text here"}`;

export async function POST(req: Request) {
  try {
    // 1. Check configuration
    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = process.env.OPENROUTER_MODEL || "nvidia/nemotron-3.5-lightning:free";
    const baseUrl = process.env.OPENROUTER_BASE_URL || "https://openrouter.ai/api/v1";
    const dailyLimit = parseInt(process.env.DAILY_REVIEW_LIMIT || "20", 10);

    if (!apiKey || apiKey.trim() === "") {
      return Response.json(
        {
          success: false,
          error:
            "The AI review assistant is awaiting configuration. Please tap below to post your review directly on Google.",
          unconfigured: true,
        },
        { status: 503 }
      );
    }

    // 2. Client IP & Rate Limiting / Daily Budget
    const forwardedFor = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const clientIp = (forwardedFor?.split(",")[0] || realIp || "127.0.0.1").trim();

    const rateCheck = checkReviewRateLimit(clientIp, dailyLimit);
    if (!rateCheck.allowed) {
      if (rateCheck.reason === "daily_limit") {
        return Response.json(
          {
            success: false,
            error:
              "Today's AI review generation quota (20 drafts) has been reached. Please write your review directly on Google!",
            rateLimited: true,
          },
          { status: 429 }
        );
      }
      if (rateCheck.reason === "cooldown") {
        return Response.json(
          {
            success: false,
            error: `Please wait ${rateCheck.retryAfterSeconds || 3} seconds before requesting another draft.`,
            cooldown: true,
          },
          { status: 429 }
        );
      }
      return Response.json(
        {
          success: false,
          error: "Too many requests from this device. Please try again shortly or review directly on Google.",
          rateLimited: true,
        },
        { status: 429 }
      );
    }

    // 3. Parse and Validate Request Payload
    let body;
    try {
      body = await req.json();
    } catch {
      return Response.json(
        { success: false, error: "Invalid request payload format." },
        { status: 400 }
      );
    }

    const { service, feedback, user_text } = body || {};

    const rawUserText = typeof user_text === "string" ? user_text.slice(0, 300).trim() : "";

    if (!rawUserText && (!service || typeof service !== "string" || !isValidCategory(service))) {
      return Response.json(
        {
          success: false,
          error: "Please enter your thoughts or select a valid service category.",
        },
        { status: 400 }
      );
    }

    // 4. Construct Prompt
    let userPrompt = "";
    if (rawUserText) {
      userPrompt = `Customer's raw feedback: "${rawUserText}".
Service: ${service || "Salon Treatment"}
Task: Rewrite the customer's raw thoughts into a natural, polished, grammatically correct 2-sentence Google review in the first person for B★STAR Unisex Salon in Battarahalli, Bengaluru. Return JSON: {"draft": "..."}`;
    } else {
      const serviceReceived = String(feedback?.service_received || service).slice(0, 150).trim();
      const customerObservation = String(feedback?.customer_observation || "").slice(0, 250).trim();
      userPrompt = `Service Category: ${service}
Service: ${serviceReceived}
Observation: ${customerObservation || "attentive styling and clean salon"}
Task: Compose a natural, authentic, 2-sentence customer Google review for B★STAR Unisex Salon in Battarahalli, Bengaluru. Return JSON: {"draft": "..."}`;
    }

    // 5. Call OpenRouter API with Timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    let openRouterRes: Response;
    try {
      openRouterRes = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey.trim()}`,
          "HTTP-Referer": "https://bstarsalon.com",
          "X-Title": "BStar Unisex Salon Review Assistant",
        },
        body: JSON.stringify({
          model: model.trim(),
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: userPrompt },
          ],
          temperature: 0.7,
          max_tokens: 200,
          reasoning: {
            effort: "none",
          },
          response_format: { type: "json_object" },
        }),
        signal: controller.signal,
      });
    } catch (networkErr: any) {
      clearTimeout(timeoutId);
      if (networkErr.name === "AbortError") {
        return Response.json(
          {
            success: false,
            error:
              "The AI review assistant timed out. You can tap below to post directly on Google.",
          },
          { status: 504 }
        );
      }
      return Response.json(
        {
          success: false,
          error:
            "Unable to connect to the AI service at this moment. You can write your review directly on Google.",
        },
        { status: 502 }
      );
    } finally {
      clearTimeout(timeoutId);
    }

    // 6. Handle Provider Status
    if (!openRouterRes.ok) {
      const status = openRouterRes.status;
      if (status === 429) {
        return Response.json(
          {
            success: false,
            error:
              "The free AI endpoint is currently experiencing high demand. Please try again in a few moments or review directly on Google.",
          },
          { status: 429 }
        );
      }
      if (status === 401 || status === 403) {
        return Response.json(
          {
            success: false,
            error:
              "AI authentication error. Please review your OpenRouter API key configuration in settings.",
          },
          { status: 502 }
        );
      }
      return Response.json(
        {
          success: false,
          error:
            "The AI service is temporarily unavailable. You can post your review directly on Google.",
        },
        { status: 502 }
      );
    }

    // 7. Parse Model Output
    const responseData = await openRouterRes.json();
    const rawContent = responseData?.choices?.[0]?.message?.content;

    if (!rawContent || typeof rawContent !== "string") {
      return Response.json(
        {
          success: false,
          error:
            "The model returned an unexpected response. Please try again or tap to post directly on Google.",
        },
        { status: 502 }
      );
    }

    let draftText = "";
    try {
      const parsedJson = JSON.parse(rawContent);
      draftText =
        parsedJson.draft ||
        parsedJson.review ||
        parsedJson.text ||
        parsedJson.message ||
        "";
    } catch {
      // Regex extraction fallback if response wasn't strict JSON
      const match = rawContent.match(/"draft"\s*:\s*"([^"]+)"/);
      if (match) {
        draftText = match[1];
      } else {
        draftText = rawContent
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();
      }
    }

    // Clean up escaping or quotes
    draftText = draftText.replace(/^["']|["']$/g, "").trim();

    if (!draftText || draftText.length < 15) {
      return Response.json(
        {
          success: false,
          error:
            "Could not generate a complete draft from the provided details. Please add a few more words and try again.",
        },
        { status: 422 }
      );
    }

    // Record success against daily budget & client IP
    recordSuccessfulGeneration(clientIp);

    const stats = getDailyUsageStats(dailyLimit);

    return Response.json({
      success: true,
      draft: draftText,
      remainingToday: stats.remaining,
      model: model.trim(),
    });
  } catch (err: any) {
    // Safe error reporting - never expose internal stack or secrets
    return Response.json(
      {
        success: false,
        error: "An unexpected error occurred while generating your review draft.",
      },
      { status: 500 }
    );
  }
}

// GET endpoint to check service status & daily quota without exposing secrets
export async function GET() {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const isConfigured = Boolean(apiKey && apiKey.trim() !== "");
  const model = process.env.OPENROUTER_MODEL || "nvidia/nemotron-3.5-lightning:free";
  const dailyLimit = parseInt(process.env.DAILY_REVIEW_LIMIT || "20", 10);
  const stats = getDailyUsageStats(dailyLimit);

  return Response.json({
    status: "ok",
    configured: isConfigured,
    model: model.trim(),
    dailyQuota: {
      limit: stats.limit,
      used: stats.count,
      remaining: stats.remaining,
    },
  });
}
