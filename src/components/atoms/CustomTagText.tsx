import React, { ElementType, createElement } from 'react'

type CustomTagTextProps = {
  customTag: ElementType | undefined
  annotations?: {
    bold: boolean
    // code: boolean
    // color: boolean
    italic: boolean
    // strikethrough: boolean
    underline: boolean
  }
  text: string | undefined
  textClassName: string
  id?: number
}

export const CustomTagText = (props: CustomTagTextProps) => {
  const { customTag, annotations, text, textClassName, id } = props
  const className =
    textClassName +
    [annotations?.bold ? 'font-bold' : ''] +
    [annotations?.italic ? 'italic' : ''] +
    [annotations?.underline ? 'underline' : '']
  return customTag ? createElement(customTag, { className, id }, text) : <></>
}
