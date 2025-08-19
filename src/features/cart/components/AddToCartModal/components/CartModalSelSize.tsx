"use client";

import { useProductSelection } from "@/entities/Product/contexts/ProductSelectionContext";
import SizesSelection from "../../../../../entities/Product/components/SizesSelection";
import { Skeleton } from "@mui/material";

const CartModalSelSize = () => {
  const { selectedVariant, selectedSize, setSelectedSize } =
    useProductSelection();

  if (!selectedSize) return <Skeleton variant="rectangular" />;
  return (
    <SizesSelection
      sizes={selectedVariant.sizes}
      size={selectedSize}
      setSize={setSelectedSize}
      dropDown
    />
  );
};

export default CartModalSelSize;
