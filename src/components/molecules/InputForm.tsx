import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

type InputFormProps = {
  name: string
  type: string
  placeholder: string
  required: string | boolean
}

export const InputForm = (props: InputFormProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  const inputName: string = props.name
  const inputType: string = props.type
  const inputPlaceholder: string = props.placeholder
  const inputRequired: string | boolean = props.required
  return (
    <div className="flex mb-8">
      <label
        className="float-left w-40 border-l-4 border-neutral-400 mr-4 pl-2"
        htmlFor=""
      >
        {inputName}
        {inputRequired ? (
          <p className="text-red-500 font-bold">(必須)</p>
        ) : (
          <p className="text-gray-400 font-bold">(任意)</p>
        )}
      </label>
      <div className="w-full ml-5">
        <input
          {...register(inputType, {
            required: inputRequired
          })}
          className="w-full border border-neutral-300 rounded-lg p-2 text-lg"
          type={inputType}
          placeholder={inputPlaceholder}
        />
        <ErrorMessage
          className="text-red-500"
          errors={errors}
          name={inputType}
          as="p"
        />
      </div>
    </div>
  )
}
