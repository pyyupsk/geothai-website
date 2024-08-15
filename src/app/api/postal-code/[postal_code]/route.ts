import { getAllDistricts, getAllProvinces, getAllSubdistricts } from 'geothai'
import { NextRequest, NextResponse } from 'next/server'

/**
 * @description API endpoint to retrieve the district and subdistrict details associated with that postal code.
 * @route       GET /api/postal-code/:postal_code
 * @param {NextRequest} request - The Next.js request object
 * @returns     {NextResponse} - The JSON response with an array of province objects
 */
export async function GET(
    request: NextRequest,
    { params }: { params: { postal_code: string } }
): Promise<NextResponse> {
    const postalCode = parseInt(params.postal_code)

    const districts = getAllDistricts()
    const provinces = getAllProvinces()
    const subdistricts = getAllSubdistricts()

    const district = districts.find((d) => d.postal_code === postalCode)
    const province = provinces.find((p) => p.province_id === district!.province_id)
    const subdistrict = subdistricts.find((s) => s.postal_code === postalCode)

    if (!district || !province || !subdistrict) {
        return NextResponse.json({ error: 'Postal code not found' }, { status: 404 })
    }

    return NextResponse.json({
        province: province.province_name_th,
        district: {
            district_name_en: district.district_name_en,
            district_name_th: district.district_name_th,
            postal_code: district.postal_code
        }
    })
}
