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

export type ContactCardType = {
  formItems: FormItemType
  submitItem: SubmitItemType
}
