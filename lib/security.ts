const ALLOWED_HOSTS = new Set<string>(
  [
    "skillzpath.com",
    "www.skillzpath.com",
    "localhost:3000",
    "127.0.0.1:3000",
  ]
    .map((host) => host.toLowerCase()),
);

/**
 * Server-side check that a request actually came from our own origin.
 * Blocks cross-site request forgery (CSRF) style abuse where a third-party
 * page tries to trigger state-changing API calls (e.g. signups, payments).
 */
export function isTrustedRequest(request: Request): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const sameOriginHost = new URL(request.url).host.toLowerCase();

  const candidates = [origin, referer].filter(
    (value): value is string => Boolean(value),
  );

  if (candidates.length === 0) {
    // No browser-identifying headers → server-to-server or non-browser client.
    return true;
  }

  return candidates.some((candidate) => {
    try {
      const url = new URL(candidate);
      if (url.host.toLowerCase() === sameOriginHost) return true;
      if (ALLOWED_HOSTS.has(url.host.toLowerCase())) return true;
    } catch {
      // Malformed header value → not trusted.
      return false;
    }
    return false;
  });
}
