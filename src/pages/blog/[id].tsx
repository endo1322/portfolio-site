import { GetStaticProps, GetStaticPaths } from 'next'
import { getBlocks, getDatabase, getPage } from '@/lib/notion'
import { databaseId } from '@/pages/blog/index'
import { Page, Block } from '@/types/Notion'
import { blockToObject } from '@/lib/blockToObject'
import { BlogTemplate } from '@/components/templates/BlogTemplate'
import { HeroType } from '@/types/Common'
import { BlogArticleCardType } from '@/types/Blog'

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
  const blogObject = blockToObject(props.blocks)
  console.log('blogObject', blogObject)

  const hero: HeroType = {
    title: 'Blog'
  }

  const blogArticleCard: BlogArticleCardType = {
    title: props.page.properties.title.title,
    multiSelect: props.page.properties.tag.multi_select,
    date: {
      createDate: props.page['created_time'],
      updateDate: props.page['last_edited_time']
    },
    contents: blogObject['blocks'],
    toc: blogObject['toc']
  }

  const link = {
    href: '/blog',
    tag: '← Go home'
  }

  if (!props.page || !props.blocks) {
    return <div />
  }
  return (
    <BlogTemplate
      className={'container'}
      hero={hero}
      blogArticleCard={blogArticleCard}
      link={link}
    />
  )
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
