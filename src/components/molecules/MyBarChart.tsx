import { DaylyActivityType } from '@/types/About'
import { BarChart } from '@mui/x-charts'
import React from 'react'

type MyBarChartPropsType = {
  clsssName: string
  width: number
  height: number
  daylyActivity: Array<DaylyActivityType>
}

export const MyBarChart = (props: MyBarChartPropsType) => {
  const xLabels: Array<string> = []
  const uData: Array<number> = []
  if (props.daylyActivity.length == 7) {
    props.daylyActivity.map((value) => {
      xLabels.push(value.range.text.slice(0, 3))
      uData.push(Math.round((value.grand_total.total_seconds / 3600) * 10) / 10)
    })
  } else {
    props.daylyActivity.map((value) => {
      xLabels.push(new Date(value.range.date).getDate().toString())
      uData.push(Math.round((value.grand_total.total_seconds / 3600) * 10) / 10)
    })
  }

  console.log(xLabels, uData)
  const chartSetting = {
    yAxis: [
      {
        label: 'coding hour (h)'
      }
    ],
    width: props.width,
    height: props.height
  }
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: xLabels }]}
      series={[{ data: uData, label: 'uv', type: 'bar' }]}
      {...chartSetting}
    />
  )
}
