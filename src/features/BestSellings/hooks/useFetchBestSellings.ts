import fectchApi from "@/lib/fectchApi";

export function useFetchBestSellings(locale: string) {
    return fectchApi(['best-sellings'], '/api/best-sellings/', locale)
}