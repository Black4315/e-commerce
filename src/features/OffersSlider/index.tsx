"use client"
import { ImageSliderBody, ImageSliderWrapper } from '@/components/ui/ImageSlider'
import React from 'react'
import { useFetchSlider } from './hooks/useFetchSlider'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import IconsarrowrightIcon from '@/assets/icons/iconsarrowright'
import { useIsRTL } from '@/hooks/useIsRTL'

type SliderItem = {
  name: string;
  image: string;
  logo: string;
  offerBody: string;
  link: string;
};

type SliderData = SliderItem[];

const OffersSlider = () => {
  const locale = useLocale()
  const isRTL = useIsRTL();
  const t = useTranslations('homePage')
  const { data, isLoading, isError } = useFetchSlider(locale) as { data: SliderData, isLoading: boolean, isError: boolean };

  return (
    <div className='pt-10 lg:ps-10 w-full'>
      <ImageSliderWrapper className='max-lg:rounded-xl max-md:h-fit'>
        <ImageSliderBody className="my-slider max-md:!relative">
          {data &&
            data.map(({ name, image, logo, offerBody, link }) => (
              <div key={name} className='flex p-6 md:p-12 pb-14 box-border h-full justify-between max-md:flex-col'>

                <Image src={image} width={330} height={350} alt={name} className='object-cover md:order-2 max-md:self-center max-md:w-70' />

                <div className='flex flex-col max-w-75 gap-4 md:gap-6'>
                  <div className="flex gap-3 items-center">
                    <Image src={logo} width={35} height={35} alt={name} className='object-contain' />
                    <span className='reg-text text-text'>{name}</span>
                  </div>

                  <h1 className='heading text-text-1'>
                    {offerBody}
                  </h1>

                  <Link href={link} className='flex items-center gap-2 text-text-1 hover:text-hover-button-1 group transition-colors'>
                    <span className='title border-b my-1 border-text-1 group-hover:border-hover-button-1 transition-colors '>
                      {t('shopNowBtn')}
                    </span>
                    <IconsarrowrightIcon className={`w-6 h-6 ${isRTL && 'rotate-180'}`} />
                  </Link>

                </div>

              </div>
            ))
          }
        </ImageSliderBody>
      </ImageSliderWrapper>
    </div>
  )
}

export default OffersSlider