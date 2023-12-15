import React from 'react'
import { HeatMap } from '@/components/molecules/HeatMap'
import { BarChartType, HeatMapType, PieChartType } from '@/types/About'
import { MyPieChart } from '../molecules/MyPieChart'
import { MyBarChart } from '../molecules/MyBarChart'
import { Frame } from '../atoms/Frame'
import { ProfileCard } from '../molecules/ProfileCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faChartColumn, faChartPie } from '@fortawesome/free-solid-svg-icons'
import { MyLegend } from '../molecules/MyLegend'

type DashboardPropsType = {
  className: string
  heatMap: HeatMapType
  pieChart: PieChartType
  barChart: BarChartType
}

export const Dashboard = (props: DashboardPropsType) => {
  const pieLegendList: Record<string, { percent: number; color: string }> = {}
  const myPieChartList: Array<{
    data: Record<
      string,
      {
        percent: number
        color: string
      }
    >
    label: string
  }> = []
  props.pieChart.forEach((value) => {
    const myPieChartObject: {
      data: Record<string, { percent: number; color: string }>
      label: string
    } = { data: {}, label: '' }
    let otherObject = { percent: 0, color: '#16ce40' }
    let flag = true
    console.log(value)
    value.data.forEach((item) => {
      if (flag && item.name != 'Other' && item.percent > 1) {
        myPieChartObject.data[item.name] = {
          percent: item.percent,
          color: item.color
        }
        if (!(item.name in pieLegendList)) {
          pieLegendList[item.name] = {
            percent: item.percent,
            color: item.color
          }
        }
      } else {
        flag = false
        otherObject.percent = otherObject.percent + item.percent
      }
    })
    myPieChartObject.data['Other'] = otherObject
    myPieChartObject.label = value.label
    myPieChartList.push(myPieChartObject)
  })
  pieLegendList['Other'] = { percent: 0, color: '#16ce40' }

  return (
    <div className={`flex flex-col p-5 h-full ${props.className}`}>
      <div className="flex flex-col h-full max-w-full justify-between gap-5">
        <div className="flex flex-row h-[60%] max-w-full justify-between gap-5">
          <div className="flex flex-col w-fit">
            <div className="flex flex-col h-full justify-between">
              <div className="flex flex-grow w-full justify-center">
                <h1 className="text-5xl font-bold font-righteous my-auto">
                  About me !!
                </h1>
              </div>

              <div className="flex w-full">
                <ProfileCard className="shadow-lg min-w-[14rem] max-w-[24rem]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-grow flex-shrink max-w-full min-w-[33.25rem] justify-between gap-5">
            <Frame className="flex flex-col h-full p-5 bg-white shadow-lg max-w-full">
              <div className="flex flex-row items-center ml-5">
                <FontAwesomeIcon icon={faChartPie} size="lg" />
                <p className="font-bold text-xl ml-2">
                  Percentage of Languages
                </p>
              </div>
              <div className="flex flex-row h-full p-3 pb-0 w-full">
                <div className="flex w-4/5">
                  <div className="flex w-full max-w-full overflow-auto">
                    <div className="flex flex-row w-full justify-around ml-5 gap-5 min-w-[30rem]">
                      {myPieChartList.map((value, index) => (
                        <MyPieChart
                          key={index}
                          className=""
                          data={value.data}
                          label={value.label}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex w-1/5 min-w-[8.75rem]">
                  <MyLegend
                    className={'flex w-full h-full ml-5 justify-center'}
                    data={pieLegendList}
                  />
                </div>
              </div>
            </Frame>
            <Frame className="flex flex-col h-full shadow-lg p-5">
              <div className="flex flex-col w-full overflow-hidden">
                <div className="flex flex-row items-center ml-5">
                  <FontAwesomeIcon icon={faCalendar} size="lg" />
                  <p className="font-bold text-xl ml-2">Coding Carendar</p>
                </div>
                <div className=" p-3 pb-0 overflow-x-auto w-full">
                  <HeatMap
                    className={'min-w-[56rem]  mx-auto'}
                    activity={props.heatMap}
                  />
                </div>
              </div>
            </Frame>
          </div>
        </div>
        <div className="flex flex-col h-[40%]">
          <Frame className="flex flex-col p-5 bg-white shadow-lg">
            <div className="">
              <div className="flex flex-row items-center ml-5">
                <FontAwesomeIcon icon={faChartColumn} size="lg" />
                <p className="font-bold text-xl ml-2">Coding Activity</p>
              </div>
              <div className="flex flex-row p-3 pb-0 w-full gap-5 overflow-auto">
                {props.barChart.map((value, index) => (
                  <MyBarChart
                    key={index}
                    clsssName="flex-grow"
                    width={500}
                    height={280}
                    daylyActivity={value.data}
                    boolYAxis={value.boolYAxis}
                    label={value.label}
                  />
                ))}
              </div>
            </div>
          </Frame>
        </div>
      </div>
    </div>
  )
}
