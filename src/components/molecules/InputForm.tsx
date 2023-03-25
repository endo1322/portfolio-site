import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

type InputFormProps = {
  name: string
  type: string
  placeholder: string
}

export const InputForm = (props: InputFormProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  const inputName: string = props.name
  const inputType: string = props.type
  const inputPlaceholder: string = props.placeholder
  return (
    <div className="flex mb-8">
      <label
        className="float-left w-40 border-l-4 border-neutral-400 mr-4 pl-2"
        htmlFor=""
      >
        {inputName}
        <ErrorMessage
          className="text-red-500"
          errors={errors}
          name={inputType}
          as="p"
        />
      </label>
      <div className="w-full ml-5">
        <input
          {...register(inputType, { required: '(必須)' })}
          className="w-full border border-neutral-300 rounded-lg p-2 text-lg"
          type={inputType}
          placeholder={inputPlaceholder}
        />
      </div>
    </div>
  )
}
