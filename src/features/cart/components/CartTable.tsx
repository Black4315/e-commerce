"use client";

import { useCartContext } from "@/features/cart/contexts/CartContext";
import { useTranslations } from "next-intl";
import CartTdItem from "./CartTdItem";
import CartLoadngItem from "./CartLoadngItem";
import EmptyState from "@/components/ui/EmptyState";
import Cart1Icon from "@/assets/icons/Cart1";
import { CartItem } from "../types/cartType";

const CartTable = ({
  cart,
  isLoading,
}:{
  cart:CartItem[];
  isLoading:boolean
}) => {
  const thds = useTranslations().raw("cartPage.thds");
  const t = useTranslations("emptyState");
  return (
    <>
      <table className="tabel -mt-6 md:-my-10">
        <thead>
          <tr className="tr">
            {thds.map((e: string, i: number) => (
              <th className="med-text" key={i}>
                {e}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <Tablebody cart={cart} isLoading={isLoading} />
        </tbody>
      </table>
      {(!cart.length && !isLoading) && (
        <EmptyState
          title={t("cart.title")}
          description={t("cart.desc")}
          icon={<Cart1Icon className="w-14 h-14" />}
        />
      )}
    </>
  );
};

export default CartTable;

export const Tablebody = ({
  cart,
  isLoading,
}:{
  cart:CartItem[];
  isLoading:boolean
}) => {

  if (isLoading) {
    return new Array(3).fill(null).map((_, i) => <CartLoadngItem key={i} />);
  }

  return cart.map((item, i) => {
    return <CartTdItem key={i} item={item} />;
  });
};
