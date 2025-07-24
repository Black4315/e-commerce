'use client'
import SectionProducts from "@/components/SectionProducts/SectionProducts"
import { useLocale, useTranslations } from "next-intl";
import { productType } from "@/components/ProductCard/types/productType";
import { Skeleton } from "@mui/material";
import { useFetchOurProducts } from "./hooks/useFetchOurProducts";

type ourProductsType = {
    ourProducts: {
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
            viewAllLink={'/best-sellings/'}
        />
    )
}

export default OurProducts  