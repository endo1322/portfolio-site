import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <Link href="/">
      <img src="logo.svg" alt="site logo" />
    </Link>
  )
}
