"use client";
import ProductRating from "@/entities/Product/components/ProductRating";
import SoldNumbers from "./SoldNumbers";
import QuickInStock from "./QuickInStock";
import { useProductSelection } from "@/entities/Product/contexts/ProductSelectionContext";
import { useProductContext } from "@/entities/Product/contexts/ProductContext";
import MoreDetails from "@/entities/Product/components/MoreDetails";

const QuickViewInfo = () => {
  //contexts
  const product = useProductContext();
  const productSelection = useProductSelection();

  const { handle, title, description, soldNumber } = product;
  const { inStock } = productSelection.selectedVariant;
  const link = `products/${handle}`;

  return (
    <div className="*:mb-2 sm:*:mb-4 border-b border-border max-md:mb-4 mb-6">
      <h3 className="semi-heading capitalize leading-6 md:leading-8 md:mb-3 font-poppins ellipsis">
        {title}
      </h3>
      <p className="reg-text overflow-hidden line-clamp-4 ">{description}</p>

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
