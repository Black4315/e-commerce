import { CartItem, cartItemSchema } from "@/features/cart/types/cartType";
import fetchApi from "@/lib/fetchApi";
import z from "zod";

export default function useFetchCart(locale: string) {
  return fetchApi<CartItem[]>(
    ["cart", locale],
    `/api/cart?lang=${locale}`,
    locale,
    z.array(cartItemSchema),
    {
      staleTime: 5 * 60 * 1000, // data stays fresh for 5 minutes
      gcTime: 30 * 60 * 1000, // unused data stays in cache for 30 minutes
      refetchOnWindowFocus: true, // refetch when tab gains focus
      refetchOnReconnect: true, // refetch when reconnecting to internet
      refetchInterval: false, // no polling
    }
  );
}
