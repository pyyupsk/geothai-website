import { getSubdistrictById } from 'geothai'
import { NextRequest, NextResponse } from 'next/server'

/**
 * @description API endpoint to retrieve a single subdistricts by its ID
 * @route       GET /api/subdistricts/:id
 * @param {NextRequest} request - The Next.js request object
 * @returns     {NextResponse} - The JSON response with an array of province objects
 */
export async function GET(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
    const id = parseInt(params.id)
    const subdistrict = getSubdistrictById(id)

    if (!subdistrict) {
        return NextResponse.json({ message: 'Subdistrict not found' }, { status: 404 })
    }

    return NextResponse.json(subdistrict)
}
