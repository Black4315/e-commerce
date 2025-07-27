'use client'
import { Skeleton } from "@mui/material"
import { useTranslations } from "next-intl"
import React from "react"

const LoadingTimer = () => {
    const timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    const t = useTranslations('homePage')
    return (
        <div className="flex items-end relative">

            {Object.entries(timeLeft).map(([key, value], index) => (
                <React.Fragment key={key}>
                    <div className={`flex flex-col gap-3 relative `}>
                        <span className="md:absolute -top-6 font-poppins font-medium text-xs md:text-sm leading-4 capitalize">
                            {t(`flashSale.${key}`)}
                        </span>
                        <h2 className="heading font-bold leading-7">{<Skeleton width={40} height={28} />}</h2>
                    </div>
                    {index < 3 && <span className="text-button-2 text-2xl font-extrabold mx-2 md:mx-4">:</span>}
                </React.Fragment>
            ))}
        </div>
    )
}

export default LoadingTimer