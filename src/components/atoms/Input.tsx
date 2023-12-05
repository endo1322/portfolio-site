import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

type InputPropsType = {
  className: string
  name: string
  type: string
  placeholder: string
  required: string | boolean
}

export const Input = (props: InputPropsType) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  return (
    <div className={`w-full ${props.className}`}>
      <input
        {...register(props.type, {
          required: props.required
        })}
        className="w-full h-full border border-neutral-300 rounded-lg p-2 text-lg"
        type={props.type}
        placeholder={props.placeholder}
      />
      <ErrorMessage
        className="text-red-500"
        errors={errors}
        name={props.name}
        as="p"
      />
    </div>
  )
}
