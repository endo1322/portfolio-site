import React, { useState, useEffect } from 'react'
import { RichText } from '@/types/Notion'
import { Toc } from '@/components/organisms/Toc'
import { BlockObject, TocObject } from '@/types/NotionToObject'
import { ArticleCard } from '../organisms/ArticleCard'
import { useMediaQuery } from 'react-responsive'

interface BlogTemplateProps {
  title: Array<RichText>
  // blocks: Array<Block>
  children?: JSX.Element
  contents: Array<BlockObject>
  toc: Array<TocObject>
}

export const BlogTemplate = (props: BlogTemplateProps) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div>
      <div className="flex flex-row m-auto max-w-7xl gap-10">
        <ArticleCard
          className="max-w-3xl m-auto mb-12"
          title={props.title}
          children={props.children}
          contents={props.contents}
        />
        {mounted && (
          <TocDynamic
            className="sticky top-28 shrink-0 h-fit w-72"
            toc={props.toc}
          />
        )}
      </div>
    </div>
  )
}

type TocDynamicProps = {
  className: string
  toc: Array<TocObject>
}

const TocDynamic = (props: TocDynamicProps) => {
  const isDesktop: boolean = useMediaQuery({ query: '(min-width: 1024px)' })
  return isDesktop ? (
    <Toc className={`${props.className}`} captions={props.toc} />
  ) : (
    <></>
  )
}
