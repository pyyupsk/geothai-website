type Press = {
  name: string
  desc: string
  baseImage: string
  formats: string[]
  backgroundColor?: string
  full?: boolean
}

export const press: Press[] = [
  {
    name: 'GeoThai Logos - Dark',
    desc: 'Use the dark-themed version on light backgrounds to maintain contrast.',
    baseImage: '/assets/logos/GeoThai-logo-dark',
    formats: ['svg', 'png', 'webp']
  },
  {
    name: 'GeoThai Logos - Light',
    desc: 'Use the light-themed version on dark backgrounds to maintain contrast.',
    baseImage: '/assets/logos/GeoThai-logo-light',
    formats: ['svg', 'png', 'webp'],
    backgroundColor: '#000'
  },
  {
    name: 'GeoThai Logos - Standard',
    desc: 'Use the standard GeoThai logo for most applications.',
    baseImage: '/assets/logos/GeoThai-logo',
    formats: ['svg', 'png', 'webp']
  },
  {
    name: 'GeoThai OpenGraph',
    desc: 'Use the open-graph image for most applications.',
    baseImage: '/opengraph',
    formats: ['png'],
    full: true
  }
]
