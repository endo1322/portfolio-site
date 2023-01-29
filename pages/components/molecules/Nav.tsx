import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-5 pr-5">
        <li>
          <Link href="/">
            <div className="hover:text-stone-50">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <div className="hover:text-stone-50">About</div>
          </Link>
        </li>
        <li>
          <Link href="/Work">
            <div className="hover:text-stone-50">Work</div>
          </Link>
        </li>
        <li>
          <Link href="/Blog">
            <div className="hover:text-stone-50">Blog</div>
          </Link>
        </li>
        <li>
          <Link href="/Contact">
            <div className="hover:text-stone-50">Contact</div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
