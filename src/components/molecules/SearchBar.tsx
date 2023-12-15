import {
  SearchFormItemType,
  SearchSubmitItemType,
  useFormMethodsType
} from '@/types/Blog'
import React from 'react'
import { FormProvider } from 'react-hook-form'
import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'

type SearchBarTyoe = {
  className: string
  formItem: SearchFormItemType
  submitItem: SearchSubmitItemType
  useFormMethods: useFormMethodsType
}

export const SearchBar = (props: SearchBarTyoe) => {
  const { handleSubmit } = props.useFormMethods
  return (
    <FormProvider {...props.useFormMethods}>
      <form
        className={`flex flex-row mx-auto max-w-2xl gap-5 ${props.className}`}
        onSubmit={handleSubmit(props.submitItem.onSubmit)}
      >
        <Input
          className={''}
          name={props.formItem.keyword.name}
          type={props.formItem.keyword.type}
          placeholder={props.formItem.keyword.placeholder}
          required={props.formItem.keyword.required}
        />
        <Button
          className={''}
          type={props.submitItem.type}
          value={props.submitItem.value}
        />
      </form>
    </FormProvider>
  )
}
