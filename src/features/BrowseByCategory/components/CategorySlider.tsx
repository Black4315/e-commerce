import EmblaCarousel from '@/components/ui/EmblaCarousel'
import { browse_categories } from '@/constants/constanst'
import React from 'react'
import CategoryItem from './CategoryItem'
import { useTranslations } from 'next-intl'

const CategorySlider = () => {
    const t = useTranslations('homePage.browseByCategory')
    return (
        <EmblaCarousel className={`p-5 -m-5 overflow-x-hidden`}>
            <div className="flex gap-[30px] ">
                {browse_categories.map(({ id, name, slug, icon }) => (
                    <CategoryItem key={id} {...{ id, slug, icon }} name={t(slug)}/>
                )) ?? null}
            </div>
        </EmblaCarousel>
    )
}

export default CategorySlider