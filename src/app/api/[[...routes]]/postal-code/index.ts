import { Elysia, t } from 'elysia'
import { getAllDistricts, getAllProvinces, getAllSubdistricts } from 'geothai'

export const postalCodeRouter = new Elysia({ prefix: '/postal-code' }).get(
    '/:postal_code',
    ({ params, set }) => {
        const postalCode = parseInt(params.postal_code)

        const districts = getAllDistricts()
        const provinces = getAllProvinces()
        const subdistricts = getAllSubdistricts()

        const district = districts.find((d) => d.postal_code === postalCode)
        const province = provinces.find((p) => p.province_id === district!.province_id)
        const subdistrict = subdistricts.find((s) => s.postal_code === postalCode)

        if (!district || !province || !subdistrict) {
            set.status = 404
            return { error: 'Postal code not found' }
        }

        return {
            province: province.province_name_th,
            district: {
                district_name_en: district.district_name_en,
                district_name_th: district.district_name_th,
                postal_code: district.postal_code
            }
        }
    },
    {
        params: t.Object({
            postal_code: t.String()
        })
    }
)
