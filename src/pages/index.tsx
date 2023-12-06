import { HomeTemplate } from '@/components/templates/HomeTemplate'
import { databaseToObject } from '@/lib/blockToObject'
import { getDatabase } from '@/lib/notion'
import { Page } from '@/types/Notion'
import { PageObject, TagObject } from '@/types/NotionToObject'

export const databaseId: string = process.env.NOTION_TEST_BLOG_DATABASE_ID || ''

type HomePropsType = {
  posts: Array<Page>
}

export default function Home(props: HomePropsType) {
  const databaseObject: { pages: Array<PageObject>; tags: TagObject } =
    databaseToObject(props.posts)
  const pagesObject: Array<PageObject> = databaseObject.pages
  const tagsObject: TagObject = databaseObject.tags

  const hero = {
    title: 'Home',
    text: [
      '　当サイトは、Web系業界を目指す大学生のポートフォリオ件テックブログサイトです。',
      '　エンジニアの方やエンジニアを目指している方に向けて制作しており、学んでる中でインプットした情報を発信しています。',
      '　今後もブログや成果物、サイト自体など随時更新していく予定ですので、お楽しみにお待ちください。'
    ]
  }

  const blogList = pagesObject.slice(0, 5)

  return (
    <HomeTemplate className={'container'} hero={hero} blogList={blogList} />
  )
}

// ISR
export const getStaticProps = async () => {
  const database = await getDatabase(databaseId)

  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行されました。`
  console.log('blog/index.tsx', message)

  return {
    props: {
      posts: database
    },
    revalidate: 1
  }
}
