import fetchApi from "@/lib/fetchApi";
import { flashDataSchema, flashDataType } from "../types";

export function useFetchFlashsales(locale: string) {
  return fetchApi<flashDataType>(
    ["flash-sales",locale],
    "/api/flash-sales/",
    locale,
    flashDataSchema,
    {
      // FIXME:fix all cache time in every fetch 
      // staleTime: 1000 * 60 * 5, // 5 minutes → consider fresh
      // gcTime: 1000 * 60 * 30, // 30 minutes in cache
      // refetchOnWindowFocus: false, // don't auto refetch when switching tabs
      // retry: 1, // retry once on error
    }
  );
}
