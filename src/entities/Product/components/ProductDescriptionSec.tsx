"use client";
import { useTranslations } from "next-intl";
import { useProductContext } from "../contexts/ProductContext";
import { ComponentProps } from "react";
import ExpandableText from "@/components/ui/ExpandableText";
import { useMobileCheck } from "@/contexts/MobileCheckContext";

const ProductDescriptionSec = (props: ComponentProps<"div">) => {
  const { description } = useProductContext();
  const t = useTranslations("homePage.product");
  const isMobile = useMobileCheck()
  return (
    <div aria-label="Product details section" {...props}>
      <h4 className="semi-text text-lg md:text-xl mb-1">
        {t("productDescription")}
      </h4>
      <ExpandableText
        text={description}
        isLong={isMobile? description.length > 300 : undefined}
        className="mt-4 med-text"
        aria-label="Product description"
      />
    </div>
  );
};

export default ProductDescriptionSec;
