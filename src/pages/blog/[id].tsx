import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'node:querystring'
import Link from 'next/link'
import { getBlocks, getDatabase, getPage } from '@/lib/notion'
import { databaseId } from '.'
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
        createdDate={props.page['created_time']}
        lastEditedDate={props.page['last_edited_time']}
        title={props.page.properties.Title.title}
        blocks={props.blocks}
      />
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
  console.log('blog/[id].tsx', message)

  //   console.log(id)

  return {
    props: {
      page: page,
      blocks: blocks
    },
    revalidate: 60
  }
}
