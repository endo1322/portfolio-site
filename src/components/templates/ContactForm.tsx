import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { InputForm } from '@/components/molecules/InputForm'
import { TextareaForm } from '@/components/molecules/TextareaForm'
import { Button } from '@/components/atoms/Button'
import { SelectForm } from '@/components/molecules/SelectForm'

export type SelectItemType = {
  value: string
  name: string
}

export type ContactType = {
  name: string
  email: string
  select: string
  content: string
}

export const ContactForm = () => {
  const useFormMethods = useForm<ContactType>({
    defaultValues: {
      name: '',
      email: '',
      select: '',
      content: ''
    }
  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useFormMethods
  const onSubmit: SubmitHandler<ContactType> = async (data) => {
    console.log(data)
    // 妥協コード
    // ここから
    if (data.email == '') {
      console.log('none')
      data.email = 'none@email.com'
    }
    // ここまで
    const response = await fetch('api/postContactForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const result = await response.json()
    console.log(result)
    reset()
  }

  const selectItems: SelectItemType[] = [
    { value: '', name: '選択してください' },
    { value: 'opinion', name: '意見' },
    { value: 'question', name: '質問' },
    { value: 'etcetra', name: 'その他' }
  ]

  return (
    <div className="max-w-3xl bg-white rounded-lg m-auto mb-12">
      <div className="p-10">
        <FormProvider {...useFormMethods}>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <InputForm
              name={'名前'}
              type={'name'}
              placeholder={'問合 太郎'}
              required="こちらのフィールドに記入漏れがあります"
            />
            <InputForm
              name={'メールアドレス'}
              type={'email'}
              placeholder={'example@email.com'}
              required={false}
            />
            <SelectForm
              name={'種類'}
              type={'select'}
              selectItems={selectItems}
              required="こちらのフィールドが選択されていません"
            />
            <TextareaForm
              name={'内容'}
              type={'content'}
              placeholder={'意見、質問内容等'}
              required="こちらのフィールドに記入漏れがあります"
            />
            <Button type={'submit'} value={'送信する'} />
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
