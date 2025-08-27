import fetchApi from "@/lib/fetchApi";
import {
  FlashSaleCampaignTypeSchema,
  FlashSaleCampaignTypeType,
} from "../types";

export function useFetchCampaignOffer(locale: string) {
  return fetchApi<FlashSaleCampaignTypeType>(
    ["campaign-offer", locale],
    "/api/campaign-offer/",
    locale,
    FlashSaleCampaignTypeSchema,
    {
      staleTime: 1000 * 60, // 1 minute
      gcTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: true,
      // retry: 1, // retry only once on error
    }
  );
}
