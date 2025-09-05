"use client";
import SectionProducts from "@/components/ui/SectionProducts/SectionProducts";
import { useLocale, useTranslations } from "next-intl";
import { useFetchOurProducts } from "../hooks/useFetchOurProducts";

const OurProductsSection = () => {
  // translations
  const t = useTranslations("homePage.ourProducts");
  const locale = useLocale();

  // fetching
  const { data, isLoading, isError } = useFetchOurProducts(locale);

  const { ourProducts } = data ?? {
    ourProducts: { viewAll: "", products: [] },
  };

  return (
    <SectionProducts
      label={t("label")}
      heading={t("title")}
      isLoading={isLoading}
      isError={isError}
      products={ourProducts.products}
      viewAllLink={ourProducts.viewAll}
      rows={2}
    />
  );
};

export default OurProductsSection;
