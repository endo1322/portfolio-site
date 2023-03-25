import React from 'react'
import { useFormContext } from 'react-hook-form'

type TextareaFormProps = {
  name: string
  type: string
  placeholder: string
}

export const TextareaForm = (props: TextareaFormProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  const textareaName: string = props.name
  const textareaType: string = props.type
  const textareaPlaceholder: string = props.placeholder
  return (
    <div className="flex mb-8">
      <label
        className="float-left w-40 border-l-4 border-neutral-400 mr-4 pl-2"
        htmlFor=""
      >
        {textareaName}
        {/* <span className="flex flex-col text-red-500">(必須)</span> */}
        <p className="text-red-500">{errors[textareaType]?.message}</p>
      </label>
      <div className="w-full ml-5">
        <textarea
          {...register(textareaType, { required: '(必須)' })}
          rows={5}
          className="w-full border border-neutral-300 rounded-lg p-2 text-lg"
          placeholder={textareaPlaceholder}
        />
      </div>
    </div>
  )
}
