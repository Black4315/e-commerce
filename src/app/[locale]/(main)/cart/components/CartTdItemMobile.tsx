"use client";

import { TdAction } from "./TdAction";
import { ChangeCartQuantity } from "../../../../../features/cart/components/AddToCart/ChangeCartQuantity";
import CustomImage from "@/components/ui/CustomImag";
import { useTranslations } from "next-intl";
import { CartItemPresentationalProps } from "../../../../../features/cart/types/CartPage";
import { CartItem } from "@/features/cart/types/cartType";
import ProgLink from "@/utils/ProgLink";

/* ---------------- Product Image ---------------- */
const ProductImage = ({
  handle,
  url,
  alt,
}: {
  handle: string;
  url: string;
  alt: string;
}) => (
  <ProgLink href={`/products/${handle}`} className="mt-1 shrink-0">
    <div className="w-18 h-18">
      <CustomImage
        className="object-contain w-full h-full"
        src={url}
        alt={alt}
        width={54}
        height={54}
      />
    </div>
  </ProgLink>
);

/* ---------------- Product Info ---------------- */
const ProductInfo = ({
  thds,
  color,
  colorName,
  size,
  price,
}: {
  thds: string[];
  color?: string;
  colorName?: string;
  size?: string;
  price?: number;
}) => (
  <div className="flex flex-col max-xs:self-start">
    <span className="med-text" style={{ color: color ?? "" }}>
      <span className="text-black">{thds[1]}: </span>
      <span className="text-shadow-black/20 text-shadow-xs">{colorName}</span>
    </span>
    <span className="med-text">
      <span>{thds[2]}: </span>
      {size ?? ""}
    </span>
    <span className="med-text">
      <span>{thds[3]}: </span>
      {price ?? ""}
    </span>
  </div>
);

const ProductTitle = ({
  item,
  handle,
  title,
}: {
  item: CartItem;
  handle: string;
  title: string;
}) => (
  <div className="w-full flex justify-between ">
    <ProgLink
      href={`/products/${handle}`}
      className="semi-text line-clamp-2 active:text-secondary-3"
    >
      {title}
    </ProgLink>
    <TdAction.WishlistButton item={item} className="rounded-full w-7 h-7" />
  </div>
);

/* ---------------- CartTdItemMobile ---------------- */
const CartTdItemMobile = ({
  item,
  handleUpdateQty,
  maxQyt,
  quantity,
}: CartItemPresentationalProps) => {
  const thds = useTranslations().raw("cartPage.thds");

  return (
    <div className="flex gap-3 py-3 px-2.5 rounded shadows-[0px_1px_13px_rgba(0,0,0,0.05)]">
      {/* Product Image */}
      <ProductImage
        handle={item.handle}
        url={item.selectedVariant.images[0].url}
        alt={item.selectedVariant.images[0].alt}
      />

      <div className="flex flex-col gap-2 w-full overflow-hidden">
        {/* Product Info + Wishlist */}
        <div className="flex flex-col justify-between items-start">
          {/* Quantity */}
          <ProductTitle handle={item.handle} title={item.title} item={item} />
          <div className="flex justify-between items-end max-xs:flex-col gap-2 w-full">
            <ProductInfo
              thds={thds}
              color={item.selectedVariant.color}
              colorName={item.selectedVariant.colorName}
              size={item.selectedSize?.size}
              price={item.selectedVariant.price}
            />
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
    </div>
  );
};

export default CartTdItemMobile;
