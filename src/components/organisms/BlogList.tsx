import React from 'react'
import { BlogCard } from '../molecules/BlogCard'
import { BlogListType } from '@/types/Blog'
import { ClearTagButton } from '../molecules/ClearTagButton'

interface BlogListPropsType {
  className: string
  blogList: BlogListType
}

export const BlogList = (props: BlogListPropsType) => {
  const blogList = props.blogList.currentBlog
  console.log(blogList)

  return (
    <div className={`flex flex-col ${props.className}`}>
      <div className="flex flex-col mx-auto xl:w-[53rem] lg:w-[45rem] md:w-[35rem] ">
        <ul className="flex flex-row gap-1 max-w-4xl flex-wrap">
          {Object.keys(props.blogList.selectedTags).length === 0 ? (
            <></>
          ) : (
            Object.keys(props.blogList.selectedTags).map((value) => (
              <ClearTagButton
                key={value}
                id={value}
                tagValue={props.blogList.selectedTags[value]}
                onSetBool={props.blogList.onSetBool}
              />
            ))
          )}
        </ul>
        {blogList.map((value) => (
          <BlogCard
            key={value.id}
            id={value.id}
            coverUrl={value.coverUrl}
            createdDate={value.createdTime.match('\\d{4}-\\d{2}-\\d{2}')}
            title={value.properties.title}
            multiSelect={value.properties.tag}
            onSetBool={props.blogList.onSetBool}
          />
        ))}
      </div>
    </div>
  )
}
