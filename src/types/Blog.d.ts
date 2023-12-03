import { RichText, Page, MultiSelect } from '@/types/Notion'
import {
  BlockObject,
  TagObject,
  TagProperty,
  TocObject
} from '@/types/NotionToObject'
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
  selectedTag: TagObject
  onFilterTag: (e: { selectedTagId: string }) => void
  onClearFilteredTag: (e: void) => void
}

export type ReactPagenateType = ReactPaginateProps
