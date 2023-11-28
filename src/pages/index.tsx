import { HomeTemplate } from '@/components/templates/HomeTemplate'

export default function Home() {
  const hero = {
    title: 'Home',
    text: ['　Welcome!!']
  }
  return <HomeTemplate className={'container'} hero={hero} />
}
