import { pagination } from '@/util/pagination'
import { Elysia, t } from 'elysia'
import { getAllProvinces, getProvinceById, Province } from 'geothai'

export const provincesRouter = new Elysia({ prefix: '/provinces' })
    .get(
        '/',
        ({ query, set }) => {
            const { page, limit } = query
            const data = getAllProvinces()

            return pagination<Province>({ data, page, limit, set })
        },
        {
            query: t.Object({
                page: t.Optional(t.Number()),
                limit: t.Optional(t.Number())
            })
        }
    )
    .get(
        '/:id',
        ({ params }) => {
            const { id } = params
            const province = getProvinceById(id)

            if (!province) {
                return { message: 'Province not found' }
            }

            return province
        },
        {
            params: t.Object({
                id: t.Number()
            })
        }
    )
