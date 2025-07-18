import fectchApi from "@/lib/fectchApi";

export function useFetchSlider(locale: string) {
    return fectchApi(['slider-offers'], '/api/slider-offers', locale)
}