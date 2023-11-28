import { BlockObject } from '@/types/NotionToObject'

export type AboutArticleCardType = {
  title: Array<RichText>
  contents: Array<BlockObject>
}
