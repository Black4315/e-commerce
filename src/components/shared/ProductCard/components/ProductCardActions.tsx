import QuickViewBtn from "../../Product/QuickViewBtn";
import WishListBtn from "../../../../features/wishlist/components/WishListBtn";
import { ProductCardBadges } from "./ProductCardBadges";

const ProductCardActions = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="absolute top-4 end-4 flex flex-col gap-2">
        <WishListBtn />
        <QuickViewBtn />
      </div>

      {/* Discount badge && new badge */}
      <ProductCardBadges />
    </div>
  );
};

export default ProductCardActions;
