import { ContactForm } from '@/components/contact-form'
import { Container } from '@/components/container'
import { Button, buttonVariants } from '@/components/ui/button'
import { navigation } from '@/constants/navigation'
import Link from 'next/link'

export function Header() {
  return (
    <header className="h-16 fixed w-full bg-background/40 backdrop-blur-md border-b z-50">
      <Container reverse>
        <div className="flex items-center justify-between h-full container">
          <Link href="/">
            <h1 className="heading3">GeoThai</h1>
          </Link>
          <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center justify-center gap-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target={item.target}
                    {...(item.target === '_blank' && { rel: 'noopener noreferrer' })}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <ContactForm>
              <Button variant="outline" size="sm">
                Contact Us
              </Button>
            </ContactForm>
            <Link
              href="/api/swagger"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: 'sm' })}
            >
              Get Started
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
