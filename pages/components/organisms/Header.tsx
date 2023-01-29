import React from 'react'
import { Logo } from '../atoms/Logo'
import { Nav } from '../molecules/Nav'

export const Header = () => {
  return (
    <header className="flex max-w-7xl w-11/12 mx-auto justify-between items-center text-3xl bg-slate-400">
      <Logo className="text-6xl" />
      <Nav />
    </header>
  )
}
