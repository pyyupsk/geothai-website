import { Tags } from '@/app/api/types'
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
    openapi: metadata.version,
    tags: [
      { name: Tags.PROVINCES, description: 'Provinces endpoints' },
      { name: Tags.DISTRICTS, description: 'Districts endpoints' },
      { name: Tags.SUBDISTRICTS, description: 'Subdistricts endpoints' },
      { name: Tags.POSTAL_CODE, description: 'Postal Code endpoints' },
      { name: Tags.REVERSE_LOOKUP, description: 'Reverse Lookup endpoints' }
    ]
  },
  exclude: ['/api/swagger', '/api/swagger/json'],
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
