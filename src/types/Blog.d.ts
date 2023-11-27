import { RichText } from '@/types/Notion'
import { BlockObject, TocObject } from './NotionToObject'

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
