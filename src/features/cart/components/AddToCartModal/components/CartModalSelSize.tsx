"use client";

import { useProductSelection } from "@/entities/Product/contexts/ProductSelectionContext";
import SizesSelection from "../../../../../entities/Product/components/SizesSelection";
import { Skeleton } from "@mui/material";
import { useTranslations } from "next-intl";

const CartModalSelSize = () => {
  const { selectedVariant, selectedSize, setSelectedSize } = useProductSelection();
  const t = useTranslations("homePage.product");

  if (!selectedSize) return <Skeleton variant="rectangular" />;
  return (
    <div className="flex items-center gap-6 mb-4">
      <span className="text-neutral-500 capitalize">{t("sizes")}:</span>

      <SizesSelection
        sizes={selectedVariant.sizes}
        size={selectedSize}
        setSize={setSelectedSize}
        dropDown = {false}
      />
    </div>
  );
};

export default CartModalSelSize;
