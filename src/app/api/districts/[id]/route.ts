import { getDistrictById } from 'geothai'
import { NextRequest, NextResponse } from 'next/server'

/**
 * @description API endpoint to retrieve a single districts by its ID
 * @route       GET /api/districts/:id
 * @param {NextRequest} request - The Next.js request object
 * @returns     {NextResponse} - The JSON response with an array of province objects
 */
export async function GET(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
    const id = parseInt(params.id)
    const district = getDistrictById(id)

    if (!district) {
        return NextResponse.json({ message: 'District not found' }, { status: 404 })
    }

    return NextResponse.json(district)
}
