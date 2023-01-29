import React from 'react'
import Contact from '../../Contact'
import { Logo } from '../atoms/Logo'

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center max-w-7xl w-11/12 mx-auto justify-between text-3xl bg-slate-400">
      <div className="flex justify-center items-center">
        <Logo className="text-8xl" />
        <div>Contact me</div>
      </div>
      <div>© 2023 Yuto Endo</div>
    </footer>
  )
}
