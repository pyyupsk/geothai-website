import PostmanImage from '@/assets/images/postman.png'
import { BackgroundBox } from '@/components/background-box'
import { Container } from '@/components/container'
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '@/components/ui/button'
import { LampContainer } from '@/components/ui/lamp'
import { SectionBadge } from '@/components/ui/section-badge'
import { features } from '@/constants/features'
import { steps } from '@/constants/steps'
import { commonMetaData } from '@/lib/meta'
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
    const metaData: Metadata = commonMetaData({
        title: 'GeoThai API | Comprehensive Geographic Data for Thailand',
        description:
            'Discover GeoThai API for easy access to detailed geographic data of Thailand. Seamlessly integrate and scale with our robust RESTful API and developer tools.'
    })

    return metaData
}

export default function Page() {
    return (
        <main className="relative py-12 overflow-x-hidden">
            {/* Hero */}
            <section className="container">
                <BackgroundBox />
                <Container>
                    <div className="flex flex-col items-center justify-center py-20">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                                <Sparkles className="w-4 h-4" />
                                Introducing GeoThai API
                                <ChevronRight className="w-4 h-4" />
                            </span>
                        </button>

                        <div className="flex flex-col items-center mt-8 max-w-3xl">
                            <h1 className="heading1 text-center bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground text-transparent">
                                Explore Thailand’s Geographic Data
                            </h1>
                            <p className="text-base md:text-lg mt-6 text-center">
                                Access Detailed and Accurate Geographic Data Through Our User-Friendly API and Explore
                                Various Tools and Resources Tailored for Developers and Researchers.
                            </p>
                            <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                                <Link
                                    href="/api"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-max rounded-full border-t border-foreground/20 bg-foreground/10 backdrop-blur px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none"
                                >
                                    <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                                        ✨ Start enhancing your application with GeoThai API!
                                    </p>
                                    <Button
                                        size="sm"
                                        className="rounded-full hidden lg:flex border border-foreground/20"
                                    >
                                        Get Started
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative flex items-center py-10 md:py-20 w-full">
                            <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]" />
                            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                                <Image
                                    src={PostmanImage}
                                    alt="postman image"
                                    width={1200}
                                    height={1200}
                                    quality={100}
                                    className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
                                />
                                <BorderBeam size={250} duration={12} delay={9} />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* How it works */}
            <section className="container py-12 relative">
                <Container>
                    <div className="max-w-2xl mx-auto text-start md:text-center">
                        <SectionBadge title="The Process" />
                        <h2 className="heading2 mt-6">Three Steps to Integrate GeoThai API into Your Application</h2>
                        <p className="mt-6">Turn your vision into reality in just 3 simple steps</p>
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-border">
                            {steps.map((steps) => (
                                <div
                                    key={steps.title}
                                    className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4"
                                >
                                    <div className="flex items-center justify-center">
                                        <steps.icon className="size-8" />
                                    </div>
                                    <h3 className="heading3 mt-4">{steps.title}</h3>
                                    <p className="mt-2">{steps.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Features */}
            <section className="container py-12 relative">
                <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-[#006edb] rounded-full blur-[10rem] -z-10" />
                <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-[#1A8CFF] rounded-full blur-[10rem] -z-10" />
                <Container>
                    <div className="max-w-2xl mx-auto text-start md:text-center">
                        <SectionBadge title="Features" />
                        <h2 className="heading2 mt-6">Discover the powerful capabilities of GeoThai API</h2>
                        <p className="mt-6">
                            GeoThai provides a suite of features to help you effortlessly integrate comprehensive
                            geographic data into your application.
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                            {features.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="flex flex-col items-start lg:items-start px-0 md:px-0"
                                >
                                    <div className="flex items-center justify-center">
                                        <feature.icon className="size-8" />
                                    </div>
                                    <h3 className="heading3 mt-4">{feature.title}</h3>
                                    <p className="mt-2">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Call to action */}
            <section className="pt-12 relative">
                <Container>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="heading1 mt-8">
                                From Idea to Integration <br /> Faster Than Ever
                            </h2>
                            <p className="mt-6 max-w-2xl mx-auto">
                                Seamlessly integrate comprehensive geographic data into your applications with
                                GeoThai&apos;s easy-to-use API and detailed documentation.
                            </p>
                            <Button variant="white" className="mt-6" asChild>
                                <Link href="/api" target="_blank" rel="noopener noreferrer">
                                    Get started for free
                                    <ArrowRight className="size-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </LampContainer>
                </Container>
            </section>
        </main>
    )
}
