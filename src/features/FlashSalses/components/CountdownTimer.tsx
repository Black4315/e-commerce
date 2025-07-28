import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useCountDownTimer } from "@/hooks/useCountDownTimer";

const CountdownTimer: React.FC<{ endDate: string | Date; onTimerEnd: () => void }> = ({ endDate, onTimerEnd }) => {
    const t = useTranslations('homePage')
    const { timeLeft, end } = useCountDownTimer(endDate, onTimerEnd)

    // Display the time left
    return (
        <time dateTime={endDate.toString()} className="flex items-end relative">
            {Object.entries(timeLeft).map(([key, value], index) => (
                <React.Fragment key={key}>
                    <div className={`flex flex-col gap-1 md:gap-3 relative ${(timeLeft.hours <= 1 && timeLeft.days <= 0) && 'text-danger-700 text-shadow-danger-500 text-shadow-[0_0_7px_text-shadow-danger-500]'} ${(timeLeft.hours <= 1 && timeLeft.days <= 0 && !end) && 'animate-pulse'}`}>
                        <span className="md:absolute -top-6 font-poppins font-medium text-[10px] md:text-sm leading-4 capitalize">
                            {t(`flashSale.${key}`)}
                        </span>
                        <h2 className="heading font-bold leading-7">{value.toString().padStart(2, '0')}</h2>
                    </div>
                    {index < 3 && <span className="text-button-2 text-2xl font-extrabold mx-2 md:mx-4">:</span>}
                </React.Fragment>
            ))}
        </time>
    );
};
export default CountdownTimer