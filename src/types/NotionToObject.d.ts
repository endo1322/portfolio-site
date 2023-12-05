export type RichTextObject = {
  type: string
  annotations: {
    bold: boolean
    code: boolean
    color: string
    italic: boolean
    strikethrough: boolean
    underline: boolean
  }
  plainText: string
  url: string
}

export type BlockObject = {
  id: number
  type: string
  tag: ElementType | undefined
  text: RichTextObject | undefined
  textType: string | undefined
  textClassName: string
}

export type TocObject = {
  id: number
  type: string
  text: RichTextObject | undefined
}

export type PageObject = {
  id: string
  coverUrl: string | null
  createdTime: string
  lastEditedTime: string
  object: string
  properties: {
    title: string
    tag: TagObject
    fullText: string | null
  }
  url: string
}

export type TagObject = Record<string, TagValue>

type TagValue = {
  name: string
  color: string
  pageId: Array<string>
}
