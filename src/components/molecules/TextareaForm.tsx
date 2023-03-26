import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

type TextareaFormProps = {
  name: string
  type: string
  placeholder: string
  required: string | false
}

export const TextareaForm = (props: TextareaFormProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  const textareaName: string = props.name
  const textareaType: string = props.type
  const textareaPlaceholder: string = props.placeholder
  const textRequired: string | false = props.required
  return (
    <div className="flex mb-8">
      <label
        className="float-left w-40 border-l-4 border-neutral-400 mr-4 pl-2"
        htmlFor=""
      >
        {textareaName}
        {textRequired ? (
          <p className="text-red-500 font-bold">(必須)</p>
        ) : (
          <p className="text-gray-400 font-bold">(任意)</p>
        )}
      </label>
      <div className="w-full ml-5">
        <textarea
          {...register(textareaType, {
            required: textRequired
          })}
          rows={5}
          className="w-full border border-neutral-300 rounded-lg p-2 text-lg"
          placeholder={textareaPlaceholder}
        />
        <ErrorMessage
          className="text-red-500"
          errors={errors}
          name={textareaType}
          as="p"
        />
      </div>
    </div>
  )
}
