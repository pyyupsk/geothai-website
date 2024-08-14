import { getAllSubdistricts, getSubdistrictsByCriterion } from 'geothai'
import { NextRequest, NextResponse } from 'next/server'

/**
 * @description API endpoint to retrieve all subdistricts and filter by district ID and province ID
 * @route       GET /api/subdistricts
 * @param {NextRequest} request - The Next.js request object
 * @returns     {NextResponse} - The JSON response with an array of province objects
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const provinceId = searchParams.get('province_id') ? parseInt(searchParams.get('province_id')!) : undefined
    const districtId = searchParams.get('district_id') ? parseInt(searchParams.get('district_id')!) : undefined

    let subdistricts
    if (districtId !== undefined) {
        subdistricts = getSubdistrictsByCriterion({ district_id: districtId })
    } else if (provinceId !== undefined) {
        subdistricts = getSubdistrictsByCriterion({ province_id: provinceId })
    } else {
        subdistricts = getAllSubdistricts()
    }

    const total = subdistricts.length
    const start = (page - 1) * limit
    const end = start + limit
    const data = subdistricts.slice(start, end)

    return NextResponse.json({
        total,
        page,
        limit,
        data
    })
}
