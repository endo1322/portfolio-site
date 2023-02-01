import React from 'react'
import Link from 'next/link'

interface BlogCardProps {
  title: string
  createdDate: string
}

export const BlogCard = (props: BlogCardProps) => {
  return (
    <Link href="/">
      <div className="m-3 mb-5 p-2 bg-neutral-300 bg-opacity-75 rounded-lg">
        <div className="pl-2">{props.createdDate}</div>
        <div className="text-3xl pl-4">{props.title}</div>
      </div>
    </Link>
  )
}
