"use client";
import ActionsIconButton from "@/components/ui/ActionsIconButton";
import { pages } from "@/constants/pages";
import Icons_arrowleftIcon from "@/assets/icons/icons_arrowleft";
import AddToCart from "../../AddToCart";
import ProductPricing from "@/entities/Product/components/ProductPricing";
import { useMobileCheck } from "@/contexts/MobileCheckContext";
import Cart1Icon from "@/assets/icons/Cart1";

const ModalBtns = () => {
  const isMobile = useMobileCheck();
  return (
    <div className={`space-y-4  ${isMobile && "mb-4"}`}>
      <div className="flex flex-col items-start">
        <ProductPricing />
      </div>
      <div className={`flex gap-2`}>
        <AddToCart
          className="relative h-12 sm:h-15 w-full rounded overflow-hidden md:*:text-base "
          qtyProps={{className:"h-12 sm:h-15 w-full rounded *:rounded"}}
          insideModal
          show
        />
        <ActionsIconButton
          title="Go to Cart"
          href={pages.cart}
          width={28}
          height={28}
          Icon={Cart1Icon}
          tooltipPlacement="top"
          className="h-auto  w-14"
        />
      </div>
    </div>
  );
};

export default ModalBtns;
