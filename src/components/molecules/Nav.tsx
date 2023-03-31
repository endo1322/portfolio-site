import Link from 'next/link'
import React from 'react'

type NavProps = {
  className: string[]
  onClick?: any
}

export const Nav = (props: NavProps) => {
  return (
    <nav>
      <ul className={`flex md:flex-row flex-col md:gap-5 md:pr-5 z-50 md:z-0 absolute md:relative ${props.className.join(' ')}`}>
        <li className='mx-auto my-auto md:my-0' onClick={props.onClick}>
          <Link href="/">
            <div className=" hover:text-neutral-400 text-3xl">Home</div>
          </Link>
        </li>
        <li className='mx-auto my-auto md:my-0' onClick={props.onClick}>
          <Link href="/about">
            <div className="hover:text-neutral-400 text-3xl">About</div>
          </Link>
        </li>
        <li className='mx-auto my-auto md:my-0' onClick={props.onClick}>
          <Link href="/work">
            <div className="hover:text-neutral-400 text-3xl">Work</div>
          </Link>
        </li>
        <li className='mx-auto my-auto md:my-0' onClick={props.onClick}>
          <Link href="/blog">
            <div className="hover:text-neutral-400 text-3xl">Blog</div>
          </Link>
        </li>
        <li className='mx-auto my-auto md:my-0' onClick={props.onClick}>
          <Link href="/contact">
            <div className="hover:text-neutral-400 text-3xl">Contact</div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
