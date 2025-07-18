
import { WishlistItem } from '@/types/wishlistType';
import { useQuery } from '@tanstack/react-query';

export async function fetchWishlist(locale: string): Promise<WishlistItem[]> {
    const res = await fetch(`/api/wishlist?lang=${locale}`);
    if (!res.ok) throw new Error('Failed to fetch wishlist data');
    return res.json();
}

export default function useFetchWishList(locale: string) {
    return useQuery<WishlistItem[], Error>({
        queryKey: ['wishlist'],
        queryFn: () => fetchWishlist(locale),
        // staleTime: 1000 * 60 * 5,
        // cacheTime: 1000 * 60 * 10,
    });
}
