import QuickInStock from "@/components/shared/QuickView/components/QuickInStock";
import SoldNumbers from "@/entities/Product/components/SoldNumbers";
import ProductDescription from "@/entities/Product/components/ProductDescription";
import ProductRating from "@/entities/Product/components/ProductRating";
import ProductTitle from "@/entities/Product/components/ProductTitle";
import { useProductContext } from "@/entities/Product/contexts/ProductContext";
import { useProductSelection } from "@/entities/Product/contexts/ProductSelectionContext";
import ProductPricing from "@/entities/Product/components/ProductPricing";
import SizesColors from "./SizesColors";
import Actions from "./Actions";
import ShippingInfoBadges from "./ShippingInfoBadges";
import { ProductCardBadges } from "@/entities/Product/components/ProductCard/components/ProductCardBadges";

const ProductBody = () => {
  const { title, description, soldNumber } = useProductContext();
  const { selectedVariant } = useProductSelection();

  return (
    <div className="w-full flex flex-col">
      <div className="border-b border-border pb-6 ">
        <ProductTitle title={title} className="mb-3" />

        <div className="flex gap-2 items-center flex-wrap">
          <ProductRating /> <span className="me-2 text-inactive">|</span>
          <SoldNumbers soldNumber={soldNumber} /> <span className="me-2 text-inactive">|</span>
          <QuickInStock inStock={selectedVariant.inStock} />
        </div>

        <ProductDescription description={description} className="my-4" />
        <ProductPricing />
      </div>

      <div className="h-full flex flex-col justify-between">
        <SizesColors />
        {/* <Badges /> */}
        {/* <ProductCardBadges /> */}
        <Actions />
      </div>
    </div>
  );
};

export default ProductBody;
