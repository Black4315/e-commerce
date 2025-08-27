import { CartItem, cartItemSchema } from "@/features/cart/types/cartType";
import fetchApi from "@/lib/fectchApi";
import z from "zod";

export default function useFetchCart(locale: string) {
  const d = fetchApi<CartItem[]>(
    ["cart"],
    `/api/cart?lang=${locale}`,
    locale,
    z.array(cartItemSchema)
  );
  console.log('hello from fetch ',d.data)
  return d;
}
