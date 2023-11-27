import { Hero } from '@/components/organisms/Hero'
import { ContactCard } from '@/components/organisms/ContactCard'
import { HeroType } from '@/types/Common'
import { ContactCardType } from '@/types/Contact'

type ContactTemplatePropsType = {
  className: string
  hero: HeroType
  contactCard: ContactCardType
}

export const ContactTemplate = (props: ContactTemplatePropsType) => {
  return (
    <div className={`${props.className}`}>
      <Hero title={props.hero.title} text={props.hero.text} />
      <ContactCard
        className={'max-w-3xl m-auto'}
        formItems={props.contactCard.formItems}
        submitItem={props.contactCard.submitItem}
      />
    </div>
  )
}
