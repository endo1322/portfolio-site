import { RichText, Page } from '@/types/Notion'
import { BlockObject, TocObject } from '@/types/NotionToObject'
import { ReactPaginateProps } from 'react-paginate'

export type BlogArticleCardType = {
  title: Array<RichText>
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

export type BlogListType = Array<Page>

export type ReactPagenateType = ReactPaginateProps
