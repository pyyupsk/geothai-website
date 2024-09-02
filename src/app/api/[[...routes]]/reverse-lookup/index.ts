import { Elysia, t } from 'elysia'
import { getDistrictsByCriterion, getProvincesByCriterion } from 'geothai'

export const reverseLookupRouter = new Elysia({ prefix: '/reverse-lookup' }).get(
    '/',
    ({ query, set }) => {
        const { province_name_th, district_name_th } = query

        if (!province_name_th) {
            set.status = 400
            return { message: 'Province is required' }
        }

        const provinces = getProvincesByCriterion({
            province_name_th
        })

        if (provinces.length === 0) {
            set.status = 404
            return { message: 'Province not found' }
        }

        const province = provinces[0]

        let districts
        if (district_name_th) {
            districts = getDistrictsByCriterion({
                province_id: province.province_id,
                district_name_th
            })
        } else {
            districts = getDistrictsByCriterion({
                province_id: province.province_id
            })
        }

        const formattedDistricts = districts.map((district) => ({
            district_name_th: district.district_name_th,
            district_name_en: district.district_name_en,
            zip_codes: district.postal_code
        }))

        return {
            province: {
                province_name_th: province.province_name_th,
                province_name_en: province.province_name_en
            },
            districts: formattedDistricts
        }
    },
    {
        query: t.Object({
            province_name_th: t.String(),
            district_name_th: t.Optional(t.String())
        })
    }
)
