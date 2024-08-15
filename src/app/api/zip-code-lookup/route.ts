import { getDistrictsByCriterion, getProvincesByCriterion } from 'geothai'
import { NextRequest, NextResponse } from 'next/server'

/**
 * @description API endpoint to retrieve districts and zip codes by province name and district name
 * @route       GET /api/zip-code-lookup
 * @param {NextRequest} request - The Next.js request object
 * @returns     {NextResponse} - The JSON response with an array of district objects
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
    const searchParams = request.nextUrl.searchParams
    const provinceName = searchParams.get('province_name_th')
    const districtName = searchParams.get('district_name_th')

    if (!provinceName) {
        return NextResponse.json({ message: 'Province is required' }, { status: 400 })
    }

    const provinces = getProvincesByCriterion({
        province_name_th: provinceName
    })

    if (provinces.length === 0) {
        return NextResponse.json({ message: 'Province not found' }, { status: 404 })
    }

    const province = provinces[0]

    let districts
    if (districtName) {
        districts = getDistrictsByCriterion({
            province_id: province.province_id,
            district_name_th: districtName
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

    return NextResponse.json({
        province: {
            province_name_th: province.province_name_th,
            province_name_en: province.province_name_en
        },
        districts: formattedDistricts
    })
}
