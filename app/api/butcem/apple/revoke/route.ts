import {
  AppleAuthConfigError,
  exchangeAuthorizationCode,
  revokeAppleToken,
} from "../../../../../lib/apple-client-secret";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    refreshToken?: unknown;
    code?: unknown;
  } | null;
  const refreshToken = clean(body?.refreshToken);
  const code = clean(body?.code);
  if (!refreshToken && !code) {
    return Response.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  try {
    const token = refreshToken ?? (await exchangeAuthorizationCode(code!));
    await revokeAppleToken(token);
    return new Response(null, { status: 204 });
  } catch (error) {
    if (error instanceof AppleAuthConfigError) {
      return Response.json({ error: error.message }, { status: 503 });
    }
    return Response.json({ error: "Apple oturumu iptal edilemedi." }, { status: 502 });
  }
}

function clean(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed.length < 8 || trimmed.length > 2048) return null;
  return trimmed;
}
