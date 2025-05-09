import swagger, { ElysiaSwaggerConfig } from '@elysiajs/swagger'
import { Elysia } from 'elysia'
import { metadata } from 'geothai'
import { districtsRouter } from './districts'
import { postalCodeRouter } from './postal-code'
import { provincesRouter } from './provinces'
import { reverseLookupRouter } from './reverse-lookup'
import { subdistrictsRouter } from './subdistricts'

const swaggerConfig: ElysiaSwaggerConfig = {
  documentation: {
    info: {
      title: 'Geothai API',
      description: 'API documentation for Geothai',
      version: metadata.version
    },
    openapi: metadata.version
  },
  theme: 'light',
  autoDarkMode: false
}

const app = new Elysia({ prefix: '/api' })
  .use(swagger(swaggerConfig))
  .use(provincesRouter)
  .use(districtsRouter)
  .use(subdistrictsRouter)
  .use(postalCodeRouter)
  .use(reverseLookupRouter)

export const GET = app.handle
