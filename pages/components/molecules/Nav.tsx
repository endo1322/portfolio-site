import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-5 pr-5">
        <li>
          <Link href="/">
            <div className="hover:text-neutral-400">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <div className="hover:text-neutral-400">About</div>
          </Link>
        </li>
        <li>
          <Link href="/Work">
            <div className="hover:text-neutral-400">Work</div>
          </Link>
        </li>
        <li>
          <Link href="/Blog">
            <div className="hover:text-neutral-400">Blog</div>
          </Link>
        </li>
        <li>
          <Link href="/Contact">
            <div className="hover:text-neutral-400">Contact</div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
