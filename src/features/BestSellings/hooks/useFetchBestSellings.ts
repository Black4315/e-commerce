import fetchApi from "@/lib/fetchApi";
import { bestSellingsDataSchema, bestSellingsDataType } from "../types";

export function useFetchBestSellings(locale: string) {
  return fetchApi<bestSellingsDataType>(
    ["best-sellings", locale],
    "/api/best-sellings/",
    locale,
    bestSellingsDataSchema,
    {
      // staleTime: 1000 * 60 * 5, // 5 minutes → consider fresh
      // gcTime: 1000 * 60 * 30, // 30 minutes in cache
      // refetchOnWindowFocus: false, // don't auto refetch when switching tabs
      // retry: 1, // retry once on error
    }
  );
}
