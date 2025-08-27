import { productTypeSchema } from "@/entities/Product/types/productType";
import fetchApi from "@/lib/fetchApi";

export function useFetchProduct(locale:string, handle:string) {
    return fetchApi(
      ["product", handle, locale],
      `/api/products/${handle}`,
      locale,
      productTypeSchema,
      {
        staleTime: 5 * 60 * 1000, // data considered fresh for 5 min // Cache the product for 5 minutes
        gcTime: 30 * 60 * 1000,  // Keep it in cache for 30 minutes after it's unused

        // FIXME: make the retry performant by checking the error type
        // retry: 1, 
        refetchOnWindowFocus: true, // Refetch only when user re-enters the page/tab
        refetchOnReconnect: true, // Avoid infinite re-fetching on error
        refetchInterval: false, // Background refresh if stale
      }
    );
}