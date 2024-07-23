import { handleMiddleware } from 'hono/cloudflare-pages'
import { rateLimit } from '@elithrar/workers-hono-rate-limit'

export const onRequest = handleMiddleware(async (c, next) => {
  return await rateLimit(c.env.RATE_LIMITER, (c) => {
    return c.req.path
  })(c, next)
})
