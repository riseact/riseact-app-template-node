import { BaseClient, generators, Issuer } from "openid-client"

const RISEACT_ACCOUNTS_URL =
  "http://accounts.localhost:8000/oauth/.well-known/openid-configuration/"

interface AuthorizationData {
  url: string
  codeVerifier: string
}

export async function getOAuthClient(): Promise<BaseClient | null> {
  const riseactIssuer = await Issuer.discover(RISEACT_ACCOUNTS_URL)

  if (!process.env.RISEACT_CLIENT_ID || !process.env.RISEACT_CLIENT_SECRET) {
    return null
  }

  const client = new riseactIssuer.Client({
    client_id: process.env.RISEACT_CLIENT_ID,
    client_secret: process.env.RISEACT_CLIENT_SECRET,
    redirect_uris: ["http://localhost:3001/oauth/callback"],
    response_types: ["code"],
    // id_token_signed_response_alg (default "RS256")
    // token_endpoint_auth_method (default "client_secret_basic")
  })

  return client
}

export function getAuthorizationUrl(client: BaseClient): AuthorizationData {
  const codeVerifier = generators.codeVerifier()
  const codeChallenge = generators.codeChallenge(codeVerifier)

  return {
    codeVerifier,
    url: client.authorizationUrl({
      // scope: '',
      code_challenge: codeChallenge,
      code_challenge_method: "S256",
    }),
  }
}
