import Link from 'next/link'
import React from 'react'

type TagPropsType = {
  id: string
  className: string
  name: string
  color: string
  onTagFilter?: (e: { selectedTagId: string }) => void
}

const bgColor: {
  [index: string]: string
} = {
  blue: 'bg-blue-500 hover:bg-blue-300',
  brown: 'bg-amber-700 hover:bg-amber-600',
  default: 'bg-slate-800 hover:bg-slate-500',
  gray: 'bg-slate-400 hover:bg-slate-200',
  green: 'bg-green-600 hover:bg-green-400',
  orange: 'bg-amber-600 hover:bg-amber-400',
  pink: 'bg-rose-400 hover:bg-rose-200',
  purple: 'bg-violet-500 hover:bg-violet-300',
  red: 'bg-red-500 hover:bg-rose-300',
  yellow: 'bg-yellow-500 hover:bg-yellow-400'
}

export const Tag = (props: TagPropsType) => {
  if (props.onTagFilter) {
    return (
      <button
        onClick={() => {
          props.onTagFilter?.({ selectedTagId: props.id })
        }}
      >
        <li
          className={`px-2 rounded-md text-white relative z-10 ${
            bgColor[props.color]
          } ${props.className}`}
        >
          {props.name}
        </li>
      </button>
    )
  } else {
    return (
      <Link href={`/blog?tagId=${props.id}`}>
        <li
          className={`px-2 rounded-md text-white relative z-10 ${
            bgColor[props.color]
          } ${props.className}`}
        >
          {props.name}
        </li>
      </Link>
    )
  }
}
