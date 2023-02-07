import { NextFunction, Request, Response } from "express"
import { getStorage } from "../storage"
import { getAuthorizationUrl, getOAuthClient } from "./oauth"
import { AuthConfig } from "./types"

const COOKIE_CODE_VERIFIER = "X-Riseact-Code-Verifier"
const COOKIE_REFRESH_TOKEN = "X-Riseact-Refresh-Token"

export interface RiseactAuth {
  begin: (req: Request, res: Response) => void
  callback: (req: Request, res: Response) => void
  authenticatedOrRedirect: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => void
}

async function oauthStart(req: Request, res: Response) {
  const client = await getOAuthClient()

  if (!client) {
    throw Error("Oauth client not valid. Check OAuth credentials")
  }

  const authorization = getAuthorizationUrl(client)

  console.log("Set cookie code verifier")
  res.cookie(COOKIE_CODE_VERIFIER, authorization.codeVerifier, {
    sameSite: "none",
    secure: true,
  })

  return res.redirect(authorization.url)
}

async function oauthCallback(req: Request, res: Response) {
  const client = await getOAuthClient()

  if (!client) {
    throw Error("Oauth client not valid. Check OAuth credentials")
  }

  if (!req.cookies[COOKIE_CODE_VERIFIER]) {
    throw Error("Oauth error: Code Verifier not present.")
  }

  const params = client.callbackParams(req)
  const tokenSet = await client.callback(
    "http://localhost:3001/oauth/callback",
    params,
    { code_verifier: req.cookies[COOKIE_CODE_VERIFIER] }
  )

  console.log("received and validated tokens %j", tokenSet)
  console.log("validated ID Token claims %j", tokenSet.claims())

  res.cookie("Authorization", `Bearer ${tokenSet.access_token}`, {
    sameSite: "none",
    secure: true,
  })
  res.cookie(COOKIE_REFRESH_TOKEN, tokenSet.refresh_token, {
    sameSite: "none",
    secure: true,
  })
  res.clearCookie(COOKIE_CODE_VERIFIER)

  res.redirect("/")
}

async function authenticatedOrRedirect(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(req.sessionID)
  console.log(req.sessionStore)
  if (!req.cookies["Authorization"]) {

    console.log("no cookie")
    return res.redirect("/oauth/authorize")
  }
  next()
}

export async function riseactAuth(config: AuthConfig): Promise<RiseactAuth> {
  const db = await getStorage()
  return {
    begin: oauthStart,
    callback: oauthCallback,
    authenticatedOrRedirect: authenticatedOrRedirect,
  }
}
