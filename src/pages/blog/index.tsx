import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { getDatabase } from '@/lib/notion'
import { Page } from '@/types/Notion'
import { ReactPagenateType } from '@/types/Blog'
import { HeroType } from '@/types/Common'
import { BlogIndexTemplate } from '@/components/templates/BlogIndexTemplate'
import { databaseToObject } from '@/lib/blockToObject'
import { PageObject, TagObject } from '@/types/NotionToObject'

export const databaseId: string = process.env.NOTION_TEST_BLOG_DATABASE_ID || ''

interface BlogType {
  posts: Array<Page>
}

export default function Blog(props: BlogType) {
  console.log(props)
  const databaseObject: { pages: Array<PageObject>; tags: TagObject } =
    databaseToObject(props.posts)
  const pagesObject: Array<PageObject> = databaseObject.pages
  const tagsObject: TagObject = databaseObject.tags

  const hero: HeroType = {
    title: 'Blog'
  }

  const allBlog: Array<Page> = props.posts
  const [filteredBlog, setFilteredList] = useState<Array<Page>>(allBlog)

  const [selectedTagId, setSelectedTagId] = useState<string>('')
  console.log(selectedTagId)
  // クエリでタグを指定
  const searchParams = useSearchParams()
  const queryTagId: string = searchParams.get('tagId') || ''
  useEffect(() => {
    if (queryTagId !== '') {
      setSelectedTagId(queryTagId)
    }
  }, [queryTagId])

  // ボタンでタグを選択
  const onFilterTag = (e: { selectedTagId: string }) => {
    setSelectedTagId(e.selectedTagId)
  }

  const onClearFilteredTag = () => {
    setSelectedTagId('')
  }

  useEffect(() => {
    if (selectedTagId == '') {
      setFilteredList(allBlog)
      return
    }
    const filtered = allBlog.filter((value) =>
      value.properties.tag.multi_select.some((tag) => tag.id === selectedTagId)
    )
    setFilteredList(filtered)
  }, [selectedTagId])

  const itemsPerPage: number = 10
  const [itemsOffset, setItemsOffset] = useState<number>(0)
  const endOffset: number = itemsOffset + itemsPerPage
  const currentBlog: Array<Page> = filteredBlog.slice(itemsOffset, endOffset)
  const pageCount: number = Math.ceil(filteredBlog.length / itemsPerPage)
  const onPageChange = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerPage) % filteredBlog.length
    setItemsOffset(newOffset)
  }

  const blogList = {
    currentBlog: currentBlog,
    selectedTag: { [selectedTagId]: tagsObject[selectedTagId] },
    onFilterTag: onFilterTag,
    onClearFilteredTag: onClearFilteredTag
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
      blogList={blogList}
      pagenate={pagenate}
    />
  )
}

// ISR
export const getStaticProps = async () => {
  const database = await getDatabase(databaseId)
  // console.log(database)
  // const multiSelect: Array<MultiSelect> = []

  // database.forEach((value) => {
  //   value.properties.tag.multi_select.forEach((item) => {
  //     const newItem = {
  //       id: item.id,
  //       color: item.color,
  //       name: item.name
  //     }

  //     // 重複をチェックしてから追加
  //     if (!multiSelect.some((existingItem) => existingItem.id === newItem.id)) {
  //       multiSelect.push(newItem)
  //     }
  //   })
  // })

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
