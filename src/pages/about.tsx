import React from 'react'
import { GetStaticProps } from 'next'
import { getBlocks, getPage } from '@/lib/notion'
import { Block, Page } from '@/types/Notion'
import { blockToObject } from '@/lib/blockToObject'
import { AboutTemplate } from '@/components/templates/AboutTemplate'
import { HeroType } from '@/types/Common'
import { AboutArticleCardType, WakaTimeType } from '@/types/About'
import { getWakaTime } from '@/lib/wakaTime'

const pageId: string = process.env.NOTION_ABOUT_PAGE_ID || ''

type AboutType = {
  page: Page
  blocks: Array<Block>
  wakaTime: WakaTimeType
}

export default function About(props: AboutType) {
  const hero: HeroType = {
    title: 'About'
  }

  const blogObject = blockToObject(props.blocks)
  console.log(props)

  const aboutArticleCard: AboutArticleCardType = {
    title: props.page.properties.title.title,
    contents: blogObject['blocks']
  }

  const history = [
    {
      year: '2001',
      text: ['静岡県富士市で産声をあげます。', '残念ながら記憶はありません。']
    },
    {
      year: '2016',
      text: [
        '市内の公立高校に進学します。',
        '運動神経は悪かったですが、面白そうだったので体操部に入部しました。',
        '一回転できるようになりました。',
        'もうできません。'
      ]
    },
    {
      year: '2019',
      text: [
        '死に物狂いで勉強し、静岡大学情報学部に進学します。',
        '情報学部を選んだ理由はパソコンに強くなりたいなと思ったからです。',
        'プログラミングに無事敗北します。'
      ]
    },
    {
      year: '2020',
      text: [
        'コロナ渦に突入し対面の授業が９割なくなりました。',
        'ゲームとバイトに沼ります。',
        '暗黒時代の突入です。'
      ]
    },
    {
      year: '2021',
      text: [
        '対面の授業が復活し、勉強したいと思った時には時すでに遅し。',
        '留年が決定しました。',
        '意気消沈していましたが、たまたま人気だった研究室に配属が決定し、この辺りから雲行きが変わります。'
      ]
    },
    {
      year: '2022',
      text: [
        '優秀な同期・先輩に恵まれて勉強が楽しくなり、学びたいことがどんどん増えていきます。',
        'その中でWEB系技術に興味を持ち、先輩の誘いもあってWEB系開発の長期インターンに参加しました。',
        '来年秋の卒業に向けて研究を進めるかたわら、開発経験を通してWEB系技術のキャッチアップに励みました。'
      ]
    },
    {
      year: '2023',
      text: [
        '研究活動にのめり込み、大学院進学を希望します。',
        '前期に院試と卒研が重なり、死にかけながらどうにか生きて合格と卒業を勝ち取ります。',
        '現在はインターンを中心に、学んだ内容のアウトプットに勤めています。'
      ]
    }
  ]

  return (
    <AboutTemplate
      className={'container'}
      hero={hero}
      history={history}
      wakaTime={props.wakaTime}
      aboutArticleCard={aboutArticleCard}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const page = await getPage(pageId)
  const blocks = await getBlocks(page.id)

  const wakaTime = await getWakaTime()

  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行されました。`
  console.log('pages/about.tsx', message)

  return {
    props: {
      page: page,
      blocks: blocks,
      wakaTime: wakaTime
    },
    revalidate: 60
  }
}
