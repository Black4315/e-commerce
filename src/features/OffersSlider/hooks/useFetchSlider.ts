import fectchApi from "@/lib/fectchApi";
import { SliderItemSchema, SliderItemtype } from "../types/sliderItem";
import z from "zod";

export function useFetchSlider(locale: string) {
  return fectchApi<SliderItemtype[]>(
    ["slider-offers"],
    "/api/slider-offers",
    locale,
    z.array(SliderItemSchema)
  );
}
