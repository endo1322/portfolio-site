import React from 'react'
import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints.d'
import { BlogCard } from '../molecules/BlogCard'
import { Page } from '@/types/Notion'

interface BlogListType {
  blog: Array<Page>
}

export const BlogList = (props: BlogListType) => {
  const blog = props.blog
  console.log(blog)

  return (
    <div className="">
      {blog.map((value, index) => (
        <BlogCard
          key={index}
          id={value['id']}
          createdDate={value['created_time'].match('\\d{4}-\\d{2}-\\d{2}')}
          title={value['properties']['title']['title'][0]['plain_text']}
        />
      ))}
    </div>
  )
}
