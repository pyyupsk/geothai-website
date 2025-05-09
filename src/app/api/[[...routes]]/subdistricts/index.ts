import { pagination } from '@/util/pagination'
import { Elysia, t } from 'elysia'
import {
  getAllSubdistricts,
  getSubdistrictByCode,
  getSubdistrictsByCriterion,
  Subdistrict,
  SubdistrictIndex
} from 'geothai'

export const subdistrictsRouter = new Elysia({ prefix: '/subdistricts' })
  .get(
    '/',
    ({ query, set }) => {
      const { page, limit, province_code, district_code } = query

      let data
      if (district_code !== undefined) {
        data = getSubdistrictsByCriterion({ district_code })
      } else if (province_code !== undefined) {
        data = getSubdistrictsByCriterion({ province_code })
      } else {
        data = getAllSubdistricts()
      }

      return pagination<Subdistrict>({ data, page, limit, set })
    },
    {
      query: t.Object({
        page: t.Optional(t.Number()),
        limit: t.Optional(t.Number()),
        province_code: t.Optional(t.Number()),
        district_code: t.Optional(t.Number())
      })
    }
  )
  .get(
    '/:code',
    ({ params }) => {
      const { code } = params
      const subdistrict = getSubdistrictByCode(code as SubdistrictIndex)

      if (!subdistrict) {
        return { message: 'Subdistrict not found' }
      }

      return subdistrict
    },
    {
      params: t.Object({
        code: t.String()
      })
    }
  )
