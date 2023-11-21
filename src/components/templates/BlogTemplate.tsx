import React from 'react'
import { RichText } from '@/types/Notion'
import { Toc } from '@/components/organisms/Toc'
import { BlockObject, TocObject } from '@/types/NotionToObject'
import { ArticleCard } from '../organisms/ArticleCard'

interface BlogTemplateProps {
  title: Array<RichText>
  // blocks: Array<Block>
  children?: JSX.Element
  contents: Array<BlockObject>
  toc: Array<TocObject>
}

export const BlogTemplate = (props: BlogTemplateProps) => {
  // const isDesktop: boolean = useMediaQuery({ query: '(min-width: 768px)' })

  return (
    <div>
      <div className="flex flex-row">
        <ArticleCard
          className="max-w-3xl m-auto mb-12"
          title={props.title}
          children={props.children}
          contents={props.contents}
        />
        {/* {isDesktop ? <Toc className="h-fit" captions={props.toc} /> : <></>} */}
        <Toc className="h-fit" captions={props.toc} />
      </div>
    </div>
  )
}
