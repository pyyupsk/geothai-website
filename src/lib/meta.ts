import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface'
import { TemplateString } from 'next/dist/lib/metadata/types/metadata-types'

type CommonMetaData = {
    title: string | TemplateString
    description: string
}

export function commonMetaData({ title, description }: CommonMetaData) {
    return {
        title,
        description,
        authors: 'GeoThai',
        metadataBase: new URL('https://geothai.fasu.dev/'),
        openGraph: {
            title,
            description,
            images: [
                {
                    url: '/opengraph.png',
                    width: 1200,
                    height: 630
                }
            ]
        }
    } as Metadata
}
