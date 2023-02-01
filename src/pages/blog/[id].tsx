import { GetStaticProps } from 'next'
import { getDatabase } from '@/lib/notion'
import { databaseId } from '.'

export default function Post(props) {
  return (
    <div className="container flex justify-center text-5xl">{props.id}</div>
  )
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId)
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: false
  }
}

export async function getStaticProps(context: GetStaticProps) {
  const id = context.params['id']

  console.log(id)

  return {
    props: {
      id: id
    },
    revalidate: 60
  }
}
