import Link from 'next/link'
import React from 'react'
import { Hero } from '@/components/organisms/Hero'
import { ContactTemplate } from '@/components/templates/ContactTemplate'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import {
  SelectItemType,
  FormItemType,
  SubmitItemType,
  ContactType
} from '@/types/Contact'

export default function Contact() {
  const useFormMethods = useForm<ContactType>({
    defaultValues: {
      name: '',
      email: '',
      select: '',
      content: ''
    }
  })
  const { handleSubmit, reset } = useFormMethods

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

  const formItems: FormItemType = {
    name: {
      name: '名前',
      type: 'name',
      placeholder: '問合 太郎',
      required: 'こちらのフィールドに記入漏れがあります'
    },
    mail: {
      name: 'メールアドレス',
      type: 'email',
      placeholder: 'example@email.com',
      required: false
    },
    select: {
      name: '種類',
      type: 'select',
      selectItems: selectItems,
      required: 'こちらのフィールドに記入漏れがあります'
    },
    textarea: {
      name: '内容',
      type: 'contact',
      placeholder: '意見、質問内容等',
      required: 'こちらのフィールドに記入漏れがあります'
    }
  }

  const submitItem: SubmitItemType = {
    type: 'submit',
    value: '送信する',
    onSubmit: handleSubmit(onSubmit)
  }

  return (
    <div className="container">
      <Hero
        title="Contact"
        text={[
          '　当ポートフォリオサイトをご覧いただき、誠にありがとうございます。',
          '　ここでは、皆様からサイト運営者である私に対する意見や質問等を受け付けております。何かございましたら、お気軽に下記フォームよりお問い合わせくださいませ。',
          '　できる限り、私も皆様の声にお応えしたいと考えておりますので、積極的に返信させていただきます。ただし、返信を希望されない場合は、メールアドレスの欄は空白でも構いません。'
        ]}
      />
      <FormProvider {...useFormMethods}>
        <ContactTemplate formItems={formItems} submitItem={submitItem} />
      </FormProvider>
    </div>
  )
}
