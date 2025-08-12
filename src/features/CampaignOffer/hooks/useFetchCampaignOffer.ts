import fectchApi from "@/lib/fectchApi";
import { flashSaleCampaignSchema, FlashSaleCampaignType } from "../types";

export function useFetchCampaignOffer(locale: string) {
    return fectchApi<FlashSaleCampaignType>(['campaign-offer'], '/api/campaign-offer/', locale, flashSaleCampaignSchema)
}