"use client";

import CustomImage from "@/components/ui/CustomImag";
import { useProductContext } from "@/entities/Product/contexts/ProductContext";
import { useProductSelection } from "@/entities/Product/contexts/ProductSelectionContext";
import { useTranslations } from "next-intl";
import MoreDetails from "../../../../../entities/Product/components/MoreDetails";

const CartModalHeading = () => {
  const t = useTranslations("homePage.product");
  const { handle, title } = useProductContext();
  const { selectedVariant } = useProductSelection();

  const img = selectedVariant.images[0];
  return (
    <div className="flex gap-3 h-30 border-b border-border border-">
      <div className="w-30 h-30 flex-center">
        <CustomImage
          src={img.url}
          alt={img.alt}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      <div className="flex justify-center flex-col">
        <span className="ellipsis semi-text mb-1 text-[#0f1111] capitalize">
          {title}
        </span>
        <div className="text-neutral-500 text-start">
          {t("color")}:{" "}
          <span className="text-[#0f1111] capitalize">
            {selectedVariant.colorName}
          </span>
        </div>
        <MoreDetails link={"/products/" + handle} />
      </div>
    </div>
  );
};

export default CartModalHeading;
