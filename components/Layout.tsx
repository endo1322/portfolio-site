import React from 'react'
import { Header } from './organisms/Header'
import { Footer } from './organisms/Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-back-image bg-fixed text-neutral-900">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
