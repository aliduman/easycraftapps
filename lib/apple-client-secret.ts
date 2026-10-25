import crypto from "crypto";

const appleTokenURL = "https://appleid.apple.com/auth/token";
const appleRevokeURL = "https://appleid.apple.com/auth/revoke";

export class AppleAuthConfigError extends Error {
  constructor() {
    super("Apple token iptali sunucuda yapılandırılmamış.");
    this.name = "AppleAuthConfigError";
  }
}

function requiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new AppleAuthConfigError();
  return value;
}

function base64url(value: Buffer | string): string {
  const buffer = typeof value === "string" ? Buffer.from(value) : value;
  return buffer.toString("base64url");
}

/** Sign in with Apple client secret (ES256 JWT). Özel anahtar yalnızca sunucu ortamında durur. */
export function appleClientSecret(now = Math.floor(Date.now() / 1000)): string {
  const teamId = requiredEnv("APPLE_TEAM_ID");
  const keyId = requiredEnv("APPLE_KEY_ID");
  const privateKey = requiredEnv("APPLE_PRIVATE_KEY").replace(/\\n/g, "\n");
  const clientId = process.env.APPLE_CLIENT_ID?.trim() || "com.aliduman.butcem";

  const header = base64url(JSON.stringify({ alg: "ES256", kid: keyId }));
  const payload = base64url(
    JSON.stringify({
      iss: teamId,
      iat: now,
      exp: now + 60 * 10,
      aud: "https://appleid.apple.com",
      sub: clientId,
    })
  );
  const unsigned = `${header}.${payload}`;
  const signature = crypto.sign("sha256", Buffer.from(unsigned), {
    key: crypto.createPrivateKey(privateKey),
    dsaEncoding: "ieee-p1363",
  });
  return `${unsigned}.${base64url(signature)}`;
}

export async function exchangeAuthorizationCode(code: string): Promise<string> {
  const clientId = process.env.APPLE_CLIENT_ID?.trim() || "com.aliduman.butcem";
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    client_id: clientId,
    client_secret: appleClientSecret(),
  });
  const response = await fetch(appleTokenURL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!response.ok) {
    throw new Error(`Apple token değişimi başarısız (${response.status}).`);
  }
  const json = (await response.json()) as { refresh_token?: string };
  if (!json.refresh_token) {
    throw new Error("Apple refresh token dönmedi.");
  }
  return json.refresh_token;
}

export async function revokeAppleToken(token: string): Promise<void> {
  const clientId = process.env.APPLE_CLIENT_ID?.trim() || "com.aliduman.butcem";
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: appleClientSecret(),
    token,
    token_type_hint: "refresh_token",
  });
  const response = await fetch(appleRevokeURL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!response.ok) {
    throw new Error(`Apple token iptali başarısız (${response.status}).`);
  }
}
