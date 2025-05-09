import { Tags } from '@/app/api/types'
import { pagination } from '@/util/pagination'
import { Elysia, t } from 'elysia'
import { getAllProvinces, getProvinceByCode, Province, ProvinceIndex } from 'geothai'

export const provincesRouter = new Elysia({ prefix: '/provinces' })
  .get(
    '',
    ({ query, set }) => {
      const { page, limit } = query
      const data = getAllProvinces()

      return pagination<Province>({ data, page, limit, set })
    },
    {
      query: t.Object({
        page: t.Optional(t.Number()),
        limit: t.Optional(t.Number())
      }),
      detail: {
        tags: [Tags.PROVINCES]
      }
    }
  )
  .get(
    '/:code',
    ({ params }) => {
      const { code } = params
      const province = getProvinceByCode(code as ProvinceIndex)

      if (!province) {
        return { message: 'Province not found' }
      }

      return province
    },
    {
      params: t.Object({
        code: t.String()
      }),
      detail: {
        tags: [Tags.PROVINCES]
      }
    }
  )
