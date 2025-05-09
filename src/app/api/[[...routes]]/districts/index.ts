import { pagination } from '@/util/pagination'
import { Elysia, t } from 'elysia'
import { District, getAllDistricts, getDistrictById, getDistrictsByCriterion } from 'geothai'

export const districtsRouter = new Elysia({ prefix: '/districts' })
  .get(
    '/',
    ({ query, set }) => {
      const { page, limit, province_id } = query
      let data
      if (province_id !== undefined) {
        data = getDistrictsByCriterion({ province_id })
      } else {
        data = getAllDistricts()
      }

      return pagination<District>({ data, page, limit, set })
    },
    {
      query: t.Object({
        page: t.Optional(t.Number()),
        limit: t.Optional(t.Number()),
        province_id: t.Optional(t.Number())
      })
    }
  )
  .get(
    '/:id',
    ({ params }) => {
      const { id } = params
      const district = getDistrictById(id)

      if (!district) {
        return { message: 'District not found' }
      }

      return district
    },
    {
      params: t.Object({
        id: t.Number()
      })
    }
  )
