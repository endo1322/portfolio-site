import { DaylyActivityType } from '@/types/About'
import { BarChart } from '@mui/x-charts'
import React from 'react'

type MyBarChartPropsType = {
  clsssName: string
  width: number
  height: number
  boolYAxis: boolean
  daylyActivity: Array<DaylyActivityType>
  label: string
}

export const MyBarChart = (props: MyBarChartPropsType) => {
  const xData: Array<string> = []
  const yData: Array<number> = []
  if (props.daylyActivity.length == 7) {
    props.daylyActivity.map((value) => {
      xData.push(value.range.text.slice(0, 3))
      yData.push(Math.round((value.grand_total.total_seconds / 3600) * 10) / 10)
    })
  } else {
    props.daylyActivity.map((value) => {
      xData.push(
        `${(new Date(value.range.date).getMonth() + 1).toString()}/${new Date(
          value.range.date
        )
          .getDate()
          .toString()}`
      )
      yData.push(Math.round((value.grand_total.total_seconds / 3600) * 10) / 10)
    })
  }

  return (
    <div className={`flex flex-col items-center ${props.clsssName}`}>
      <BarChart
        margin={
          props.boolYAxis
            ? { top: 10, bottom: 30, right: 0 }
            : { top: 10, bottom: 30, right: 0, left: 25 }
        }
        xAxis={[{ scaleType: 'band', data: xData }]}
        series={[{ data: yData, label: 'coding time', type: 'bar' }]}
        slotProps={{
          legend: {
            hidden: true
          }
        }}
        yAxis={
          props.boolYAxis
            ? [
                {
                  label: 'total coding time (h)'
                }
              ]
            : undefined
        }
        width={props.width}
        height={props.height}
      />
      <p className="mt-2 font-bold">{props.label}</p>
    </div>
  )
}
