import { ProfileType } from '@/types/Home'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Link from 'next/link'
import { Icon } from '@/components/atoms/Icon'

type ProfilePropsType = {
  className: string
  profile: ProfileType
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={`${props.className}`}>
      <div className="flex flex-row items-center mb-3">
        <FontAwesomeIcon
          className="mr-2"
          icon={faAddressCard}
          size="xl"
          style={{ color: '#171717' }}
        />
        <h1 className="font-bold text-xl">{`自己紹介`}</h1>
      </div>
      <div className="flex flex-row p-3 justify-center">
        <div className="px-4">
          <Icon
            className="shadow-lg"
            src={props.profile.icon}
            alt={'home profile icon'}
            maxWidth="150px"
          />
        </div>
        <div className="my-auto">
          {props.profile.text.map((value, index) => (
            <div className="text-md font-bold mb-1" key={index}>
              {value}
            </div>
          ))}
        </div>
      </div>
      <Link href={'/about'}>
        <p className="text-right font-bold text-lg">{`...read more`}</p>
      </Link>
    </div>
  )
}
