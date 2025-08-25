import JustForU from "@/entities/justForU";
import ImageView from "./ImageView";
import ProductBody from "./ProductBody";
import { useTranslations } from "next-intl";
import { useMobileCheck } from "@/contexts/MobileCheckContext";
import ShippingInfoBadges from "./ShippingInfoBadges";

const ProductContent = () => {
  const t = useTranslations('homePage')
  const isMobile = useMobileCheck()
  return (
    <>
      <section className="pb-10 md:pb-15 spacy-y-12 md:space-y-20">
        <div
          className={`flex max-lg:flex-col gap-14 justify-between ${
            isMobile && "flex-col"
          }`}
        >
          <ImageView />
          <ProductBody />
        </div>

        <div className="w-full flex justify-end">
          <ShippingInfoBadges />
        </div>
      </section>

      <JustForU
        queryKeys={["related-items"]}
        heading={t("relatedItems")}
        category="any"
        brand="any"
      />
    </>
  );
}

export default ProductContent