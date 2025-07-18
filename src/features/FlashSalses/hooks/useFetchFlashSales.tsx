import fectchApi from "@/lib/fectchApi";

export function useFetchFlashsales(locale: string) {
    return fectchApi(['flash-sales'], '/api/flash-sales/', locale)
}