import React from 'react'
import { Client } from '@notionhq/client'
import { ContactType } from '@/components/templates/ContactForm'

export const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export const getDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId
  })
  return response.results
}

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

export const getBlocks = async (blockId: string) => {
  const blocks = []
  let cursor: string | undefined
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId
    })
    blocks.push(...results)
    if (!next_cursor) {
      break
    }
    cursor = next_cursor
  }
  return blocks
}

export const postContactPage = async (
  databaseId: string,
  pageContents: ContactType
) => {
  const response = await notion.pages.create({
    parent: {
      type: 'database_id',
      database_id: databaseId
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: pageContents.name
            }
          }
        ]
      },
      Email: {
        email: pageContents.email
      },
      Select: {
        select: {
          name: pageContents.select
        }
      },
      Content: {
        rich_text: [
          {
            text: {
              content: pageContents.content
            }
          }
        ]
      }
    }
  })
  // type(response)
  console.log(typeof response)
  return response
}
