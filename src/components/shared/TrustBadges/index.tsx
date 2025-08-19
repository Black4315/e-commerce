"use client"
import { useTranslations } from 'next-intl'
import BadgeItem from './components/BadgeItem'
import Section from '@/components/ui/Section'

const TrustBadges = () => {
  const t = useTranslations('homePage')

  const trustBadges = t.raw('trustBadges')

  return (
    <Section

      isbtns={false}
      className='flex-center flex-row flex-wrap justify-around gap-10 md:gap-16 pb-26 md:pb-36 border-none'
    >
      {trustBadges.map(({ icon, title, description }: any, i: number) => (
        <BadgeItem
          key={i}
          {...{
            icon,
            title,
            description,
          }}

        />

      ))
      }
    </Section>
  )
}

export default TrustBadges