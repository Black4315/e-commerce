'use client'

import { useMobileCheck } from "@/hooks/useMobileCheck"
import { useTranslations } from "next-intl"
import { productType } from "../types/productType"
import { useOptionalProductContext, useProductContext } from "../context/ProductContext"
import { useAddToCart } from "../hooks/useAddtoCart"
import { cn } from "@/lib/utils"

const AddToCart = ({
    itemProd,
    show,
    className,
    inStock = true
}: {
    itemProd?: productType;
    show?: boolean;
    className?: string
    inStock?: boolean;
}) => {
    const t = useTranslations('homePage.product')
    const isMobile = useMobileCheck()

    //contexts
    const item = useOptionalProductContext() || itemProd;
    const { Add, isExisting } = useAddToCart(item)

    // toast.promise(
    //     saveSettings(settings),
    //     {
    //         loading: 'Saving...',
    //         success: <b>Settings saved!</b>,
    //         error: <b>Could not save.</b>,
    //     }
    // );

    return (
        <div onClick={Add} className={cn(`absolute bottom-0 w-full transition-apple duration-150 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-500 group-hover:pointer-events-auto ${(!isMobile && !isExisting && !show && inStock) && 'translate-y-2.5 opacity-0 pointer-events-none'
            }`, className)}>

            <button className="uppercase w-full h-full med-text hover:bg-black/80 py-2 bg-black text-center text-text-1 z-10 transition-all">
                {!inStock ? t('soldOut') : isExisting ? t('removeCart') : t('addCart')}
            </button>

        </div>

    )
}

export default AddToCart