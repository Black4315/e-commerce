import fectchApi from "@/lib/fectchApi";

export function useFetchCampaignOffer(locale: string) {
    return fectchApi(['campaign-offer'], '/api/campaign-offer/', locale)
}