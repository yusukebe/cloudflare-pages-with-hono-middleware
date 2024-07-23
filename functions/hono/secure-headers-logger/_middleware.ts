import { handleMiddleware } from 'hono/cloudflare-pages'
import { secureHeaders } from 'hono/secure-headers'
import { logger } from 'hono/logger'

export const onRequest = [handleMiddleware(logger()), handleMiddleware(secureHeaders())]
