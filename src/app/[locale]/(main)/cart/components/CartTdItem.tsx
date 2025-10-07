"use client";


import Price from "@/entities/Product/components/Price";
import CustomImage from "@/components/ui/CustomImag";
import { ChangeCartQuantity } from "@/features/cart/components/AddToCart/ChangeCartQuantity";
import { CartItem } from "@/features/cart/types/cartType";
import { useCartItemLogic } from "@/features/cart/hooks/useCartItemHook";
import { TdAction } from "./TdAction";
import CartTdItemMobile from "./CartTdItemMobile";
import { CartItemPresentationalProps } from "@/features/cart/types/CartPage";
import ProgLink from "@/utils/ProgLink";

/* ---------------- Image + Title ---------------- */
const CartItemImageTitle = ({
  item,
  onDelete,
}: {
  item: CartItem;
  onDelete: () => void;
}) => (
  <td className="relative overflow-hidden">
    <TdAction deletClick={onDelete} item={item} />
    <ProgLink
      aria-label="redirect to productPage"
      href={`/products/${item.handle}`}
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
    </ProgLink>
  </td>
);

/* ---------------- Color ---------------- */
const CartItemColor = ({
  color,
  colorName,
}: {
  color?: string;
  colorName?: string;
}) => (
  <td
    style={{ color: color ?? "" }}
    className="text-shadow-black/20 text-shadow-sm"
  >
    {colorName}
  </td>
);

/* ---------------- Size ---------------- */
const CartItemSize = ({ size }: { size?: string }) => <td>{size ?? ""}</td>;

/* ---------------- Price ---------------- */
const CartItemPrice = ({
  currency,
  price,
}: {
  currency: string;
  price: string;
}) => (
  <td>
    <Price currency={currency} price={price} />
  </td>
);

/* ---------------- Quantity ---------------- */
const CartItemQuantity = ({
  quantity,
  handleUpdateQty,
  maxQyt,
}: {
  quantity: number;
  handleUpdateQty: (qty: number) => void;
  maxQyt: number;
}) => (
  <td>
    <ChangeCartQuantity
      quantity={quantity}
      updateQty={handleUpdateQty}
      maxQyt={maxQyt}
      isDark={false}
      className="w-[120px]"
    />
  </td>
);

/* ---------------- Total Price ---------------- */
const CartItemTotalPrice = ({
  currency,
  total,
}: {
  currency: string;
  total: string;
}) => (
  <td>
    <Price currency={currency} price={total} />
  </td>
);

/* ---------------- Desktop Row ---------------- */
const CartTdItemDesktop = ({
  item,
  handleUpdateQty,
  maxQyt,
  quantity,
}: CartItemPresentationalProps) => (
  <tr className="tr group">
    <CartItemImageTitle item={item} onDelete={() => handleUpdateQty(0)} />
    <CartItemColor
      color={item.selectedVariant.color}
      colorName={item.selectedVariant.colorName}
    />
    <CartItemSize size={item.selectedSize?.size} />
    <CartItemPrice
      currency={item.selectedVariant.currency}
      price={item.selectedVariant.price.toFixed(2)}
    />
    <CartItemQuantity
      quantity={quantity}
      handleUpdateQty={handleUpdateQty}
      maxQyt={maxQyt}
    />
    <CartItemTotalPrice
      currency={item.selectedVariant.currency}
      total={(item.selectedVariant.price * quantity).toFixed(2)}
    />
  </tr>
);

/* ---------------- Wrapper (Desktop + Mobile) ---------------- */
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

export default CartTdItem;
