import fetchApi from "@/lib/fetchApi";
import { NewArrival, NewArrivalSchema } from "../types";

export function useFetchNewArrival(locale: string) {
  return fetchApi<NewArrival>(
    ["new-arrival",locale],
    "/api/new-arrival",
    locale,
    NewArrivalSchema,
    {
      // staleTime: 1000 * 60 * 5, // 5 minutes
      // gcTime: 1000 * 60 * 30, // 30 minutes
      // refetchOnWindowFocus: false,
      // retry: 1,
    }
  );
}
