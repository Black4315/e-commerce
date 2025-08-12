'use client'

import { useLocale, useTranslations } from "next-intl";
import { useFetchCampaignOffer } from "./hooks/useFetchCampaignOffer";
import LoadingCampaign from "./components/LoadingCampaign";
import ErrorCampaign from "./components/ErrorCampaign";
import CampaignImage from "./components/CampaignImage";
import CampaignInfo from "./components/CampaignInfo";
import { CampaignOfferContext } from "./contexts";


const CampaignOffer = () => {
    // translations
    const t = useTranslations('homePage.bestSellings')
    const locale = useLocale();

    // fetching
    const { data, isLoading, isError, refetch } = useFetchCampaignOffer(locale)


    if (isLoading) return <LoadingCampaign />;
    if (isError || !data || !data.campaign) return <ErrorCampaign refetch={refetch} />;

    const { campaign } = data;

    return (
        <CampaignOfferContext.Provider value={{ data, isLoading, isError }}>

            <div className="bg-black flex w-full h-fit md:h-[500px] max-md:rounded-lg relative my-10 md:my-18 md:py-15 lg:py-17 p-6 md:px-12 lg:px-14 justify-between md:items-center max-md:flex-col overflow-hidden">

                <div className="bg-[#D9D9D9] blur-[100px] w-80 md:w-120 aspect-square opacity-30 absolute self-center -top-6 md:end-12 md:top-0" />

                <CampaignInfo data={data} />

                <CampaignImage src={campaign.product.image} />

            </div>
        </CampaignOfferContext.Provider>
    )
}

export default CampaignOffer