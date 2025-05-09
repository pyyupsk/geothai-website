type Press = {
  name: string
  desc: string
  image: string
  dark?: boolean
  full?: boolean
  buttons: Button[]
}

type Button = {
  name: string
  url: string
}

export const press: Press[] = [
  {
    name: 'GeoThai Icons - Dark',
    desc: 'Use the dark-themed version on light backgrounds to maintain contrast.',
    image: '/assets/press/icons/GeoThai-icon-dark.svg',
    dark: true,
    buttons: [
      {
        name: 'PNG',
        url: '/assets/press/icons/GeoThai-icon-dark.png'
      },
      {
        name: 'SVG',
        url: '/assets/press/icons/GeoThai-icon-dark.svg'
      }
    ]
  },
  {
    name: 'GeoThai Icons - Light',
    desc: 'Use the light-themed version on dark backgrounds to maintain contrast.',
    image: '/assets/press/icons/GeoThai-icon-light.svg',
    buttons: [
      {
        name: 'PNG',
        url: '/assets/press/icons/GeoThai-icon-light.png'
      },
      {
        name: 'SVG',
        url: '/assets/press/icons/GeoThai-icon-light.svg'
      }
    ]
  },
  {
    name: 'GeoThai Icons - Standard',
    desc: 'Use the standard GeoThai logo for most applications.',
    image: '/assets/press/icons/GeoThai-icon.svg',
    buttons: [
      {
        name: 'PNG',
        url: '/assets/press/icons/GeoThai-icon.png'
      },
      {
        name: 'SVG',
        url: '/assets/press/icons/GeoThai-icon.svg'
      }
    ]
  },
  {
    name: 'GeoThai Logos - Dark',
    desc: 'Use the dark-themed version on light backgrounds to maintain contrast.',
    image: '/assets/press/logos/GeoThai-logo-dark.svg',
    dark: true,
    buttons: [
      {
        name: 'PNG',
        url: '/assets/press/logos/GeoThai-logo-dark.png'
      },
      {
        name: 'SVG',
        url: '/assets/press/logos/GeoThai-logo-dark.svg'
      }
    ]
  },
  {
    name: 'GeoThai Logos - Light',
    desc: 'Use the light-themed version on dark backgrounds to maintain contrast.',
    image: '/assets/press/logos/GeoThai-logo-light.svg',
    buttons: [
      {
        name: 'PNG',
        url: '/assets/press/logos/GeoThai-logo-light.png'
      },
      {
        name: 'SVG',
        url: '/assets/press/logos/GeoThai-logo-light.svg'
      }
    ]
  },
  {
    name: 'GeoThai Logos - Standard',
    desc: 'Use the standard GeoThai logo for most applications.',
    image: '/assets/press/logos/GeoThai-logo.svg',
    buttons: [
      {
        name: 'PNG',
        url: '/assets/press/logos/GeoThai-logo.png'
      },
      {
        name: 'SVG',
        url: '/assets/press/logos/GeoThai-logo.svg'
      }
    ]
  },
  {
    name: 'GeoThai OpenGraph',
    desc: 'Use the open-graph image for most applications.',
    image: '/assets/press/opengraph.png',
    full: true,
    buttons: [
      {
        name: 'PNG',
        url: '/assets/press/opengraph.png'
      }
    ]
  }
]
