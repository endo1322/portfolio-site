import React from 'react'
import { WorkTemplate } from '@/components/templates/WorkTemplate'

export default function work() {
  const hero = {
    title: 'Work'
  }
  return <WorkTemplate className={'container'} hero={hero} />
}
