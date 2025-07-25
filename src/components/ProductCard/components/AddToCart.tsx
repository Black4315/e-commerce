'use client'

import { useCartContext } from "@/contexts/CartContext"
import { useMobileCheck } from "@/hooks/useMobileCheck"
import { useTranslations } from "next-intl"
import { productType } from "../types/productType"

const AddToCart = ({ item }: { item?:productType}) => {
    const t = useTranslations('homePage.product')
    const isMobile = useMobileCheck()
    const { cart, addToCart, removeFromCart } = useCartContext()


    return (
        <div onClick={() => item && addToCart({ quantity:1,...item})} className={`absolute bottom-0  w-full transition-apple duration-150 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-500 group-hover:pointer-events-auto ${!isMobile && 'translate-y-2.5 opacity-0 pointer-events-none'
            }`}>

            <button className="w-full h-full med-text hover:bg-black/80 py-2 bg-black text-center text-text-1 z-10 transition-all">
                {t('addCart')}
            </button>

        </div>

    )
}

export default AddToCart