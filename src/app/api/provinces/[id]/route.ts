import { getProvinceById } from 'geothai'
import { NextRequest, NextResponse } from 'next/server'

/**
 * @description API endpoint to retrieve a single provinces by its ID
 * @route       GET /api/provinces/:id
 * @param {NextRequest} request - The Next.js request object
 * @returns     {NextResponse} - The JSON response with an array of province objects
 */
export async function GET(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
    const id = parseInt(params.id)
    const province = getProvinceById(id)

    if (!province) {
        return NextResponse.json({ message: 'Province not found' }, { status: 404 })
    }

    return NextResponse.json(province)
}
