import { useCountDownTimer } from "@/hooks/useCountDownTimer";
import { useHydrated } from "@/hooks/useHydrated";
import { useTranslations } from "next-intl";

export const FlashWrapperPricing = ({
  children,
  end,
}: {
  end?: string | Date;
  children: React.ReactNode;
}) => {
  const t = useTranslations("homePage");
  const { timeLeft, end:flashEnd } = useCountDownTimer(end ?? "", () => false);
  const oneHourRemians = timeLeft.hours <= 1 && timeLeft.days <= 0;
  
  const { hydrated } = useHydrated()

  if (!hydrated || flashEnd) return children;
    return (
      <div
        aria-label="price-wrapper-flashsale"
        className="mt-auto rounded-lg border border-limited-color relative overflow-hidden mb-2"
      >
        <div className="bg-limited-color flex items-center justify-between flex-wrap px-3 py-1.5">
          <span className="semi-text text-base md:text-lg text-text-1">
            {t("flashSale.title")}
          </span>

          <time dateTime={`${end}`} className="flex md:gap-2 ms-auto">
            {Object.entries(timeLeft).map(([key, value], index) => (
              <div
                key={index}
                className={`flex flex-col -gap-1 relative w-12 h-10 text-text-1 flex-center ${
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
            ))}
          </time>
        </div>

        <div className="p-2">{children}</div>
      </div>
    );
};
