import { legals } from '@/constants/legals'
import { navigation } from '@/constants/navigation'
import { socials } from '@/constants/socials'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-background text-foreground">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container">
                    <div className="mb-8 md:mb-0">
                        <h3 className="heading3 mb-4">GeoThai</h3>
                        <p className="text-sm">
                            Your go-to source for detailed geographic data on Thailand, including provinces, districts,
                            and subdistricts.
                        </p>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h4 className="heading4 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {navigation.map((item) => (
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
                        {socials.map((item) => (
                            <p key={item.name} className="text-sm">
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
                        ))}
                        <div className="flex space-x-2 mt-4">
                            {socials.map((item) => (
                                <Link key={item.name} href={item.link} target="_blank" rel="noopener noreferrer">
                                    <item.icon className="size-5 text-muted-foreground" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-12 py-8 border-t">
                    <div className="container flex justify-between">
                        <p className="text-sm">© {new Date().getFullYear()} GeoThai. All rights reserved.</p>
                        <div className="flex space-x-4">
                            {legals.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
