import Link from 'next/link'
import React from 'react'

interface LogoProps {
  className: string
}
export const Logo = (props: LogoProps) => {
  return (
    <Link href="/">
      <div className={props.className}>LOGO</div>
    </Link>
  )
}
