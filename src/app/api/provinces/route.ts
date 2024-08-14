import { getAllProvinces } from 'geothai'
import { NextRequest, NextResponse } from 'next/server'

/**
 * @description API endpoint to retrieve all provinces in Thailand
 * @route       GET /api/provinces
 * @param {NextRequest} request - The Next.js request object
 * @returns     {NextResponse} - The JSON response with an array of province objects
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    const provinces = getAllProvinces()
    const total = provinces.length

    const start = (page - 1) * limit
    const end = start + limit

    const data = provinces.slice(start, end)

    return NextResponse.json({
        total,
        page,
        limit,
        data
    })
}
