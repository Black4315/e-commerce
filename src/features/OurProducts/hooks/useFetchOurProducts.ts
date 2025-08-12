import fectchApi from "@/lib/fectchApi";
import { ourProductsType, ourProductsTypeSchema } from "../types";

export function useFetchOurProducts(locale: string) {
  return fectchApi<ourProductsType>(
    ["our-products"],
    "/api/our-products/",
    locale,
    ourProductsTypeSchema
  );
}
