"use client";
import ProductAboutItem from "@/entities/Product/components/ProductAboutItem";
import ProductBody from "../ProductBody";

const ProductInfo = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <>
      <div
        className={`${
          !isMobile && "md:col-span-1 md:row-span-4"
        } h-fit no-border`}
      >
        <ProductBody />
      </div>
      <ProductAboutItem className="no-border" />
    </>
  );
};

export default ProductInfo;
