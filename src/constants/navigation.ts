type Navigation = {
  name: string
  href: string
  target?: string
}

export const navigation: Navigation[] = [
  { name: 'Home', href: '/' },
  { name: 'Documentation', href: '/api/swagger', target: '_blank' },
  { name: 'Press', href: '/press' }
]
