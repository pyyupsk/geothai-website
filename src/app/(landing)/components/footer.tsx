import { navigation } from '@/constants/navigation'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-background text-foreground">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container">
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">GeoThai</h3>
                        <p className="text-muted-foreground text-sm">
                            Your go-to source for detailed geographic data on Thailand, including provinces, districts,
                            and subdistricts.
                        </p>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
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
                        <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                        <p className="text-muted-foreground mb-2 text-sm">
                            Email:{' '}
                            <Link
                                href="mailto:pyyupsk@proton.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground transition-colors"
                            >
                                pyyupsk@proton.me
                            </Link>
                        </p>
                        <p className="text-muted-foreground text-sm">
                            GitHub:{' '}
                            <Link
                                href="https://github.com/GeoThai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground transition-colors"
                            >
                                @GeoThai
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="mt-12 py-8 border-t text-center">
                    <p className="text-muted-foreground">© 2023 GeoThai. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
