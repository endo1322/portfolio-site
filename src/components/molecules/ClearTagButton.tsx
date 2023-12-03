import React from 'react'
import { Tag } from '../atoms/Tag'
import { TagObject } from '@/types/NotionToObject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

type ClearTagButtonPropsType = {
  selectedTag: TagObject
  onClearFilteredTag: (e: void) => void
}

export const ClearTagButton = (props: ClearTagButtonPropsType) => {
  console.log(props.selectedTag)
  return (
    <ul>
      {Object.keys(props.selectedTag)[0] === '' ? (
        <></>
      ) : (
        Object.keys(props.selectedTag).map((value) => (
          <button
            className="flex flex-row"
            onClick={() => props.onClearFilteredTag()}
          >
            <Tag
              className=""
              id={value}
              name={props.selectedTag[value].name}
              color={props.selectedTag[value].color}
            >
              <FontAwesomeIcon
                className="mr-0.5"
                icon={faXmark}
                size="sm"
                style={{ color: '#ffffff' }}
              />
            </Tag>
          </button>
        ))
      )}
    </ul>
  )
}
