import React from 'react'
import { GetStaticProps } from 'next'
import { getBlocks, getPage } from '@/lib/notion'
import { Block, Page } from '@/types/Notion'
import { blockToObject } from '@/lib/blockToObject'
import { AboutTemplate } from '@/components/templates/AboutTemplate'
import { HeroType } from '@/types/Common'
import { AboutArticleCardType } from '@/types/About'

const pageId: string = process.env.NOTION_ABOUT_PAGE_ID || ''

type AboutType = {
  page: Page
  blocks: Array<Block>
}

export default function About(props: AboutType) {
  const heroText: Array<string> = [
    '　当ポートフォリオサイトをご覧いただき、誠にありがとうございます。',
    '　ここでは、皆様からサイト運営者である私に対する意見や質問等を受け付けております。何かございましたら、お気軽に下記フォームよりお問い合わせくださいませ。',
    '　できる限り、私も皆様の声にお応えしたいと考えておりますので、積極的に返信させていただきます。ただし、返信を希望されない場合は、メールアドレスの欄は空白でも構いません。'
  ]

  const hero: HeroType = {
    title: 'About',
    text: heroText
  }

  const blogObject = blockToObject(props.blocks)
  console.log(props)

  const aboutArticleCard: AboutArticleCardType = {
    title: props.page.properties.title.title,
    contents: blogObject['blocks']
  }

  return (
    <AboutTemplate
      className={'container'}
      hero={hero}
      aboutArticleCard={aboutArticleCard}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const page = await getPage(pageId)
  const blocks = await getBlocks(page.id)

  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行されました。`
  console.log('pages/about.tsx', message)

  return {
    props: {
      page: page,
      blocks: blocks
    },
    revalidate: 60
  }
}
