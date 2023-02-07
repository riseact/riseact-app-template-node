import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import express, { Express } from "express"
import session from 'express-session'
import { readFileSync } from "fs"
import http from 'http'
import httpProxy from 'http-proxy'
import { join } from "path"
import serveStatic from "serve-static"
import { createServer as createViteServer } from "vite"
import { RiseactApp, riseactApp } from './backend/riseact-app-express'

dotenv.config()

const isProd = process.env.NODE_ENV === "production"

const STATIC_PATH = isProd
  ? `${process.cwd()}/frontend/dist`
  : `${process.cwd()}/frontend/`


async function createServer() {
  const app: Express = express()
  const riseact: RiseactApp = await riseactApp({
    auth: {}})
  const proxy = httpProxy.createProxyServer({ target: 'http://localhost:3002', ws: true });
  const server = http.createServer(app)

  const PORT = parseInt(
    process.env.BACKEND_PORT || process.env.PORT || "3001",
    10
  )

  app.use(cookieParser())
  app.use(session({
    secret: 'super-secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
  
  app.get("/oauth/authorize", riseact.auth.begin)
  app.get("/oauth/callback", riseact.auth.callback)

  if (isProd) {
    app.use(express.json())
    app.use(serveStatic(STATIC_PATH, { index: false }))
    app.use("/*", riseact.auth.authenticatedOrRedirect, async (_req, res, _next) => {
      return res
        .status(200)
        .set("Content-Type", "text/html")
        .send(readFileSync(join(STATIC_PATH, "index.html")))
    })
  } else {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: {
          host: "0.0.0.0",
          clientPort: 3001,
          port: 3002
        }
      },
      root: `${process.cwd()}/frontend`,
      configFile: `${process.cwd()}/frontend/vite.config.ts`,
    })

    app.use(riseact.auth.authenticatedOrRedirect, vite.middlewares)
  }

  server.on('upgrade', function (req, socket, head) {
    console.log("proxying upgrade request", req.url);
    proxy.ws(req, socket, head);
  });
  

  server.listen(PORT, () => {
    console.log(`⚡️[app]: Server is running at http://localhost:${PORT}`)
  })
}

createServer()
