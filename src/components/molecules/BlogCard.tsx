import React from 'react'
import Link from 'next/link'
import { MultiSelect } from '@/types/Notion'
import { Tag } from '@/components/atoms/Tag'

interface BlogCardProps {
  id: string
  title: string
  createdDate: RegExpMatchArray | null
  multiSelect: Array<MultiSelect>
  onFilterTag: (e: { selectedTagId: string }) => void
}

export const BlogCard = (props: BlogCardProps) => {
  const blogUrl: string = `/blog/${props.id}`
  return (
    <div className="max-w-4xl mx-auto my-3 mb-5 p-2  bg-white  hover:bg-neutral-300 rounded-lg h-fit relative">
      <Link href={blogUrl} className="inset-0 absolute" />
      <div className="pl-2">{props.createdDate}</div>
      <div className="pl-4">
        <div className="text-3xl mb-1">{props.title}</div>
        <ul className="flex flex-row gap-1 flex-wrap">
          {props.multiSelect.map((value) => (
            <button
              key={`${props.id}${value.id}`}
              onClick={() => {
                props.onFilterTag?.({ selectedTagId: value.id })
              }}
            >
              <Tag
                className=""
                id={value.id}
                name={value.name}
                color={value.color}
              ></Tag>
            </button>
          ))}
        </ul>
      </div>
    </div>
  )
}
