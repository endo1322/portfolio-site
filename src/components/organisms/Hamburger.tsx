import React from 'react'
import Link from 'next/link'

type HamburgerProps = {
    className: string[]
    onClick: (value: false) => void;
  }

export const Hamburger = (props: HamburgerProps) => {
    console.log(props)
    return (
        <nav className={`fixed top-16 left-0 w-full h-full z-50mt-2.5 bg-neutral-300 opacity-90 pb-48 transition transform duration-300 ${props.className.join(' ')}`}>
          <ul className={`flex flex-col h-full`}>
            <li className='w-80 mx-auto py-6 my-auto border-b border-neutral-400' onClick={() => props.onClick}>
              <Link href="/">
                <div className="flex justify-center hover:text-neutral-400 text-3xl">Home</div>
              </Link>
            </li>
            <li className='w-80 mx-auto py-6 my-auto border-b border-neutral-400' onClick={() => props.onClick}>
              <Link href="/about">
                <div className="flex justify-center hover:text-neutral-400 text-3xl">About</div>
              </Link>
            </li>
            <li className='w-80 mx-auto py-6 my-auto border-b border-neutral-400' onClick={() => props.onClick}>
              <Link href="/work">
                <div className="flex justify-center hover:text-neutral-400 text-3xl">Work</div>
              </Link>
            </li>
            <li className='w-80 mx-auto py-6 my-auto border-b border-neutral-400' onClick={() => props.onClick}>
              <Link href="/blog">
                <div className="flex justify-center hover:text-neutral-400 text-3xl">Blog</div>
              </Link>
            </li>
            <li className='w-80 mx-auto py-6 my-auto border-b border-neutral-400' onClick={() => props.onClick}>
              <Link href="/contact">
                <div className="flex justify-center hover:text-neutral-400 text-3xl">Contact</div>
              </Link>
            </li>
          </ul>
        </nav>
      )
}
