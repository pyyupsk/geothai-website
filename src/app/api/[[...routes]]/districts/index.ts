import { pagination } from '@/util/pagination'
import { Elysia, t } from 'elysia'
import {
  District,
  DistrictIndex,
  getAllDistricts,
  getDistrictByCode,
  getDistrictsByCriterion
} from 'geothai'

export const districtsRouter = new Elysia({ prefix: '/districts' })
  .get(
    '/',
    ({ query, set }) => {
      const { page, limit, province_code } = query
      let data
      if (province_code !== undefined) {
        data = getDistrictsByCriterion({ province_code })
      } else {
        data = getAllDistricts()
      }

      return pagination<District>({ data, page, limit, set })
    },
    {
      query: t.Object({
        page: t.Optional(t.Number()),
        limit: t.Optional(t.Number()),
        province_code: t.Optional(t.Number())
      })
    }
  )
  .get(
    '/:code',
    ({ params }) => {
      const { code } = params
      const district = getDistrictByCode(code as DistrictIndex)

      if (!district) {
        return { message: 'District not found' }
      }

      return district
    },
    {
      params: t.Object({
        code: t.String()
      })
    }
  )
