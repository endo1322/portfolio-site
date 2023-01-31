import React from 'react'
import Contact from '../../Contact'
import { Logo } from '../atoms/Logo'

export const Footer = () => {
  return (
    <footer className=" bg-slate-400 ">
      <div className="flex flex-col items-center max-w-7xl w-11/12 text-3xl mx-auto">
        <div className="flex justify-center items-center">
          <Logo className="text-8xl" />
          <div>Contact me</div>
        </div>
        <div>© 2023 Yuto Endo</div>
      </div>
    </footer>
  )
}
