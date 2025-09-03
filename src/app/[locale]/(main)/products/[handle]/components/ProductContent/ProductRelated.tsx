"use client";
import JustForU from "@/entities/justForU";
import { useTranslations } from "next-intl";

const ProductRelated = ({ isMobile }: { isMobile: boolean }) => {
  const t = useTranslations("homePage");

  return (
    <div className={`${!isMobile && "md:col-span-2"} border-t pt-5`}>
      <JustForU
        queryKeys={["related-items"]}
        heading={t("relatedItems")}
        category="any"
        brand="any"
      />
    </div>
  );
};

export default ProductRelated;
