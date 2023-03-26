import type { NextApiRequest, NextApiResponse } from 'next'
import { postContactPage } from '@/lib/notion'

export const contactDatabaseId: string =
  process.env.NOTION_CONTACT_DATABASE_ID || 'none'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const databaseId = contactDatabaseId
  try {
    const response = await postContactPage(databaseId, req.body)
    res.status(200).send({ response })
  } catch (err) {
    res.status(500).send({ error: 'faild to fetch data' })
  }
}
