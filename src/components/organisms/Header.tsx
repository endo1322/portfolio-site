import React, {useState} from 'react'
import { Logo } from '../atoms/Logo'
import { Nav } from '../molecules/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false)
  const classes: string[] = []
  open === false
    ? classes.push("hidden")
    : classes.push("w-screen", "h-screen", "bg-neutral-300", "opacity-90", "pb-48")
  const onClick = () => {
    setOpen(!open)
  }

  return (
    <header className="sticky top-0 z-50 bg-neutral-300 bg-opacity-75 max-w-full sdrop-shadow">
      <div className="md:flex md:max-w-7xl w-11/12 md:mx-auto md:justify-between md:items-center py-2.5">
        <div className='flex w-11/12 mx-auto justify-between items-center'>
          <Logo className="text-6xl" />
          {open === false
          ? <FontAwesomeIcon className="md:hidden cursor-pointer" icon={faBars} size="2xl" style={{color: "#171717"}} onClick={onClick} />
          : <FontAwesomeIcon className="md:hidden cursor-pointer" icon={faXmark} size="2xl" style={{color: "#171717"}} onClick={onClick} />
        }
        </div>
        <div>
          <Nav className={["invisible md:visible"]}/>
          <Nav className={classes} onClick={onClick}/>
        </div>
      </div>
    </header>
  )
}
