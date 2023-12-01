import React from 'react'
import { BlogCard } from '../molecules/BlogCard'
import { BlogListType } from '@/types/Blog'

interface BlogListPropsType {
  blogList: BlogListType
}

export const BlogList = (props: BlogListPropsType) => {
  const blogList = props.blogList
  console.log(blogList)

  return (
    <div className="">
      {blogList.map((value, index) => (
        <BlogCard
          key={index}
          id={value['id']}
          createdDate={value['created_time'].match('\\d{4}-\\d{2}-\\d{2}')}
          title={value['properties']['title']['title'][0]['plain_text']}
          multiSelect={value['properties']['tag']['multi_select']}
        />
      ))}
    </div>
  )
}
