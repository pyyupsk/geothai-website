import { GithubIcon, MailIcon } from 'lucide-react'

type Social = {
    name: string
    label: string
    link: string
    icon: React.ElementType
}

export const socials: Social[] = [
    {
        name: 'Email',
        label: 'contact@fasu.dev',
        link: 'mailto:contact@fasu.dev',
        icon: MailIcon
    },
    {
        name: 'Github',
        label: '@GeoThai',
        link: 'https://github.com/GeoThai',
        icon: GithubIcon
    }
]
