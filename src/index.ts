import dotenv from "dotenv"
import express, { Express } from "express"
import { readFileSync } from "fs"
import { join } from "path"
import serveStatic from 'serve-static'
import { createServer as createViteServer } from 'vite'

dotenv.config()

const isProd = process.env.NODE_ENV === "production"

const STATIC_PATH =
  isProd
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`

async function createServer() {
  const app: Express = express()
  const PORT = parseInt(
    process.env.BACKEND_PORT || process.env.PORT || "3001",
    10
  )

  if(isProd) {
    app.use(express.json())
    app.use(serveStatic(STATIC_PATH, { index: false }))
    app.use("/*", async (_req, res, _next) => {
      return res
        .status(200)
        .set("Content-Type", "text/html")
        .send(readFileSync(join(STATIC_PATH, "index.html")))
    })

  } else {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
      },
      root: `${process.cwd()}/frontend`,
      configFile: `${process.cwd()}/frontend/vite.config.ts`,
    })
  
    app.use(vite.middlewares)
  }

  app.listen(PORT, () => {
    console.log(join(STATIC_PATH, "index.html"))
    console.log(`⚡️[app]: Server is running at http://localhost:${PORT}`)
  })
}

createServer()
