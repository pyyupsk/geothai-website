import { GlobeLock, Handshake } from 'lucide-react'

type Legal = {
    name: string
    href: string
    icon: React.ElementType
}

export const legals: Legal[] = [
    {
        name: 'Privacy Policy',
        href: '/privacy',
        icon: Handshake
    },
    {
        name: 'Terms of Service',
        href: '/terms',
        icon: GlobeLock
    }
]
