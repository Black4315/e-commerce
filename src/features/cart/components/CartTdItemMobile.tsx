'use client'
import Link from "next/link";
import { TdAction } from "./TdAction";
import { ChangeCartQuantity } from "./AddToCart/ChangeCartQuantity";
import CustomImage from "@/components/ui/CustomImag";
import { useTranslations } from "next-intl";
import { CartItemPresentationalProps } from "../types/CartPage";

const CartTdItemMobile = ({
  item,
  handleUpdateQty,
  maxQyt,
  quantity,
}: CartItemPresentationalProps) => {
  const thds = useTranslations().raw("cartPage.thds");

  return (
    <div className="flex gap-3 py-3 px-2.5 rounded shadows-[0px_1px_13px_rgba(0,0,0,0.05)]">
      <Link
        href={"/products/" + item.handle}
        className="text-sm font-semibold line-clamp-2 shrink-0"
      >
        <div className="w-18 h-18 flex-center">
          <CustomImage
            className="object-contain w-full h-full"
            src={item.selectedVariant.images[0].url}
            alt={item.selectedVariant.images[0].alt}
            width={54}
            height={54}
          />
        </div>
      </Link>
      <div className="flex flex-col gap-2 w-full overflow-hidden">
        <div className="flex justify-between items-center">
          <Link
            href={"/products/" + item.handle}
            className="semi-text line-clamp-2 active:text-secondary-3"
          >
            {item.title}
          </Link>
          <TdAction.WishlistButton
            item={item}
            className="rounded-full"
          />
        </div>

        <div className="flex justify-between items-end max-xs:flex-col gap-2">
          <div className="flex flex-col max-xs:self-start">
            <span
              className="med-text "
              style={{ color: item.selectedVariant.color ?? "" }}
            >
              <span className="text-black" >{thds[1]}: </span>
              {item.selectedVariant.colorName}
            </span>
            <span className="med-text">
              <span >{thds[2]}: </span>
              {item.selectedSize?.size ?? ""}
            </span>
          </div>
          <ChangeCartQuantity
            quantity={quantity}
            updateQty={handleUpdateQty}
            maxQyt={maxQyt}
            isDark={false}
            className="w-[120px] ms-auto h-9 me-0"
          />
        </div>
      </div>
    </div>
  );
};

export default CartTdItemMobile;