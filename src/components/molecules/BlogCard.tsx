import React from 'react'
import Link from 'next/link'

interface BlogCardProps {
  id: string
  title: string
  createdDate: string
}

export const BlogCard = (props: BlogCardProps) => {
  const blogUrl: string = `/blog/${props.id}`
  return (
    <Link href={blogUrl}>
      <div className="max-w-4xl mx-auto my-3 mb-5 p-2  bg-white  hover:bg-neutral-300 rounded-lg">
        <div className="pl-2">{props.createdDate}</div>
        <div className="text-3xl pl-4">{props.title}</div>
      </div>
    </Link>
  )
}
