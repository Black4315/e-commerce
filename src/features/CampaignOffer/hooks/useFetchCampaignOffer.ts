import fectchApi from "@/lib/fectchApi";
import {
  FlashSaleCampaignTypeSchema,
  FlashSaleCampaignTypeType,
} from "../types";

export function useFetchCampaignOffer(locale: string) {
  return fectchApi<FlashSaleCampaignTypeType>(
    ["campaign-offer"],
    "/api/campaign-offer/",
    locale,
    FlashSaleCampaignTypeSchema
  );
}
