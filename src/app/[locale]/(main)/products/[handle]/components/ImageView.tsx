"use client";

import ImageViewSlider from "@/components/shared/QuickView/components/imageViewSlider";
import { useProductSelection } from "@/entities/Product/contexts/ProductSelectionContext";

const ImageView = () => {
  const { selectedVariant } = useProductSelection();
  return (
      <ImageViewSlider
        images={selectedVariant.images}
        maxImageNumber={Infinity}
      />
  );
};

export default ImageView;
