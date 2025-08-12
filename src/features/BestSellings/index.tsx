'use client'
import SectionProducts from "@/components/ui/SectionProducts/SectionProducts"
import { useLocale, useTranslations } from "next-intl";
import { useFetchBestSellings } from "./hooks/useFetchBestSellings";
import { productType } from "@/types/productType";
import { Skeleton } from "@mui/material";
import { UseQueryResult } from "@tanstack/react-query";

type bestSellingsDataType = {
  bestSellings: {
    bestSellingsIn: string
    viewAll: string;
    products: productType[]
  }
}

const BestSellings = () => {

  // translations
  const t = useTranslations('homePage.bestSellings')
  const locale = useLocale();

  // fetching
  const { data, isLoading, isError } = useFetchBestSellings(locale) 

  const { bestSellings } = data ?? { bestSellings: { products: [], viewAll: '', bestSellingsIn: '' } };

  return (
    <SectionProducts
      label={data ? bestSellings.bestSellingsIn : <Skeleton width={'90px'} variant="rounded" height={'15px'} />}
      heading={t('title')}
      isLoading={isLoading}
      isError={isError}
      products={bestSellings.products}
      viewAllLink={bestSellings.viewAll}
    />
  )
}

export default BestSellings