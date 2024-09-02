import '@/styles/globals.css'
import { Toaster } from '@/components/ui/toaster'
import { Kanit as FontSans } from 'next/font/google'

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body className={fontSans.className}>
                {children}
                <Toaster />
            </body>
        </html>
    )
}
