import { YearlyActivityType } from '@/types/About'
import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'
import { Tooltip } from 'react-tooltip'

type HeatMapPropsType = {
  activity: YearlyActivityType
}

export const HeatMap = (props: HeatMapPropsType) => {
  const values: Array<{ date: string; count: number }> = []
  let startDate = ''
  let endDate = ''
  props.activity.days.map((value, index) => {
    if (index === 0) {
      startDate = value.date.replace(/-/g, '/')
    } else if (index === 364) {
      endDate = value.date.replace(/-/g, '/')
    }
    values.push({
      date: value.date.replace(/-/g, '/'),
      count: value.total / 3600
    })
  })
  return (
    <>
      <CalendarHeatmap
        values={values}
        startDate={new Date(startDate)}
        endDate={new Date(endDate)}
        showMonthLabels={true}
        showWeekdayLabels={true}
        horizontal={true}
        tooltipDataAttrs={(value: { date: string; count: number }) => {
          return {
            'data-tooltip-id': 'heat-tooltip',
            'data-tooltip-content': `In ${value.date.slice(0, 10)}, I spent ${
              Math.round(value.count * 10) / 10
            } hours writing code.`
          }
        }}
        classForValue={(value) => {
          if (value.count === 0) {
            return 'color-empty'
          } else if (value.count < 2) {
            return `color-scale-1`
          } else if (value.count < 4) {
            return `color-scale-2`
          } else if (value.count < 6) {
            return `color-scale-3`
          } else {
            return `color-scale-4`
          }
        }}
      />
      <Tooltip id="heat-tooltip" />
    </>
  )
}
