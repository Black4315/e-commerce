import fectchApi from "@/lib/fectchApi";
import { bestSellingsDataSchema, bestSellingsDataType } from "../types";

export function useFetchBestSellings(locale: string) {
    return fectchApi<bestSellingsDataType>(['best-sellings'], '/api/best-sellings/', locale, bestSellingsDataSchema)
}