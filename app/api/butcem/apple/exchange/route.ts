import { AppleAuthConfigError, exchangeAuthorizationCode } from "../../../../../lib/apple-client-secret";

export async function POST(request: Request) {
  const code = await readCode(request);
  if (!code) {
    return Response.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  try {
    const refreshToken = await exchangeAuthorizationCode(code);
    return Response.json({ refreshToken });
  } catch (error) {
    return revokeError(error);
  }
}

async function readCode(request: Request): Promise<string | null> {
  const body = (await request.json().catch(() => null)) as { code?: unknown } | null;
  if (!body || typeof body.code !== "string") return null;
  const code = body.code.trim();
  if (code.length < 8 || code.length > 2048) return null;
  return code;
}

function revokeError(error: unknown) {
  if (error instanceof AppleAuthConfigError) {
    return Response.json({ error: error.message }, { status: 503 });
  }
  return Response.json({ error: "Apple oturumu işlenemedi." }, { status: 502 });
}
