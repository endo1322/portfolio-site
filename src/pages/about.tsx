import Link from 'next/link'
import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Hero } from '@/components/organisms/Hero'
import { ArticleCard } from '@/components/templates/ArticleCard'
import { getBlocks, getPage } from '@/lib/notion'
import { Block, Page } from '@/types/Notion'

const pageId: string = process.env.NOTION_ABOUT_PAGE_ID || ''

type AboutType = {
  page: Page
  blocks: Array<Block>
}

export default function About(props: AboutType) {
  console.log(props)
  return (
    <div className="">
      <div className="container">
        <Hero
          title="About"
          text={[
            '　当サイトは、Web業界を目指す一般理系大学生によるポートフォリオサイトです。',
            '　特にエンジニアの方やエンジニアを目指している方に向けて制作しており、Blogページでは情報技術に関する情報も発信しています。ぜひお立ち寄りください。',
            '　今後もブログや成果物、サイト自体など随時更新していく予定ですので、お楽しみにお待ちください。',
            '　以下に簡単な自己紹介をさせていただきます。'
          ]}
        />
        <ArticleCard
          title={props.page.properties.title.title}
          blocks={props.blocks}
        />
      </div>
    </div>
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
