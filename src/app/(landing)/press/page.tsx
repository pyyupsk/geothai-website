import { Container } from '@/components/container'
import { buttonVariants } from '@/components/ui/button'
import { Spotlight } from '@/components/ui/spotlight'
import { press } from '@/constants/press'
import { cn } from '@/lib/utils'
import { DownloadIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    return (
        <main className="py-12 min-h-screen">
            <Spotlight className="-z-10" />
            <section className="container py-20">
                <Container>
                    <h1 className="heading2 mb-6">Press and Media Assets</h1>
                    <p className="text-base md:text-lg mb-12">
                        Download official logos, icons, and brand guidelines for GeoThai. Use these assets to ensure
                        consistent branding in your publications.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {press.map((item) => (
                            <div
                                key={item.name}
                                className={cn(
                                    'shadow-md rounded border flex flex-col',
                                    item.dark ? 'bg-white' : 'bg-white/5'
                                )}
                            >
                                <div className={cn('aspect-video relative', !item.full && 'p-6')}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={500}
                                        height={500}
                                        className={cn('aspect-video', item.full && 'rounded-t')}
                                    />
                                </div>
                                <div className="p-6 border-t bg-card">
                                    <h3 className="heading3">{item.name}</h3>
                                    <p className="mt-2">{item.desc}</p>
                                    <div className="flex items-center gap-2 mt-4">
                                        {item.buttons.map((button) => (
                                            <Link
                                                key={button.name}
                                                href={button.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                download
                                                className={buttonVariants({ variant: 'white', size: 'sm' })}
                                            >
                                                {button.name}
                                                <DownloadIcon className="size-4" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    )
}
