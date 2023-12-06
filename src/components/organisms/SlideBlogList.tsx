import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { BlogBoxCard } from '../molecules/BlogBoxCard'
import Link from 'next/link'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { PageObject } from '@/types/NotionToObject'

type SlideBlogListProps = {
  className: string
  blogList: Array<PageObject>
}

export const SlideBlogList = (props: SlideBlogListProps) => {
  return (
    <div className="max-w-5xl">
      <div className="flex flex-row items-center">
        <FontAwesomeIcon
          className="mr-2"
          icon={faNewspaper}
          size="xl"
          style={{ color: '#171717' }}
        />
        <h1 className="font-bold text-xl">{`最新記事${props.blogList.length}件`}</h1>
      </div>
      <div className="flex flex-row overflow-x-auto mx-auto">
        <div className="flex flex-row gap-5 px-3 pt-3 pb-4">
          {props.blogList.map((value) => (
            <BlogBoxCard
              key={value.id}
              id={value.id}
              coverUrl={value.coverUrl}
              createdDate={value.createdTime.match('\\d{4}-\\d{2}-\\d{2}')}
              title={value.properties.title}
              multiSelect={value.properties.tag}
            />
          ))}
        </div>
      </div>
      <div>
        <Link href={'/blog'}>
          <p className="text-right font-bold text-lg">{`...read more`}</p>
        </Link>
      </div>
    </div>
  )
}
