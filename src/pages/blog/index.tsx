import React, { useState } from 'react'
import { getDatabase, notion } from '@/lib/notion'
import { Page } from '@/types/Notion'
import { ReactPagenateType } from '@/types/Blog'
import { HeroType } from '@/types/Common'
import { BlogIndexTemplate } from '@/components/templates/BlogIndexTemplate'

export const databaseId: string = process.env.NOTION_TEST_BLOG_DATABASE_ID || ''

interface BlogType {
  posts: Array<Page>
}

export default function Blog(props: BlogType) {
  console.log(props)
  const blogList: Array<Page> = props.posts
  const itemsPerPage: number = 10
  const [itemsOffset, setItemsOffset] = useState<number>(0)
  const endOffset: number = itemsOffset + itemsPerPage
  const currentBlogList: Array<Page> = blogList.slice(itemsOffset, endOffset)
  const pageCount: number = Math.ceil(blogList.length / itemsPerPage)

  const onPageChange = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerPage) % blogList.length
    setItemsOffset(newOffset)
  }

  const hero: HeroType = {
    title: 'Blog'
  }

  const pagenate: ReactPagenateType = {
    // forcePage: currentPage, // 現在のページをreactのstateで管理したい場合等
    pageCount: pageCount,
    onPageChange: onPageChange,
    // marginPagesDisplayed={4} // 先頭と末尾に表示するページ数
    // pageRangeDisplayed={2} // 現在のページの前後をいくつ表示させるか
    containerClassName: 'flex justify-center gap-2 mb-2 text-lg', // ul(pagination本体)
    // pageClassName="page-item" // li
    // pageLinkClassName="page-link rounded-full" // a
    // activeClassName="active" // active.li
    // activeLinkClassName="active" // active.li < a

    // 戻る・進む関連
    previousClassName: '', // li
    nextClassName: '', // li
    previousLabel: '<', // a
    previousLinkClassName: '',
    nextLabel: '>', // a
    nextLinkClassName: '',
    // 先頭 or 末尾に行ったときにそれ以上戻れ(進め)なくする
    disabledClassName: 'disabled-button d-none',
    // 中間ページの省略表記関連
    breakLabel: '...',
    breakClassName: '',
    breakLinkClassName: ''
  }

  return (
    <BlogIndexTemplate
      className={'container'}
      hero={hero}
      blogList={currentBlogList}
      pagenate={pagenate}
    />
  )
}

// ISR
export const getStaticProps = async () => {
  const database = await getDatabase(databaseId)

  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行されました。`
  console.log('blog/index.tsx', message)

  return {
    props: {
      posts: database
    },
    revalidate: 1
  }
}
