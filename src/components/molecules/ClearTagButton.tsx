import React from 'react'
import { Tag } from '../atoms/Tag'
import { TagValue } from '@/types/NotionToObject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

type ClearTagButtonPropsType = {
  id: string
  tagValue: TagValue
  onClearFilteredTag: (e: { selectedTagId: string }) => void
}

export const ClearTagButton = (props: ClearTagButtonPropsType) => {
  return (
    <button
      className="flex flex-row"
      onClick={() => {
        props.onClearFilteredTag({ selectedTagId: props.id })
      }}
    >
      <Tag
        className=""
        id={props.id}
        name={props.tagValue.name}
        color={props.tagValue.color}
      >
        <FontAwesomeIcon
          className="mr-0.5"
          icon={faXmark}
          size="sm"
          style={{ color: '#ffffff' }}
        />
      </Tag>
    </button>
  )
}
