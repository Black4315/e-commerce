'use client'
import { useState } from "react"
import { FlashSaleCampaign } from "../types"
import CampaignBtns from "./CampaignBtns"
import CountDownTimer from "./CountDownTimer"

const CampaignInfo = ({ data }: { data: FlashSaleCampaign}) => {
    const [timerEnded,setTimerEnded] = useState(false)

    // on timer end call this func
    function onTimerEnd() {
        setTimerEnded(true)
    }

    const { campaign } = data;
    return (

        <div className="flex flex-col gap-5 md:gap-8 justify-center md:justify-between h-full z-2 max-md:order-1">
            <span className="semi-text text-button-1">{campaign.labels.category}</span>
            <h1 className="heading-slider text-text-1 md:w-[80%]">{campaign.product.short_description}</h1>

            {data && <CountDownTimer endDate={campaign.ends_at} onTimerEnd={onTimerEnd} />}

            <CampaignBtns timerEnded={timerEnded} />
        </div>
    )
}

export default CampaignInfo