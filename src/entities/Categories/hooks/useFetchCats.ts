import useFetch from "@/lib/fectchApi";

export function useFetchCats(locale: string) {
    return useFetch(['category'], '/api/categories', locale)
}