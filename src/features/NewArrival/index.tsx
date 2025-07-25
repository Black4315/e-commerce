'use client'
import { useLocale, useTranslations } from 'next-intl';
import { type NewArrival } from './types';
import { UseQueryResult } from '@tanstack/react-query';
import LoadingNewArrival from './components/LoadingNewArrival';
import ErrorNewArrival from './components/ErrorNewArrival';
import Section from '@/components/Section';
import BentoGridItems from './components/BentoGrid';
import { useFetchNewArrival } from './hooks/useFetchNewArrival';

const NewArrival = () => {
  // translations
  const t = useTranslations('homePage.newArrival')
  const locale = useLocale();

  // fetching
  const { data, isLoading, isError, refetch } = useFetchNewArrival(locale) as UseQueryResult<NewArrival, Error>;


  if (isLoading) return <LoadingNewArrival />;
  if (isError || !data || !data.NewArrival) return <ErrorNewArrival refetch={refetch} />;

  const { NewArrival } = data;
  return (
    <Section
      isbtns={false}
      label={t('label')}
      heading={t('title')}
      className='border-none'
    >
      <BentoGridItems NewArrival={NewArrival} />
    </Section>
  )
}

export default NewArrival