import SqliteDatabase from 'better-sqlite3'
import {
  Generated, Kysely,
  SqliteDialect
} from 'kysely'

interface SessionTable {
  id: Generated<string>
  sessionId: string
  accessToken: string
  refreshToken: string
  userId: number
}

interface Database {
  session: SessionTable
}

export async function getStorage() {
  const db = new Kysely<Database>({
    dialect: new SqliteDialect({
      database: new SqliteDatabase('database.sqlite3')
    })
  })
}