import fectchApi from "@/lib/fectchApi";

export function useFetchOurProducts(locale: string) {
    return fectchApi(['our-products'], '/api/our-products/', locale)
}