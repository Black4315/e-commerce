"use client";
import ImageView from "../ImageView";
import { ProductCardBadges } from "@/entities/Product/components/ProductCard/components/ProductCardBadges";

const ProductMedia = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div className={`${!isMobile ? "col-span-1 no-border" : "no-border"}`}>
      <ImageView />
      <ProductCardBadges
        className={`${
          !isMobile ? "start-1" : " start-0"
        } relative top-0 mt-4 flex-row items-center flex-wrap`}
      />
    </div>
  );
};

export default ProductMedia;
