import Button2 from "@/components/ui/Button2";
import { pages } from "@/constants/pages";
import { useMobileCheck } from "@/contexts/MobileCheckContext";
import AddToCart from "@/features/cart/components/AddToCart";
import WishListBtn from "@/features/wishlist/components/WishListBtn";
import { useTranslations } from "next-intl";

import FixedAddtocart from "./FixedAddtocart";
import ProgLink from "@/utils/ProgLink";

const Actions = () => {
  const t = useTranslations("homePage.product");
  const isMobile = useMobileCheck();
  return (
    <div className="flex items-center gap-4 flex-wrap">
      {!isMobile && (
        <AddToCart
          className="relative h-12 grow w-50 rounded overflow-hidden md:*:text-base "
          qtyProps={{
            className: "h-12 w-full rounded *:rounded",
            isDark: false,
          }}
          show
          insideModal
        />
      )}

      <div className="flex gap-4 grow-[1.5]">
        {/* TODO: give the actual link to buy now it might the checkout link and add the product to searchparams*/}
        <ProgLink href={pages.checkout} className="w-full">
          <Button2 className="text-text-1 border-0 w-full bg-secondary-3 hover:bg-hover-button-2 h-12 !py-2.5 ">
            {t("buynow")}
          </Button2>
        </ProgLink>

        {!isMobile && (
          <WishListBtn className="rounded w-12 *:w-7 *:h-7 h-12 [action-btn-select]:border-transparent border-inactive border hover:border-transparent" />
        )}
      </div>

      {/* show the fixed add to cart btn in mobile mode */}
      {isMobile && <FixedAddtocart />}
    </div>
  );
};

export default Actions;
