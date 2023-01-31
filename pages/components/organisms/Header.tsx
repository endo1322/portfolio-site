import React from 'react'
import { Logo } from '../atoms/Logo'
import { Nav } from '../molecules/Nav'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-neutral-300 bg-opacity-75 drop-shadow">
      <div className="flex max-w-7xl w-11/12 mx-auto justify-between items-center text-3xl py-2.5">
        <Logo className="text-6xl" />
        <Nav />
      </div>
    </header>
  )
}
