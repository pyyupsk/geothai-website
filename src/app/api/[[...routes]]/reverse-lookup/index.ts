import { Tags } from '@/app/api/types'
import { Elysia, t } from 'elysia'
import {
  getDistrictsByCriterion,
  getProvincesByCriterion,
  getSubdistrictsByCriterion,
  Subdistrict
} from 'geothai'

export const reverseLookupRouter = new Elysia({ prefix: '/reverse-lookup' }).get(
  '',
  ({ query, set }) => {
    const { province_name_th, district_name_th, subdistrict_name_th } = query

    if (!province_name_th) {
      set.status = 400
      return { message: 'Province is required' }
    }

    const provinces = getProvincesByCriterion({
      name_th: province_name_th
    })

    if (provinces.length === 0) {
      set.status = 404
      return { message: 'Province not found' }
    }

    const province = provinces[0]

    let districts
    if (district_name_th) {
      districts = getDistrictsByCriterion({
        province_code: province.code,
        name_th: district_name_th
      })
    } else {
      districts = getDistrictsByCriterion({
        province_code: province.code
      })
    }

    let subdistricts: Subdistrict[] = []

    if (subdistrict_name_th) {
      for (const district of districts) {
        subdistricts = subdistricts.concat(
          getSubdistrictsByCriterion({
            district_code: district.code,
            name_th: subdistrict_name_th
          })
        )
      }
    } else {
      for (const district of districts) {
        subdistricts = subdistricts.concat(
          getSubdistrictsByCriterion({
            district_code: district.code
          })
        )
      }
    }

    const formattedSubdistricts = subdistricts.map((subdistrict) => ({
      code: subdistrict.code,
      name_th: subdistrict.name_th,
      name_en: subdistrict.name_en,
      postal_code: subdistrict.postal_code
    }))

    const formattedDistricts = districts.map((district) => ({
      code: district.code,
      name_th: district.name_th,
      name_en: district.name_en,
      subdistricts: formattedSubdistricts
    }))

    return {
      province: {
        code: province.code,
        name_th: province.name_th,
        name_en: province.name_en
      },
      districts: formattedDistricts
    }
  },
  {
    query: t.Object({
      province_name_th: t.String(),
      district_name_th: t.Optional(t.String()),
      subdistrict_name_th: t.Optional(t.String())
    }),
    detail: {
      tags: [Tags.REVERSE_LOOKUP]
    }
  }
)
