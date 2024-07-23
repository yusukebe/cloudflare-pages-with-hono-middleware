import { handleMiddleware } from 'hono/cloudflare-pages'

export const onRequest = handleMiddleware(async (c, next) => {
  await next()
  c.res.headers.append('X-Message', 'Hello')
})
