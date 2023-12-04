import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Tag } from '@/components/atoms/Tag'
import { TagObject } from '@/types/NotionToObject'

interface BlogCardProps {
  id: string
  title: string
  coverUrl: string | null
  createdDate: RegExpMatchArray | null
  multiSelect: TagObject
  onSetBool: (e: { selectedTagId: string }) => void
}

export const BlogCard = (props: BlogCardProps) => {
  const blogUrl: string = `/blog/${props.id}`
  return (
    <div className="max-w-4xl mx-auto my-3 mb-5 p-2  bg-white  hover:bg-neutral-300 rounded-lg h-fit relative">
      <Link href={blogUrl} className="inset-0 absolute" />
      {props.coverUrl && (
        <Image
          src={props.coverUrl}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      )}
      <div className="pl-2">{props.createdDate}</div>
      <div className="pl-4">
        <div className="text-3xl mb-1">{props.title}</div>
        <ul className="flex flex-row gap-1 flex-wrap">
          {Object.keys(props.multiSelect).map((key) => (
            <button
              key={`${props.id}${key}`}
              onClick={() => {
                props.onSetBool({ selectedTagId: key })
              }}
            >
              <Tag
                className=""
                id={key}
                name={props.multiSelect[key].name}
                color={props.multiSelect[key].color}
              ></Tag>
            </button>
          ))}
        </ul>
      </div>
    </div>
  )
}
