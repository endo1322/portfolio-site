import React from 'react'
import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints.d'
import { BlogCard } from '../molecules/BlogCard'

interface QueryDatabaseResponseExtend extends QueryDatabaseResponse {
  length: number
  map<QueryDatabaseResponse>(
    callbackfn: (
      value: QueryDatabaseResponse,
      index: number,
      array: QueryDatabaseResponse[]
    ) => QueryDatabaseResponse,
    thisArg?: any
  ): QueryDatabaseResponse[]
}

interface BlogListType {
  blog: QueryDatabaseResponse
}

export const BlogList = (props: BlogListType) => {
  const blog: QueryDatabaseResponseExtend = props.blog
  console.log(blog)

  return (
    <div className="">
      {blog.map((value, index) => (
        <BlogCard
          key={index}
          createdDate={value?.['created_time'].match('\\d{4}-\\d{2}-\\d{2}')}
          title={value?.['properties']['名前']['title'][0]['text']['content']}
        />
      ))}
    </div>
  )
}
