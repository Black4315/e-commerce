"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { useCountDownTimer } from "@/hooks/useCountDownTimer";

const CountDownTimer: React.FC<{
  endDate: string | Date;
  onTimerEnd: () => void;
}> = ({ endDate, onTimerEnd }) => {
  const t = useTranslations("homePage");
  const { timeLeft, end } = useCountDownTimer(endDate, onTimerEnd);

  const oneHourRemians = timeLeft.hours <= 1 && timeLeft.days <= 0;

  // Display the time left
  return (
    <time
      dateTime={endDate.toString()}
      className="flex items-end relative gap-2 md:gap-6"
    >
      {Object.entries(timeLeft).map(([key, value], index) => (
        <React.Fragment key={key}>
          <div
            className={`flex flex-col -gap-1 relative w-12 md:w-15.5 aspect-square rounded-full bg-white flex-center ${
              oneHourRemians &&
              "text-danger-700 text-shadow-danger-500 text-shadow-[0_0_7px_text-shadow-danger-500]"
            }`}
          >
            <h2
              className={`semi-text font-poppins leading-5 ${
                oneHourRemians && !end && "animate-pulse"
              }`}
            >
              {value.toString().padStart(2, "0")}
            </h2>
            <span
              className={`font-poppins text-[8px] md:text-xs leading-2 md:eading-3 capitalize ${
                oneHourRemians && !end && "animate-pulse"
              }`}
            >
              {t(`flashSale.${key}`)}
            </span>
          </div>
        </React.Fragment>
      ))}
    </time>
  );
};
export default CountDownTimer;
