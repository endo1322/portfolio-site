import Link from 'next/link'
import React from 'react'

interface LogoProps {
  className: string
}
export const Logo = (props: LogoProps) => {
  return (
    <Link href="/">
      <img src="logo.svg" alt="site logo" />
    </Link>
  )
}
