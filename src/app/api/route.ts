import { redirect } from 'next/navigation'

/**
 * GET function for the API route.
 * Redirects the user to the API documentation on Postman.
 *
 * @return {Promise<void>} - A promise that resolves when the redirection is complete.
 */
export async function GET(): Promise<void> {
    redirect(
        'https://www.postman.com/pyyupsk/workspace/geothai-api/collection/35081948-b6a67405-7d06-4999-991e-60429e31104c'
    )
}
