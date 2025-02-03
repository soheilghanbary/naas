import { app } from '@/server/main'
import { handle } from 'hono/vercel'

// export const runtime = 'edge';

// handle methods
export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)
