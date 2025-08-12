import fectchApi from "@/lib/fectchApi";
import { flashDataSchema, flashDataType } from "../types";

export function useFetchFlashsales(locale: string) {
    return fectchApi<flashDataType>(['flash-sales'], '/api/flash-sales/', locale, flashDataSchema)
}