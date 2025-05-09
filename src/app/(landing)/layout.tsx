import { Fragment } from 'react'
import { Footer } from './components/footer'
import { Header } from './components/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}
