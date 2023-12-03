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
  createdTime: string
  lastEditedTime: string
  object: string
  properties: {
    title: string
    tag: Array<MultiSelectObject>
  }
  url: string
}

export type TagObject = Record<string, { name: string; color: string }>
