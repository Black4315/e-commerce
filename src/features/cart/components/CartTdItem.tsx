"use client";

import HeartsmallIcon from "@/assets/icons/heartsmall";
import Price from "@/components/shared/Product/Price";
import ActionsIconButton from "@/components/ui/ActionsIconButton";
import CustomImage from "@/components/ui/CustomImag";
import { ChangeCartQuantity } from "@/features/cart/components/AddToCart/ChangeCartQuantity";
import { useAddToCart } from "@/features/cart/hooks/useAddtoCart";
import { CartItem } from "@/features/cart/types/cartType";
import { useWishlistToggle } from "@/hooks/product/useWishlistToggle";
import Link from "next/link";
import { IoMdClose, IoMdShare } from "react-icons/io";

export const CartTdItem = ({ item }: { item: CartItem }) => {
  const {
    title,
    handle,
    selectedVariant: { color, colorName, price, images, currency, sizes },
    selectedSize,
    quantity,
  } = item;

  const { size, quantity: qty } = selectedSize ?? { size: "", quantity: "" };

  const hasVariationsSizes = !!(sizes.length > 1);
  const {
    updateQty,
    itemsLeft: maxQyt,
    perform,
  } = useAddToCart(item, hasVariationsSizes);
  const { toggleWishlist } = useWishlistToggle(item);

  return (
    <tr className="tr group">
      <td className="relative overflow-hidden">
        <TdAction
          deletClick={() => updateQty(0)}
          wishlistCick={async () => {
            await toggleWishlist();
            perform(false);
          }}
        />
        <Link
          aria-label="redirect to productPage"
          href={"/products/" + handle}
          className="active:text-secondary-3 transition-all"
        >
          <div className="flex gap-5 items-center">
            <div className="w-18 h-13.5">
              <CustomImage
                className="object-contain"
                src={images[0].url}
                alt={images[0].alt}
                width={54}
                height={54}
              />
            </div>
            <span className="line-clamp-2">{title}</span>
          </div>
        </Link>
      </td>

      <td style={{ color: color ? color : "" }}>{colorName}</td>
      <td>{size}</td>
      <td>
        <Price currency={currency} price={price.toFixed(2)} />
      </td>
      <td>
        <ChangeCartQuantity
          quantity={quantity}
          updateQty={updateQty}
          maxQyt={maxQyt}
          isDark={false}
          className="w-[120px]"
        />
      </td>
      <td>
        <Price currency={currency} price={(price * quantity).toFixed(2)} />
      </td>
    </tr>
  );
};

export const TdAction = ({
  deletClick,
  wishlistCick,
  link,
}: {
  deletClick?: () => void;
  wishlistCick?: () => void;
  link?: string;
}) => (
  <div className="absolute top-0 -start-9 h-full rounded-s overflow-hidden opacity-0 group-hover:start-0 transition-apple duration-200 group-hover:opacity-100 flex flex-col">
    <ActionsIconButton
      onClick={deletClick}
      title="Delete"
      tooltipPlacement="left"
      className="w-8 h-full rounded-none bg-red-500 text-text-1"
    >
      <IoMdClose
        className="text-current w-4.5 h-4.5 cursor-pointer text-xl"
        aria-label="Delete Product from cart"
        role="button"
      />
    </ActionsIconButton>

    <ActionsIconButton
      onClick={wishlistCick}
      title="Save for later"
      tooltipPlacement="left"
      className="w-8 h-full rounded-none"
    >
      <HeartsmallIcon className="w-4.5 h-4.5" />
    </ActionsIconButton>

    <ActionsIconButton
      title="Share"
      tooltipPlacement="left"
      className="w-8 h-full rounded-none"
    >
      <IoMdShare
        className="text-current w-4.5 h-4.5 cursor-pointer text-xl"
        aria-label="Delete Product from cart"
        role="button"
      />
    </ActionsIconButton>
  </div>
);

export default CartTdItem;
