import { getAllDistricts, getDistrictsByCriterion } from 'geothai'
import { NextRequest, NextResponse } from 'next/server'

/**
 * @description API endpoint to retrieve all districts and filter by province ID
 * @route       GET /api/districts
 * @param {NextRequest} request - The Next.js request object
 * @returns     {NextResponse} - The JSON response with an array of province objects
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const provinceId = searchParams.get('province_id') ? parseInt(searchParams.get('province_id')!) : undefined

    let districts
    if (provinceId !== undefined) {
        districts = getDistrictsByCriterion({ province_id: provinceId })
    } else {
        districts = getAllDistricts()
    }

    const total = districts.length
    const start = (page - 1) * limit
    const end = start + limit
    const data = districts.slice(start, end)

    return NextResponse.json({
        total,
        page,
        limit,
        data
    })
}
