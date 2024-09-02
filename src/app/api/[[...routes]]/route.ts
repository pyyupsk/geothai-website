import swagger from '@elysiajs/swagger'
import { Elysia } from 'elysia'
import { districtsRouter } from './districts'
import { postalCodeRouter } from './postal-code'
import { provincesRouter } from './provinces'
import { reverseLookupRouter } from './reverse-lookup'
import { subdistrictsRouter } from './subdistricts'

const swaggerConfig = {
    documentation: {
        info: {
            title: 'Geothai API',
            description: 'API documentation for Geothai',
            version: '0.2.0'
        }
    }
}

const app = new Elysia({ prefix: '/api' })
    .use(swagger(swaggerConfig))
    .use(provincesRouter)
    .use(districtsRouter)
    .use(subdistrictsRouter)
    .use(postalCodeRouter)
    .use(reverseLookupRouter)

export const GET = app.handle
