import React from 'react'
import { RichText } from '@/types/Notion'
import { BlockObject } from '@/types/NotionToObject'
import { ArticleCard } from '../organisms/ArticleCard'

interface BlogTemplateProps {
  title: Array<RichText>
  children?: JSX.Element
  contents: Array<BlockObject>
}

export const AboutTemplate = (props: BlogTemplateProps) => {
  return (
    <div>
      <ArticleCard
        className="max-w-3xl m-auto mb-12"
        title={props.title}
        children={props.children}
        contents={props.contents}
      />
    </div>
  )
}
