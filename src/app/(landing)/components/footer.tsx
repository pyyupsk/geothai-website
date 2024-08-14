import { legals } from '@/constants/legals'
import { navigation } from '@/constants/navigation'
import { socials } from '@/constants/socials'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-background text-foreground py-8 border-t">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container">
                <div className="mb-8 md:mb-0">
                    <h3 className="heading3">GeoThai</h3>
                    <p className="text-sm mt-4">
                        Your go-to source for detailed geographic data on Thailand, including provinces, districts, and
                        subdistricts.
                    </p>
                    <p className="text-sm mt-4">© {new Date().getFullYear()} GeoThai. All rights reserved.</p>
                </div>
                <div className="mb-8 md:mb-0">
                    <h4 className="heading4 mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        {navigation.slice(1).map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-8 md:mb-0">
                    <h4 className="heading4 mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        {legals.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="heading4 mb-4">Contact Us</h4>
                    <ul className="space-y-2">
                        {socials.map((item) => (
                            <li key={item.name}>
                                <p className="text-sm">
                                    {item.name}:{' '}
                                    <Link
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </p>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-4 mt-4">
                        {socials.map((item) => (
                            <Link key={item.name} href={item.link} target="_blank" rel="noopener noreferrer">
                                <item.icon className="size-5 text-muted-foreground" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
