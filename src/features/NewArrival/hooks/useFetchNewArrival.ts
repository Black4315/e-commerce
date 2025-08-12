import useFetch from "@/lib/fectchApi";
import { NewArrival, NewArrivalSchema } from "../types";

export function useFetchNewArrival(locale: string) {
    return useFetch<NewArrival>(['new-arrival'], '/api/new-arrival', locale, NewArrivalSchema)
}