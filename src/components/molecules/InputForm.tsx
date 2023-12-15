import React from 'react'
import { Input } from '@/components/atoms/Input'

type InputFormProps = {
  name: string
  type: string
  placeholder: string
  required: string | boolean
}

export const InputForm = (props: InputFormProps) => {
  return (
    <div className="flex mb-8">
      <label
        className="float-left w-40 border-l-4 border-neutral-400 mr-4 pl-2"
        htmlFor=""
      >
        {props.name}
        {props.required ? (
          <p className="text-red-500 font-bold">(必須)</p>
        ) : (
          <p className="text-gray-400 font-bold">(任意)</p>
        )}
      </label>
      <Input
        className={'ml-5'}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  )
}
