import React from 'react'
import Contact from '@/pages/contact'
import { Logo } from '../atoms/Logo'
import Link from 'next/link'
import PoweredByVercel from '../atoms/PoweredByVercel'

export const Footer = () => {
  return (
    <footer className="bg-neutral-400 absolute inset-x-0 bottom-0 h-[7rem]">
      <div className="py-3">
        <div className="flex flex-col items-center max-w-7xl w-11/12 mx-auto">
          <div className="flex justify-center items-center">
            <Logo />
            <Link href="/contact" className="ml-4 text-2xl">
              Contact me
            </Link>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <div className="text-md">© 2023 bondroid1322</div>
            <PoweredByVercel
              svgProps={{
                width: 120
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
