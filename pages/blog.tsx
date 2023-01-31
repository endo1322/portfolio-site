import Link from 'next/link'
import React from 'react'
import { Hero } from '../components/organisms/Hero'
import { getDatabase, notion } from '../lib/notion'

const databaseId = process.env.NOTION_DATABASE_ID

export default function Blog(props) {
  console.log(props)
  return (
    <div className="container">
      <Hero title="Blog" />
    </div>
  )
}

// ISR
export const getStaticProps = async () => {
  const database = await getDatabase(databaseId)
  console.log(database)

  return {
    props: {
      posts: database
    },
    revalidate: 1
  }
}
