import { sql } from 'drizzle-orm'
import {
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core'

export const usersTable = pgTable(
  'users',
  {
    id: varchar('id', {
      length: 36,
    })
      .primaryKey()
      .default(sql`gen_random_uuid()`),
    name: text('name').notNull().default(''),
    email: text('email').notNull().unique(),
    image: text('image').notNull().default('/images/placeholder.png'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at')
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
    emailVerified: timestamp('emailVerified', {
      mode: 'date',
    }),
  },
  (users) => {
    return {
      emailIdx: uniqueIndex('email_idx').on(users.email),
    }
  }
)
