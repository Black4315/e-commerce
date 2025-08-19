"use client";

import MiniSection from "@/components/ui/MiniSection";
import { useSeeAllRedirect } from "@/hooks/useSeeAllRedirect";
import { useLocale, useTranslations } from "next-intl";
import { useJustForU } from "./hooks/useJustForU";
import ProductCards from "@/components/ui/SectionProducts/components/ProductCards";
import ErrorProducts from "@/components/ui/SectionProducts/components/ErrorProducts";
import SkeltonProductCard from "@/components/ui/SectionProducts/components/SkeltonProductCards";

const JustForU = ({ category, brand }: { category: string; brand: string }) => {
  const t = useTranslations("homePage");
  const locale = useLocale();
  const seeAllRedirect = useSeeAllRedirect();

  const { data, isLoading, isError } = useJustForU(locale, category, brand);

  return (
    <MiniSection
      heading={t("justForU")}
      btnAbove={t("seeAll")}
      btnProps={{
        onClick: () =>
          seeAllRedirect("related-items", {
            categorySlug: category,
            brandSlug: brand,
          }),

        "aria-label": "See all related products",
      }}
      redbadge
    >
      <div className="">
        {/* products slider */}
        {isError ? (
          <ErrorProducts />
        ) : isLoading ? (
          <SkeltonProductCard />
        ) : (
          <ProductCards
            data={data?.bestSellings.products}
            btnsClassname="!-top-18.5 max-md:w-fit !end-0"
          />
        )}
      </div>
    </MiniSection>
  );
};

export default JustForU;
