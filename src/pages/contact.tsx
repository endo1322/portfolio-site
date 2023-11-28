import React from 'react'
import { ContactTemplate } from '@/components/templates/ContactTemplate'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  SelectItemType,
  FormItemType,
  SubmitItemType,
  FormType,
  ContactCardType
} from '@/types/Contact'
import { HeroType } from '@/types/Common'

export default function Contact() {
  const heroText: Array<string> = [
    '　当ポートフォリオサイトをご覧いただき、誠にありがとうございます。',
    '　ここでは、皆様からサイト運営者である私に対する意見や質問等を受け付けております。何かございましたら、お気軽に下記フォームよりお問い合わせくださいませ。',
    '　できる限り、私も皆様の声にお応えしたいと考えておりますので、積極的に返信させていただきます。ただし、返信を希望されない場合は、メールアドレスの欄は空白でも構いません。'
  ]

  const hero: HeroType = {
    title: 'Contact',
    text: heroText
  }

  const useFormMethods = useForm<FormType>({
    defaultValues: {
      name: '',
      email: '',
      select: '',
      content: ''
    }
  })
  console.log(useFormMethods)
  const { reset } = useFormMethods

  const onSubmit: SubmitHandler<FormType> = async (data) => {
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
    onSubmit: onSubmit
  }

  const contactCard: ContactCardType = {
    formItems: formItems,
    submitItem: submitItem,
    useFormMethods: useFormMethods
  }

  return (
    <ContactTemplate
      className={'container'}
      hero={hero}
      contactCard={contactCard}
    />
  )
}
