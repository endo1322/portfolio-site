import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <nav>
      <ul className={`flex flexf-row gap-5 pr-5`}>
        <li>
          <Link href="/">
            <div className=" hover:text-neutral-400 text-3xl">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <div className="hover:text-neutral-400 text-3xl">About</div>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <div className="hover:text-neutral-400 text-3xl">Work</div>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <div className="hover:text-neutral-400 text-3xl">Blog</div>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <div className="hover:text-neutral-400 text-3xl">Contact</div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
