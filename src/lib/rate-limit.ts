interface DailyTracker {
  date: string;
  count: number;
}

interface IpTracker {
  lastRequestTime: number;
  requestTimestamps: number[];
}

const dailyTracker: DailyTracker = {
  date: new Date().toISOString().slice(0, 10),
  count: 0,
};

const ipTrackers = new Map<string, IpTracker>();

// Clean up stale IP records every 30 minutes
setInterval(() => {
  const now = Date.now();
  const tenMinutesAgo = now - 10 * 60 * 1000;
  for (const [ip, tracker] of ipTrackers.entries()) {
    tracker.requestTimestamps = tracker.requestTimestamps.filter((t) => t > tenMinutesAgo);
    if (tracker.requestTimestamps.length === 0 && now - tracker.lastRequestTime > 30 * 60 * 1000) {
      ipTrackers.delete(ip);
    }
  }
}, 30 * 60 * 1000).unref?.();

export interface RateLimitCheckResult {
  allowed: boolean;
  reason?: "daily_limit" | "cooldown" | "ip_rate_limit";
  remainingDaily?: number;
  retryAfterSeconds?: number;
}

export function checkReviewRateLimit(
  clientIp: string,
  dailyBudgetLimit: number = 20
): RateLimitCheckResult {
  const today = new Date().toISOString().slice(0, 10);
  const now = Date.now();

  // 1. Daily budget rollover check
  if (dailyTracker.date !== today) {
    dailyTracker.date = today;
    dailyTracker.count = 0;
  }

  if (dailyTracker.count >= dailyBudgetLimit) {
    return {
      allowed: false,
      reason: "daily_limit",
      remainingDaily: 0,
    };
  }

  // 2. Per-IP tracking
  const tracker = ipTrackers.get(clientIp) || {
    lastRequestTime: 0,
    requestTimestamps: [],
  };

  // Cooldown check (5 seconds between taps)
  if (now - tracker.lastRequestTime < 5000) {
    return {
      allowed: false,
      reason: "cooldown",
      retryAfterSeconds: Math.ceil((5000 - (now - tracker.lastRequestTime)) / 1000),
    };
  }

  // 10-minute window limit (max 5 requests per IP)
  const windowStart = now - 10 * 60 * 1000;
  tracker.requestTimestamps = tracker.requestTimestamps.filter((t) => t > windowStart);

  if (tracker.requestTimestamps.length >= 5) {
    return {
      allowed: false,
      reason: "ip_rate_limit",
      retryAfterSeconds: 60,
    };
  }

  return {
    allowed: true,
    remainingDaily: dailyBudgetLimit - dailyTracker.count,
  };
}

export function recordSuccessfulGeneration(clientIp: string): void {
  const today = new Date().toISOString().slice(0, 10);
  const now = Date.now();

  if (dailyTracker.date !== today) {
    dailyTracker.date = today;
    dailyTracker.count = 0;
  }
  dailyTracker.count += 1;

  const tracker = ipTrackers.get(clientIp) || {
    lastRequestTime: 0,
    requestTimestamps: [],
  };
  tracker.lastRequestTime = now;
  tracker.requestTimestamps.push(now);
  ipTrackers.set(clientIp, tracker);
}

export function getDailyUsageStats(dailyBudgetLimit: number = 20) {
  const today = new Date().toISOString().slice(0, 10);
  if (dailyTracker.date !== today) {
    dailyTracker.date = today;
    dailyTracker.count = 0;
  }
  return {
    date: dailyTracker.date,
    count: dailyTracker.count,
    limit: dailyBudgetLimit,
    remaining: Math.max(0, dailyBudgetLimit - dailyTracker.count),
  };
}
