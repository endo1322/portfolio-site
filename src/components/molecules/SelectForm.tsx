import React from 'react'
import { useFormContext } from 'react-hook-form'
import { SelectItemType } from '@/components/templates/ContactForm'
import { ErrorMessage } from '@hookform/error-message'

type SelectFormProps = {
  name: string
  type: string
  selectItems: SelectItemType[]
}

export const SelectForm = (props: SelectFormProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  const selectName: string = props.name
  const selectType: string = props.type
  const selectItems: SelectItemType[] = props.selectItems
  return (
    <div className="flex mb-8">
      <label
        className="float-left w-40 border-l-4 border-neutral-400 mr-4 pl-2"
        htmlFor=""
      >
        {selectName}
        <ErrorMessage
          className="text-red-500"
          errors={errors}
          name={selectType}
          as="p"
        />
      </label>
      <div className="w-full ml-5">
        <select
          {...register(selectType, { required: '(必須)' })}
          className="w-1/2 border border-neutral-300 rounded-lg p-2 text-lg"
        >
          {selectItems.map((item, index) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
