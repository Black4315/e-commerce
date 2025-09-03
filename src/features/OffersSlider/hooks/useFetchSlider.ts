import fetchApi from "@/lib/fetchApi"
import { SliderItemSchema, SliderItemtype } from "../types/sliderItem";
import z from "zod";

export function useFetchSlider(locale: string) {
  return fetchApi<SliderItemtype[]>(
    ["slider-offers", locale],
    "/api/slider-offers",
    locale,
    z.array(SliderItemSchema),
    {
      // staleTime: 1000 * 30, // 30 seconds
      // gcTime: 1000 * 60 * 5, // 5 minutes
      // refetchInterval: 1000 * 30, // auto refresh every 30s
      refetchOnWindowFocus: true,
      // retry: 1,
    }
  );
}
