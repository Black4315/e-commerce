"use client";
import ProductAboutItem from "@/entities/Product/components/ProductAboutItem";
import ProductDetails from "@/entities/Product/components/ProductDetails";
import ProductDescriptionSec from "@/entities/Product/components/ProductDescriptionSec";

const ProductExtras = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <>
      <ProductDetails className={`${!isMobile && "md:col-span-2"}`} />
      <ProductDescriptionSec
        className={`${!isMobile && "md:col-span-2"}`}
      />
    </>
  );
};

export default ProductExtras;
