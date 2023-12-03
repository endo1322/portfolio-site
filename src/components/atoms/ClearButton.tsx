import React from 'react'

type ClearButtonPropsType = {
  onClear: (e: void) => void
}

export const ClearButton = (props: ClearButtonPropsType) => {
  return <button onClick={() => props.onClear()}>{'Clear'}</button>
}
