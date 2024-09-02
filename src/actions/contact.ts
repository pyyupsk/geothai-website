'use server'

import { ContactFormData } from '@/components/contact-form'
import { env } from '@/env'

export async function sendContactForm(data: ContactFormData) {
    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            access_key: env.WEB3FORMS_ACCESS_KEY,
            subject: 'New contact form submission from GeoThai',
            name: data.name,
            email: data.email,
            message: data.message
        })
    })

    if (!response.ok) {
        throw new Error('Failed to send contact form')
    }

    return response.json()
}
