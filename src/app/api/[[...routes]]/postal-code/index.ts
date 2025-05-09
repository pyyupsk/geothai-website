import { Tags } from '@/app/api/types'
import { Elysia, t } from 'elysia'
import {
  DistrictIndex,
  getAllSubdistricts,
  getDistrictByCode,
  getProvinceByCode,
  ProvinceIndex
} from 'geothai'

export const postalCodeRouter = new Elysia({ prefix: '/postal-code' }).get(
  '/:code',
  ({ params, set }) => {
    const subdistricts = getAllSubdistricts()

    const subdistrict = subdistricts.find((s) => s.postal_code === params.code)
    if (!subdistrict) {
      set.status = 404
      return { error: 'Postal code not found' }
    }

    const province = getProvinceByCode(String(subdistrict.province_code) as ProvinceIndex)
    const district = getDistrictByCode(String(subdistrict.district_code) as DistrictIndex)

    if (!district || !province || !subdistrict) {
      set.status = 404
      return { error: 'Postal code not found' }
    }

    return {
      province: {
        code: province.code,
        name_en: province.name_en,
        name_th: province.name_th
      },
      district: {
        code: district.code,
        name_en: district.name_en,
        name_th: district.name_th
      },
      subdistrict: {
        code: subdistrict.code,
        name_en: subdistrict.name_en,
        name_th: subdistrict.name_th,
        postal_code: subdistrict.postal_code
      }
    }
  },
  {
    params: t.Object({
      code: t.Number()
    }),
    detail: {
      tags: [Tags.POSTAL_CODE]
    }
  }
)
