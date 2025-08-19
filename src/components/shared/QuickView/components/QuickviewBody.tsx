import QuickViewInfo from "./QuickViewInfo";
import ProductPricing from "@/entities/Product/components/ProductPricing";
import AddToCart from "@/features/cart/components/AddToCart";
import WishListBtn from "@/features/wishlist/components/WishListBtn";
import { useMobileCheck } from "@/contexts/MobileCheckContext";

const QuickViewBody = () => {
  const isMobile = useMobileCheck();
  return (
    <div
      className={`flex flex-col justify-between text-start max-lg:h-full ${
        isMobile ? "w-full" : "lg:min-w-80 lg:max-w-90"
      }`}
    >
      <div className="flex flex-col h-full">
        <QuickViewInfo />
        <ProductPricing />
      </div>

      <div
        className={`mt-4 md:mt-6 flex gap-2 ${
          isMobile
            ? "max-md:mb-0 mb-6 max-md:sticky bottom-0 max-md:bg-white py-3 md:py-6"
            : "max-sm:mb-0 max-md:mb-4 max-lg:mb-6 relative"
        }`}
      >
        <AddToCart
          className="relative h-12 sm:h-15 w-full rounded overflow-hidden md:*:text-base "
          qtyClassName="h-12 sm:h-15 w-full rounded *:rounded"
          show
        />
        <WishListBtn className="rounded w-14 *:w-14 *:h-8.5 h-full " />
      </div>
    </div>
  );
};

export default QuickViewBody;
