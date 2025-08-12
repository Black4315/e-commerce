import { CartItem } from "@/features/cart/types/cartType";
import { useQuery } from "@tanstack/react-query";

export async function fetchCart(locale: string): Promise<CartItem[]> {
  const res = await fetch(`/api/cart?lang=${locale}`);
  if (!res.ok) throw new Error("Failed to fetch cart data");
  return res.json();
}

export default function useFetchCart(locale: string) {
  return useQuery<CartItem[], Error>({
    queryKey: ["cart"],
    queryFn: () => fetchCart(locale),
    // staleTime: 1000 * 60 * 5,
    // cacheTime: 1000 * 60 * 10,
  });
}
