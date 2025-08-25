import Button2 from "@/components/ui/Button2";
import { pages } from "@/constants/pages";
import AddToCart from "@/features/cart/components/AddToCart";
import WishListBtn from "@/features/wishlist/components/WishListBtn";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Actions = () => {
  const t = useTranslations("homePage.product");

  return (
    <div className="flex items-center gap-4 flex-wrap">
      <AddToCart
        className="relative h-11 grow w-50 rounded overflow-hidden md:*:text-base "
        qtyProps={{ className: "h-11 w-full rounded *:rounded", isDark: false }}
        show
        insideModal
      />

      {/* TODO: give the actual link to buy now */}
      <Link href={pages.checkout} className="grow-[1.5]">
        <Button2 className="text-text-1 border-0 w-full bg-secondary-3 hover:bg-hover-button-2 h-11 !py-2.5 ">
          {t("buynow")}
        </Button2>
      </Link>

      <WishListBtn className="rounded w-11 *:w-7 *:h-7 h-11 [action-btn-select]:border-transparent border-inactive border hover:border-transparent" />
    </div>
  );
};

export default Actions;
