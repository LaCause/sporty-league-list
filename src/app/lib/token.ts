export function generateToken(length = 16): string {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let out = "";
  for (let i = 0; i < length; i++) {
    out += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return out;
}

export function sanitizeToken(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const cleaned = raw.replace(/[^a-zA-Z0-9-_\.]/g, "");
  return cleaned.length ? cleaned : null;
}

export function parseTokenFromSearch(search: string): string | null {
  try {
    const params = new URLSearchParams(search.startsWith("?") ? search : `?${search}`);
    return sanitizeToken(params.get("token"));
  } catch {
    return null;
  }
}

export function buildShareUrl(baseUrl: string, token: string): string {
  const url = new URL(baseUrl);
  url.searchParams.set("token", token);
  return url.toString();
}

export function ensureToken(existing?: string | null): string {
  return sanitizeToken(existing) ?? generateToken(16);
}

