import { pagination } from '@/util/pagination'
import { Elysia, t } from 'elysia'
import { getAllSubdistricts, getSubdistrictById, getSubdistrictsByCriterion, Subdistrict } from 'geothai'

export const subdistrictsRouter = new Elysia({ prefix: '/subdistricts' })
    .get(
        '/',
        ({ query, set }) => {
            const { page, limit, province_id, district_id } = query

            let data
            if (district_id !== undefined) {
                data = getSubdistrictsByCriterion({ district_id })
            } else if (province_id !== undefined) {
                data = getSubdistrictsByCriterion({ province_id })
            } else {
                data = getAllSubdistricts()
            }

            return pagination<Subdistrict>({ data, page, limit, set })
        },
        {
            query: t.Object({
                page: t.Optional(t.Number()),
                limit: t.Optional(t.Number()),
                province_id: t.Optional(t.Number()),
                district_id: t.Optional(t.Number())
            })
        }
    )
    .get(
        '/:id',
        ({ params }) => {
            const { id } = params
            const subdistrict = getSubdistrictById(id)

            if (!subdistrict) {
                return { message: 'Subdistrict not found' }
            }

            return subdistrict
        },
        {
            params: t.Object({
                id: t.Number()
            })
        }
    )
