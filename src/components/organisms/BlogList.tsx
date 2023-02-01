import React, { useState } from 'react'
// import ReactPaginate from 'react-paginate'
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
  blog: QueryDatabaseResponseExtend
}

export const BlogList = (props: BlogListType) => {
  const { blog } = props
  const itemsPerPage: number = 6
  const [itemsOffset, setItemsOffset] = useState<number>(0)
  const endOffset: number = itemsOffset + itemsPerPage
  const currentCard: QueryDatabaseResponseExtend = blog.slice(
    itemsOffset,
    endOffset
  )
  const pageCount: number = Math.ceil(blog.length / itemsOffset)
  console.log(blog)

  const handlePagenate = (e: { selectedPage: number }) => {
    const newOffset = (e.selectedPage * itemsPerPage) % blog.length
    setItemsOffset(newOffset)
  }

  return (
    <div className="">
      {currentCard.map((value, index) => (
        <BlogCard
          key={index}
          createdDate={value?.['created_time'].match('\\d{4}-\\d{2}-\\d{2}')}
          title={value?.['properties']['名前']['title'][0]['text']['content']}
        />
      ))}
      {/* <ReactPaginate pageCount={pageCount} /> */}
    </div>
  )
}
