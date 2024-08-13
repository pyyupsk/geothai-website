import { Code, Rocket, Search } from 'lucide-react'

type Step = {
    icon: React.ElementType
    title: string
    desc: string
}

export const steps: Step[] = [
    {
        icon: Search,
        title: 'Explore the API',
        desc: 'Browse our API documentation to understand the available endpoints and the data you can access.'
    },
    {
        icon: Code,
        title: 'Integrate with Your Application',
        desc: 'Use our developer tools, including Node.js and Python packages, to integrate geographic data into your projects.'
    },
    {
        icon: Rocket,
        title: 'Deploy and Scale',
        desc: 'Deploy your application with confidence, knowing you have accurate and up-to-date geographic data as your project grows.'
    }
]
