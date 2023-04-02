import React, {useState, useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'
import { Logo } from '../atoms/Logo'
import { Nav } from '../molecules/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Hamburger } from './Hamburger'

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const className: string[] = []
  open === false
    ? className.push("translate-x-full")
    : className.push("translate-x-0")
  const onClick = (e: boolean) => {
    setOpen(e)
  }

  return (
    <header className="sticky top-0 z-50 bg-neutral-300 bg-opacity-90 max-w-full h-20">
      <div className="md:flex md:max-w-7xl w-11/12 md:mx-auto md:justify-between md:items-center py-2.5">
        <div className='flex w-11/12 mx-auto justify-between items-center'>
          <Logo className="text-6xl" />
          {open === false
          ? <FontAwesomeIcon className="md:hidden cursor-pointer" icon={faBars} size="2xl" style={{color: "#171717"}} onClick={() => onClick(true)} />
          : <FontAwesomeIcon className="md:hidden cursor-pointer" icon={faXmark} size="2xl" style={{color: "#171717"}} onClick={() => onClick(false)} />
        }
        </div>
        <div className=''>
          {mounted
          && <div><MobileOrDesk className={className} onClick={() => onClick(false)}/></div>}
        </div>
      </div>
    </header>
  )
}

type MobileOrDeskProps = {
  className: string[]
  onClick: any
}

// useMediaQueryがクライアント側でしか動作しない
// →next.jsのサーバサイドのビルドと違った結果が返ってきてしまう。
const MobileOrDesk = (props: MobileOrDeskProps) => {
  const isDesktop: boolean = useMediaQuery({ query: '(min-width: 768px)' })
  return(
    <>
    {isDesktop
      ? <Nav />
      : <Hamburger className={props.className} onClick={props.onClick} />}
    </>
  )
}