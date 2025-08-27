import { productTypeSchema } from "@/entities/Product/types/productType";
import { WishlistItem, wishlistSchema } from "@/features/wishlist/types/wishlistType";
import { useQuery } from "@tanstack/react-query";
import z from "zod";

export async function fetchWishlist(locale: string): Promise<WishlistItem[]> {
  const res = await fetch(`/api/wishlist?lang=${locale}`);
  const json = await res.json();
  const schema = z.array(wishlistSchema);

  const fallback = null;
  const parsed = schema.safeParse(json);

  if (!parsed.success) {
    console.error("❌ Invalid User API response format", parsed.error);
    if (fallback) return fallback;
    throw new Error("Invalid API response format");
  }

  if (!res.ok) throw new Error("Failed to fetch wishlist data");
  return parsed.data;
}

export default function useFetchWishList(locale: string) {
  return useQuery<WishlistItem[], Error>({
    queryKey: ["wishlist", locale], // include locale to avoid conflicts
    queryFn: () => fetchWishlist(locale),
    staleTime: 0, // always refetch when component mounts (wishlist changes often)
    gcTime: 1000 * 60 * 5, // keep in memory for 5 minutes (avoids immediate GC)
    refetchOnWindowFocus: true, // ensure fresh wishlist when user comes back
    refetchOnReconnect: true, // refetch if network reconnects
  });
}
