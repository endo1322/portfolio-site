import Link from 'next/link'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Hero } from '@/components/organisms/Hero'
import { BlogList } from '@/components/organisms/BlogList'
import { getDatabase, notion } from '@/lib/notion'
import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints.d'

const databaseId: string = process.env.NOTION_DATABASE_ID

interface BlogType {
  posts: QueryDatabaseResponse
}

interface QueryDatabaseResponseExtend extends QueryDatabaseResponse {
  length: number
  slice: (start: number, end: number) => QueryDatabaseResponse
}

export default function Blog(props: BlogType) {
  const blogList: QueryDatabaseResponseExtend = props.posts
  const itemsPerPage: number = 10
  const [itemsOffset, setItemsOffset] = useState<number>(0)
  const endOffset: number = itemsOffset + itemsPerPage
  const currentCard: QueryDatabaseResponse = blogList.slice(
    itemsOffset,
    endOffset
  )
  const pageCount: number = Math.ceil(blogList.length / itemsPerPage)

  const handlePageClick = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerPage) % blogList.length
    setItemsOffset(newOffset)
  }

  return (
    <div className="container">
      <Hero title="Blog" />
      <BlogList blog={currentCard} />
      <ReactPaginate
        // forcePage={currentPage} // 現在のページをreactのstateで管理したい場合等
        pageCount={pageCount}
        onPageChange={handlePageClick}
        // marginPagesDisplayed={4} // 先頭と末尾に表示するページ数
        // pageRangeDisplayed={2} // 現在のページの前後をいくつ表示させるか
        containerClassName="flex justify-center gap-2 mb-2 text-lg" // ul(pagination本体)
        // pageClassName="page-item" // li
        // pageLinkClassName="page-link rounded-full" // a
        // activeClassName="active" // active.li
        // activeLinkClassName="active" // active.li < a

        // 戻る・進む関連
        previousClassName="" // li
        nextClassName="" // li
        previousLabel={'<'} // a
        previousLinkClassName=""
        nextLabel={'>'} // a
        nextLinkClassName=""
        // 先頭 or 末尾に行ったときにそれ以上戻れ(進め)なくする
        disabledClassName="disabled-button d-none"
        // 中間ページの省略表記関連
        breakLabel="..."
        breakClassName=""
        breakLinkClassName=""
      />
    </div>
  )
}

// ISR
export const getStaticProps = async () => {
  const database = await getDatabase(databaseId)

  return {
    props: {
      posts: database
    },
    revalidate: 1
  }
}
