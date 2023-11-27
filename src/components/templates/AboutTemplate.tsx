import React from 'react'
import { RichText } from '@/types/Notion'
import { BlockObject } from '@/types/NotionToObject'
import { ArticleCard } from '../organisms/ArticleCard'

interface BlogTemplateProps {
  title: Array<RichText>
  contents: Array<BlockObject>
}

export const AboutTemplate = (props: BlogTemplateProps) => {
  return (
    <div>
      <ArticleCard
        className="max-w-3xl m-auto mb-12"
        title={props.title}
        contents={props.contents}
      />
    </div>
  )
}
