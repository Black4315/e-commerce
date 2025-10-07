"use client"
import Button from "@/components/ui/Button"
import { useTranslations } from "next-intl"
import { useCampaignOfferContxt } from "../contexts"
import Link from "next/link"


const CampaignBtns = ({ timerEnded }: { timerEnded: boolean }) => {
    const t = useTranslations('homePage')
    const { data } = useCampaignOfferContxt()

    return (
        <div className="flex gap-4 items-center">
            <Button
                className={`bg-button-1 hover:bg-button-1/80 semi-text text-text-1 px-6 md:px-12 py-2 md:py-4 w-auto h-auto ${timerEnded ? "brightness-[0.6] grayscale-[0.6] pointer-events-none" : ""}`}>{
                    t('buyNowBtn')}!
            </Button>

            {timerEnded &&
                <Button
                    className={`bg-button-1 hover:bg-button-1/80 semi-text text-text-1 px-2 md:px-12 py-2 md:py-4 w-auto h-auto order-1 capitalize`}>
                    <Link href={data.campaign.fallback_after_expiry.redirect_url}>
                        {data.campaign.fallback_after_expiry.button}
                    </Link>
                </Button>
            }
        </div>
    )
}

export default CampaignBtns