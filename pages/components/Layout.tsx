import React from 'react'
import { Header } from './organisms/Header'
import { Footer } from './organisms/Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
