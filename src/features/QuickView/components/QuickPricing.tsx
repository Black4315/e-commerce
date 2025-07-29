
"use client"

import { currencyOfPrice } from "@/utils"
import { useTranslations } from "next-intl"

const QuickPricing = ({
    currency,
    discountPercent,
    price,
    originalPrice,
    taxes
}: {
    currency: string
    discountPercent: number
    price: number
    originalPrice: number
    taxes: number
}) => {
    const t = useTranslations('homePage.product')
    return (
        <>
            {discountPercent ? (
                <h1 className="heading leading-10 mt-auto md:text-3xl tracking-normal flex items-center gap-2">
                    {currencyOfPrice(currency)} {price.toFixed(2)}
                    <s className="med-text md:text-xl text-inactive"> {currencyOfPrice(currency)}{originalPrice}</s>
                </h1>

            ) : (
                <h1 className="heading leading-10 mt-auto md:text-3xl tracking-normal">
                    {currencyOfPrice(currency)}{price.toFixed(2)}
                </h1>
            )}


            <p className=" text-inactive text-xs">
                {t('taxes')}: {currencyOfPrice(currency)}{taxes.toFixed(2)}
            </p>
        </>
    )
}

export default QuickPricing