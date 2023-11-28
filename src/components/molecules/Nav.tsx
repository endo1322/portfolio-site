import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <nav className="text-3xl font-righteous">
      <ul className="flex flexf-row gap-5 pr-5">
        <li>
          <Link href="/">
            <div className="hover:text-neutral-400">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <div className="hover:text-neutral-400">About</div>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <div className="hover:text-neutral-400">Work</div>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <div className="hover:text-neutral-400">Blog</div>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <div className="hover:text-neutral-400">Contact</div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
