import React from 'react'
import { Tag } from '../atoms/Tag'
import { MultiSelect } from '@/types/Notion'
import { ClearButton } from '../atoms/ClearButton'

type ClearTagButtonPropsType = {
  //   multiSelect: MultiSelect
  //   selectedTagId: string
  //   name: string
  //   color: string
  onTagFilterClear: (e: void) => void
}

export const ClearTagButton = (props: ClearTagButtonPropsType) => {
  return (
    <div>
      <ClearButton onClear={props.onTagFilterClear} />
      {/* <Tag
        className={''}
        id={props.selectedTagId}
        name={props.name}
        color={props.color}
      ></Tag> */}
    </div>
  )
}
