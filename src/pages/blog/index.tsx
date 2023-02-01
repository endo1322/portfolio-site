import Link from 'next/link'
import React from 'react'
import { Hero } from '@/components/organisms/Hero'
import { BlogList } from '@/components/organisms/BlogList'
import { getDatabase, notion } from '@/lib/notion'
import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints.d'

const databaseId: string = process.env.NOTION_DATABASE_ID

interface BlogType {
  posts: QueryDatabaseResponse
}

export default function Blog(props: BlogType) {
  return (
    <div className="container">
      <Hero title="Blog" />
      <BlogList blog={props.posts} />
    </div>
  )
}

// ISR
export const getStaticProps = async () => {
  const database = await getDatabase(databaseId)

  return {
    props: {
      posts: database
    },
    revalidate: 1
  }
}
