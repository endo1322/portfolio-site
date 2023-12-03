import { RichText, Page, MultiSelect } from '@/types/Notion'
import { BlockObject, TocObject } from '@/types/NotionToObject'
import { ReactPaginateProps } from 'react-paginate'

export type BlogArticleCardType = {
  title: Array<RichText>
  multiSelect: Array<MultiSelect>
  date: {
    createDate: string
    updateDate: string
  }
  contents: Array<BlockObject>
  toc: Array<TocObject>
}

export type LinkType = {
  href: string
  tag: string
}

export type BlogListType = {
  currentBlog: Array<Page>
  selectedTagId: string
  onTagFilter: (e: { selectedTagId: string }) => void
  onTagFilterClear: (e: void) => void
}

export type ReactPagenateType = ReactPaginateProps
