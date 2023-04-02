import React from 'react'
import Link from 'next/link'

interface BloglinkCardProps {
  url: string
  title: string
}

export const BloglinkCard = (props: BloglinkCardProps) => {
  return (
    <Link href={props.url}>
      <div className="border-2 max-w-4xl mx-auto my-3 mb-5 p-2  bg-white  hover:bg-neutral-300 rounded-lg">
        <div className="text-xl pl-4">{props.title}</div>
      </div>
    </Link>
  )
}
