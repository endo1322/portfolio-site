import { BlockObject } from '@/types/NotionToObject'

export type AboutArticleCardType = {
  title: Array<RichText>
  contents: Array<BlockObject>
}

export type WakaTimeType = {
  activity: {
    weekly: {
      data: Array<{
        grand_total: {
          decimal: string
          digital: string
          hours: number
          minutes: number
          total_seconds: number
        }
        range: {
          data: string
          end: string
          start: string
          text: string
          timeZone: string
        }
      }>
    }
    yearly: YearlyActivityType
  }
  language: {
    weekly: {
      data: Array<{ name: string; percent: number; color: string }>
    }
    yearly: {
      data: Array<{ name: string; percent: number; color: string }>
    }
  }
}

export type YearlyActivityType = {
  days: Array<{
    categories: Array<{ name: string; total: number }>
    date: string
    total: number
  }>
  human_readable_range: string
  is_already_updating: boolean
  is_including_today: boolean
  is_stuck: boolean
  is_up_to_date: boolean
  is_up_to_date_pending_future: boolean
  percent_calculated: number
  range: string
  status: string
  user_id: string
  writers_only: boolean
}
