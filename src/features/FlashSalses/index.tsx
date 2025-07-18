"use client"
import SectionProducts from '@/features/SectionProduct/SectionProducts'
import React, { useState } from 'react'
import { useFetchFlashsales } from './hooks/useFetchFlashSales'
import { useLocale } from 'next-intl'
import { calculateTimeLeft } from './utils/claulateTimLeftTimer'
import CountdownTimer from './components/CountdownTimer'
import { productType } from '../SectionProduct/types/productType'

type flashDataType = {
  flashSale: {
    start: string;
    end: string;
    products: productType[];
  };
};

const FlashSales = () => {
  const [flashEnd, setFlashEnd] = useState(false)

  const locale = useLocale();
  const { data, isLoading, isError } = useFetchFlashsales(locale) as {
    data: flashDataType;
    isLoading: boolean;
    isError: boolean;
  };
  const flashSale = data && data.flashSale;

  /**
   * class back function for set flash end to true to hide the section on timer ends
   */
  const onTimerEnd = () => {
    setFlashEnd(true)
  }

  return (
    <SectionProducts
      prefix="Today's"
      heading="Flash Sales"
      timerComponent={
        !isLoading ? (
          <CountdownTimer onTimerEnd={onTimerEnd} endDate={flashSale.end} />
        ) : (
          <div>Loading...</div>
        )
      }
      isLoading={isLoading}
      isError={isError}
      products={data && flashSale.products}
      className={`${flashEnd ? 'pointer-events-none' : ''}`}
    />
  );
};

export default FlashSales;