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
    <div className="max-w-4xl h-[9.5rem] mx-auto my-3 mb-5 p-2 bg-white hover:bg-neutral-300 rounded-lg relative flex items-center">
      <Link href={blogUrl} className="inset-0 absolute" />
      {props.coverUrl && (
        <div className="flex-shrink-0 mr-4">
          <Image
            className="rounded-md"
            src={props.coverUrl}
            width={248.3}
            height={130}
            alt={`Picture of ${props.title}`}
          />
        </div>
      )}
      <div className="flex-grow min-w-0">
        <div>{props.createdDate}</div>
        <div className="flex flex-col px-2 h-[6.8rem]">
          <div className="text-3xl mb-1 max-h-[4.5rem] overflow-hidden">
            {props.title}
          </div>
          <ul className="flex flex-row gap-1 max-w-full overflow-x-auto">
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
    </div>
  )
}
