'use client'
import SectionProducts from "@/components/ui/SectionProducts/SectionProducts"
import { useLocale, useTranslations } from "next-intl";
import { productType } from "@/types/productType";
import { Skeleton } from "@mui/material";
import { useFetchOurProducts } from "./hooks/useFetchOurProducts";

type ourProductsType = {
    ourProducts: {
        viewAll: string;
        products: productType[]
    }
}
const OurProducts = () => {

    // translations
    const t = useTranslations('homePage.ourProducts')
    const locale = useLocale();

    // fetching
    const { data, isLoading, isError } = useFetchOurProducts(locale) as {
        data: ourProductsType;
        isLoading: boolean;
        isError: boolean;
    };
    const ourProducts = data && data.ourProducts;

    // console.log(ourProducts)
    return (
        <SectionProducts
            label={t('label')}
            heading={t('title')}
            isLoading={isLoading}
            isError={isError}
            products={data && ourProducts.products}
            viewAllLink={data && ourProducts.viewAll}
            rows={2}
        />
    )
}

export default OurProducts  