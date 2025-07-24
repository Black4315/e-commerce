'use client'

import { createContext, useContext } from "react";
import { FlashSaleCampaign } from "../types";

export type CampaignOfferContextType = {
    data: FlashSaleCampaign;
    isLoading:boolean
    isError:boolean
}
export const CampaignOfferContext = createContext<CampaignOfferContextType  |undefined>(undefined)
export const useCampaignOfferContxt = () => {
    const context = useContext(CampaignOfferContext)
    if (context === undefined) throw new Error('useCampaignOfferContxt must use inside CampaignOfferProvider')
    return context
}