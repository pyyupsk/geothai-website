import { Container } from '@/components/container'
import { Logo } from '@/components/logo'
import { buttonVariants } from '@/components/ui/button'
import { navigation } from '@/constants/navigation'
import Link from 'next/link'

export function Header() {
    return (
        <header className="h-16 sticky bg-background/40 backdrop-blur-md border-b z-50">
            <Container reverse>
                <div className="flex items-center justify-between h-full container">
                    <Link href="/" className="flex items-center gap-2">
                        <Logo className="size-8" />
                        <h1 className="text-xl font-semibold">GeoThai</h1>
                    </Link>
                    <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center justify-center gap-8">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href} className="hover:text-foreground/80 text-sm">
                                    {item.name}
                                </Link>
                            ))}
                        </ul>
                    </nav>
                    <Link
                        href="/api"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ size: 'sm' })}
                    >
                        Get Started
                    </Link>
                </div>
            </Container>
        </header>
    )
}
