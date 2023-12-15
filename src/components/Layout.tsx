import React from 'react'
import { Header } from './organisms/Header'
import { Footer } from './organisms/Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col bg-back-image bg-fixed text-neutral-900 min-h-screen relative pb-28">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
