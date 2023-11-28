import { useForm } from 'react-hook-form'

export type SelectItemType = {
  value: string
  name: string
}

export type FormItemType = {
  name: {
    name: string
    type: string
    placeholder: string
    required: string
  }
  mail: {
    name: string
    type: string
    placeholder: string
    required: boolean
  }
  select: {
    name: string
    type: string
    selectItems: Array<SelectItemType>
    required: string
  }
  textarea: {
    name: string
    type: string
    placeholder: string
    required: string
  }
}

export type SubmitItemType = {
  type: string
  value: string
  onSubmit: (data: any) => void
}

export type FormType = {
  name: string
  email: string
  select: string
  content: string
}

type useFormMethodsType<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> = {
  watch: UseFormWatch<TFieldValues>
  getValues: UseFormGetValues<TFieldValues>
  getFieldState: UseFormGetFieldState<TFieldValues>
  setError: UseFormSetError<TFieldValues>
  clearErrors: UseFormClearErrors<TFieldValues>
  setValue: UseFormSetValue<TFieldValues>
  trigger: UseFormTrigger<TFieldValues>
  formState: FormState<TFieldValues>
  resetField: UseFormResetField<TFieldValues>
  reset: UseFormReset<TFieldValues>
  handleSubmit: UseFormHandleSubmit<TFieldValues>
  unregister: UseFormUnregister<TFieldValues>
  control: Control<TFieldValues, TContext>
  register: UseFormRegister<TFieldValues>
  setFocus: UseFormSetFocus<TFieldValues>
}

export type ContactCardType = {
  formItems: FormItemType
  submitItem: SubmitItemType
  useFormMethods: useFormMethodsType
}
