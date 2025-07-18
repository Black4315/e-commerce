"use client"
import useFetch from '@/lib/fectchApi'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'
import { useFetchCats } from './hooks/useFetchCats'
import Category from './components/Category'
import { CategoryType } from './types/CategoryType'

const Categorys = () => {
  const locale = useLocale()
  const t = useTranslations('homePage')
  // const { data: categorys, isLoading, isError } = useFetchCats(locale)


  const categorys = t.raw('categories') as CategoryType[];

  return (
    <div className='pt-10 pe-4 h-fit border-e border-border hidden lg:block'>
      <div className='flex flex-col items-start p-0 gap-4 w-[217px] '>
        {categorys.map((category, i) => (
          <Category key={i} category={category} />
        ))}
      </div>

    </div>
  )
}

export default Categorys