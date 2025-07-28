"use client"

import { useTranslations } from "next-intl"

const QuickInStock = ({
    inStock
}: { inStock: boolean }) => {
    const t = useTranslations('homePage.product')

    return (
        <div className="flex gap-2">
            {inStock ? (<>
                <div className="w-4 h-4 rounded-full bg-button-1" />
                <span className="text-xs font-poppins uppercase font-bold text-button-1 ">{t('inStock')}</span>
            </>) : <>
                <div className="w-4 h-4 rounded-full bg-danger-500" />
                <span className="text-xs font-poppins uppercase font-bold text-danger-500 ">{t('outStock')}</span>
            </>}
        </div>
    )
}

export default QuickInStock