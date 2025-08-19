"use client";

import Price from "@/entities/Product/components/Price";
import CustomImage from "@/components/ui/CustomImag";
import { ChangeCartQuantity } from "@/features/cart/components/AddToCart/ChangeCartQuantity";
import { CartItem } from "@/features/cart/types/cartType";
import Link from "next/link";
import { TdAction } from "./TdAction";
import { useCartItemLogic } from "../../../../../features/cart/hooks/useCartItemHook";
import CartTdItemMobile from "./CartTdItemMobile";
import { CartItemPresentationalProps } from "../../../../../features/cart/types/CartPage";
import WishListBtn from "@/features/wishlist/components/WishListBtn";

const CartTdItemDesktop = ({
  item,
  handleUpdateQty,
  maxQyt,
  quantity,
}: CartItemPresentationalProps) => (
  <tr className="tr group">
    <td className="relative overflow-hidden">
      <TdAction deletClick={() => handleUpdateQty(0)} item={item} />
      <Link
        aria-label="redirect to productPage"
        href={"/products/" + item.handle}
        className="active:text-secondary-3 transition-all"
      >
        <div className="flex gap-5 items-center">
          <div className="w-18 h-13.5 flex-center shrink-0">
            <CustomImage
              className="object-contain w-full h-full"
              src={item.selectedVariant.images[0].url}
              alt={item.selectedVariant.images[0].alt}
              width={54}
              height={54}
            />
          </div>
          <span className="line-clamp-2">{item.title}</span>
        </div>
      </Link>
    </td>
    <td style={{ color: item.selectedVariant.color ?? "" }}>
      {item.selectedVariant.colorName}
    </td>
    <td>{item.selectedSize?.size ?? ""}</td>
    <td>
      <Price
        currency={item.selectedVariant.currency}
        price={item.selectedVariant.price.toFixed(2)}
      />
    </td>
    <td>
      <ChangeCartQuantity
        quantity={quantity}
        updateQty={handleUpdateQty}
        maxQyt={maxQyt}
        isDark={false}
        className="w-[120px]"
      />
    </td>
    <td>
      <Price
        currency={item.selectedVariant.currency}
        price={(item.selectedVariant.price * quantity).toFixed(2)}
      />
    </td>
  </tr>
);

// The main component uses the hook and passes the props
export const CartTdItem = ({ item }: { item: CartItem }) => {
  const { handleUpdateQty, maxQyt, quantity } = useCartItemLogic(item);

  return (
    <CartTdItemDesktop
      item={item}
      handleUpdateQty={handleUpdateQty}
      maxQyt={maxQyt}
      quantity={quantity}
    />
  );
};

export default CartTdItem;

// mobile version
CartTdItem.mobile = ({ item }: { item: CartItem }) => {
  const { handleUpdateQty, maxQyt, quantity } = useCartItemLogic(item);

  return (
    <CartTdItemMobile
      item={item}
      handleUpdateQty={handleUpdateQty}
      maxQyt={maxQyt}
      quantity={quantity}
    />
  );
};
