import React from 'react'
import { BlogCard } from '../molecules/BlogCard'
import { BlogListType } from '@/types/Blog'
import { ClearTagButton } from '../molecules/ClearTagButton'

interface BlogListPropsType {
  blogList: BlogListType
}

export const BlogList = (props: BlogListPropsType) => {
  const blogList = props.blogList.currentBlog
  console.log(blogList)

  return (
    <div className="">
      <ClearTagButton
        // selectedTagId={props.blogList.selectedTagId}
        onTagFilterClear={props.blogList.onTagFilterClear}
      ></ClearTagButton>
      {blogList.map((value) => (
        <BlogCard
          key={value['id']}
          id={value['id']}
          createdDate={value['created_time'].match('\\d{4}-\\d{2}-\\d{2}')}
          title={value['properties']['title']['title'][0]['plain_text']}
          multiSelect={value['properties']['tag']['multi_select']}
          onTagFilter={props.blogList.onTagFilter}
        />
      ))}
    </div>
  )
}
