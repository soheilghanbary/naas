import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

const conn = postgres(process.env.DATABASE_URL!)

export const db = drizzle(conn, { schema })
