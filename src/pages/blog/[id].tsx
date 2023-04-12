import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'node:querystring'
import Link from 'next/link'
import { getBlocks, getDatabase, getPage } from '@/lib/notion'
import { databaseId } from '@/pages/blog/index'
import { ArticleCard } from '@/components/templates/ArticleCard'
import { Hero } from '@/components/organisms/Hero'
import { Page, Block } from '@/types/Notion'

interface BloggPageProps {
  page: Page
  blocks: Array<Block>
}

type Props = {}
type Params = {
  id: string
}

export default function BlogPage(props: BloggPageProps) {
  // console.log('page', props.page)
  // console.log('blocks', props.blocks)
  if (!props.page || !props.blocks) {
    return <div />
  }
  return (
    <div className="container">
      <Hero title="Blog" />
      <ArticleCard
        title={props.page.properties.title.title}
        blocks={props.blocks}
      >
        <div className="flex text-sm">
          <div className="mr-2">
            投稿日
            <time className="ml-1" dateTime={props.page['created_time']}>
              {props.page['created_time'].match('\\d{4}-\\d{2}-\\d{2}')}
            </time>
          </div>
          <div>
            更新日
            <time className="ml-1" dateTime={props.page['last_edited_time']}>
              {props.page['last_edited_time'].match('\\d{4}-\\d{2}-\\d{2}')}
            </time>
          </div>
        </div>
      </ArticleCard>
      <Link href="/blog">
        <div className="flex justify-center my-2 text-lg">← Go home</div>
      </Link>
    </div>
  )
  //   return <div className="container flex justify-center text-5xl">a</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const database = await getDatabase(databaseId)
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const id = context.params?.['id'] || ''
  const page = await getPage(id)
  const blocks = await getBlocks(page.id)

  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行されました。`
  console.log('pages/blog/[id].tsx', message)

  return {
    props: {
      page: page,
      blocks: blocks
    },
    revalidate: 60
  }
}
