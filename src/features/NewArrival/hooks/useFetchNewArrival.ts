import useFetch from "@/lib/fectchApi";

export function useFetchNewArrival(locale: string) {
    return useFetch(['new-arrival'], '/api/new-arrival', locale)
}