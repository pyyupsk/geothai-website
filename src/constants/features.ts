import { Code, Database, FileText, Globe, Map, Package } from 'lucide-react'

type Feature = {
  icon: React.ElementType
  title: string
  desc: string
}

export const features: Feature[] = [
  {
    icon: Map,
    title: 'Comprehensive Geographic Data',
    desc: 'Access detailed geographic data for provinces, districts, and subdistricts in Thailand, including boundaries and coordinates.'
  },
  {
    icon: Globe,
    title: 'RESTful API',
    desc: 'Integrate geographic data into your applications with our robust and well-documented RESTful API.'
  },
  {
    icon: Code,
    title: 'Developer-Friendly Tools',
    desc: 'Leverage pre-built libraries and packages for Node.js and Python to simplify integration.'
  },
  {
    icon: Package,
    title: 'Node.js and Python Packages',
    desc: 'Quickly get started with our Node.js and Python packages designed for easy access and manipulation of geographic data.'
  },
  {
    icon: FileText,
    title: 'Extensive Documentation',
    desc: 'Access comprehensive guides, API references, and code examples to help you understand and use our services effectively.'
  },
  {
    icon: Database,
    title: 'Accurate & Up-to-Date Data',
    desc: 'Depend on accurate and regularly updated geographic data sourced from trusted repositories.'
  }
]
