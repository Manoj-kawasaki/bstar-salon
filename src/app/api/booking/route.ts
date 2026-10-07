import { NextResponse } from "next/server";

const WHATSAPP_ACCESS_TOKEN =
  process.env.WHATSAPP_ACCESS_TOKEN ||
  "EAAeDDA4dOZAYBSgZBBKHCL6g5ZBzM4UsJsD7NEe3qqyjqejDoNrm1pvDKh6RcNNOfZAYkjaFcWTCSHNFZA672O7FgwlbrIc17O9cKx9YHP8ZAOdPkP4hRYGg9OVGsqkbohFv737ZBZCsVAijMhIxq7lPZBHKgMP4ZBjWDaCmnAZCsMEKNEqtj6ZA3g8KtAMD0xEXDeWoCQZDZD";

const WHATSAPP_PHONE_NUMBER_ID =
  process.env.WHATSAPP_PHONE_NUMBER_ID || "1400903626431528";

const CLOUDZAP_API_URL =
  process.env.CLOUDZAP_API_URL || "http://localhost:8000";

const SALON_OWNER_PHONES = (
  process.env.SALON_OWNER_PHONES || "+919902949549,+918050397202"
).split(",");

function normalizePhone(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) {
    return digits;
  }
  if (digits.length === 10) {
    return `+91${digits}`;
  }
  return `+${digits}`;
}

async function sendWhatsAppMessage(recipientPhone: string, text: string) {
  if (!WHATSAPP_ACCESS_TOKEN || !WHATSAPP_PHONE_NUMBER_ID) {
    console.warn("WhatsApp credentials not configured; skipping dispatch.");
    return false;
  }

  const cleanPhone = recipientPhone.replace(/[^\d]/g, "");
  const url = `https://graph.facebook.com/v21.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`;

  const payload = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: cleanPhone,
    type: "text",
    text: { body: text },
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("WhatsApp API error:", res.status, errBody);
      return false;
    }
    return true;
  } catch (err) {
    console.error("WhatsApp dispatch network error:", err);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      customerName,
      phone,
      service,
      stylist = "Karan Patel (Master)",
      date,
      time,
      notes = "",
    } = body;

    if (!customerName || !phone) {
      return NextResponse.json(
        { error: "Customer name and phone number are required." },
        { status: 400 }
      );
    }

    const normPhone = normalizePhone(phone);
    const bookingId = `BST-${Date.now().toString(36).toUpperCase()}`;

    // 1. Send WhatsApp confirmation to Customer
    const customerMsg =
      `🌟 *Hello ${customerName}!* \n\n` +
      `Your appointment at *B★STAR Unisex Salon* has been confirmed!\n\n` +
      `✂️ *Service:* ${service || "Salon Treatment"}\n` +
      `📅 *Date & Slot:* ${date} at ${time}\n` +
      `💇 *Stylist:* ${stylist}\n` +
      `🔖 *Booking ID:* ${bookingId}\n` +
      `📍 *Location:* Stylo Plaza, TC Palya Main Rd, Battarahalli, Bengaluru\n\n` +
      `We look forward to pampering you! If you have questions or need to reschedule, simply reply to this WhatsApp message or call +91 99029 49549.`;

    await sendWhatsAppMessage(normPhone, customerMsg);

    // 2. Alert salon manager / owner phones
    const ownerMsg =
      `🔔 *NEW WEBSITE BOOKING on bstarsalon.com!*\n\n` +
      `👤 *Client:* ${customerName}\n` +
      `📱 *Phone:* ${normPhone}\n` +
      `✂️ *Service:* ${service}\n` +
      `📅 *Slot:* ${date} at ${time}\n` +
      `💇 *Stylist:* ${stylist}\n` +
      `🔖 *ID:* ${bookingId}\n` +
      (notes ? `📝 *Notes:* ${notes}\n` : "");

    for (const ownerPhone of SALON_OWNER_PHONES) {
      const trimmed = ownerPhone.trim();
      if (trimmed) {
        sendWhatsAppMessage(trimmed, ownerMsg).catch(() => {});
      }
    }

    // 3. Sync to CloudZap backend if reachable
    try {
      await fetch(`${CLOUDZAP_API_URL}/api/v1/salon/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Tenant-ID": "b57a0000-0000-0000-0000-000000000001",
        },
        body: JSON.stringify({
          customer_name: customerName.trim(),
          customer_phone: normPhone,
          service_name: service,
          stylist: stylist,
          scheduled_time: time,
          chair_number: "Station 1",
          notes: notes ? `Online bstarsalon.com: ${notes}` : "Online booking from bstarsalon.com",
        }),
      });
    } catch (apiErr) {
      // Backend sync is non-blocking for online booking
      console.warn("CloudZap backend sync skipped or unavailable:", apiErr);
    }

    return NextResponse.json({
      success: true,
      bookingId,
      customerName,
      phone: normPhone,
      service,
      stylist,
      date,
      time,
    });
  } catch (error: any) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Failed to process appointment booking." },
      { status: 500 }
    );
  }
}
