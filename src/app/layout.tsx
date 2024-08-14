import '@/styles/globals.css'
import { commonMetaData } from '@/lib/meta'
import type { Metadata } from 'next'
import { Kanit as FontSans } from 'next/font/google'

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export async function generateMetadata(): Promise<Metadata> {
    const metaData: Metadata = commonMetaData({
        title: {
            template: `%s | GeoThai API`,
            default: 'GeoThai API | Comprehensive Geographic Data for Thailand'
        },
        description:
            'Discover GeoThai API for easy access to detailed geographic data of Thailand. Seamlessly integrate and scale with our robust RESTful API and developer tools.'
    })

    return metaData
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body className={fontSans.className}>{children}</body>
        </html>
    )
}
