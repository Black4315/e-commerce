"use client";
import ProductRating from "@/entities/Product/components/ProductRating";
import SoldNumbers from "../../../../entities/Product/components/SoldNumbers";
import QuickInStock from "./QuickInStock";
import { useProductSelection } from "@/entities/Product/contexts/ProductSelectionContext";
import { useProductContext } from "@/entities/Product/contexts/ProductContext";
import MoreDetails from "@/entities/Product/components/MoreDetails";
import ProductTitle from "@/entities/Product/components/ProductTitle";
import ProductDescription from "@/entities/Product/components/ProductDescription";

const QuickViewInfo = () => {
  //contexts
  const product = useProductContext();
  const productSelection = useProductSelection();

  const { handle, title, description, soldNumber } = product;
  const { inStock } = productSelection.selectedVariant;
  const link = `products/${handle}`;

  return (
    <div className="*:mb-2 sm:*:mb-4 border-b border-border max-md:mb-4 mb-6">
      <ProductTitle title={title} />
      <ProductDescription description={description} />

      <div className="flex gap-2">
        <ProductRating />
        <SoldNumbers soldNumber={soldNumber} />
      </div>

      <div className="flex items-center justify-between w-full">
        <QuickInStock inStock={inStock} />
        <MoreDetails link={link} />
      </div>
      {/* TODO:add size select and color */}
    </div>
  );
};

export default QuickViewInfo;
