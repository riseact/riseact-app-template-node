import { RiseactAuth, riseactAuth } from "./auth"
import { AuthConfig } from "./auth/types"

export interface RiseactConfig {
  auth: AuthConfig
}

export interface RiseactApp {
  auth: RiseactAuth
}

export async function riseactApp(config: RiseactConfig): Promise<RiseactApp> {
  const auth = await riseactAuth(config.auth)
  return {
    auth
  }
}