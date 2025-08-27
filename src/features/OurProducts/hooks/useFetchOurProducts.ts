import fetchApi from "@/lib/fetchApi";
import { ourProductsType, ourProductsTypeSchema } from "../types";

export function useFetchOurProducts(locale: string) {
  return fetchApi<ourProductsType>(
    ["our-products",locale],
    "/api/our-products/",
    locale,
    ourProductsTypeSchema,
    {
      staleTime: 1000 * 60 * 5, // 5 minutes → consider fresh
      gcTime: 1000 * 60 * 30, // 30 minutes in cache
      refetchOnWindowFocus: false, // don't auto refetch when switching tabs
      // retry: 1, // retry once on error
    }
  );
}
