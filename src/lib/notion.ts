import React from 'react'
import { Client } from '@notionhq/client'

export const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export const getDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId
  })
  return response.results
}
