'use client'

import { useCartContext } from "@/contexts/CartContext"
import { useMobileCheck } from "@/hooks/useMobileCheck"
import { useTranslations } from "next-intl"
import { productType } from "../types/productType"
import { useState } from "react"
import { useUserContext } from "@/contexts/UserContext"
import { useProductContext } from "../context/ProductContext"

const AddToCart = () => {
    const t = useTranslations('homePage.product')
    const isMobile = useMobileCheck()

    //contexts
    const item = useProductContext()
    const { cart, addToCart, removeFromCart } = useCartContext()
    const {user} = useUserContext()


    // check if it existing
    const [isExisting, setIsExisting] = useState(cart.some((e) => e.id == item.id))


    const click = () => {
        if (isExisting) {
            removeFromCart(item.id)
            setIsExisting(false)
        } else {
            addToCart({ userId:user?.id,quantity: 1, ...item })
            setIsExisting(true)
        }
    }

    return (
        <div onClick={click} className={`absolute bottom-0 w-full transition-apple duration-150 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-500 group-hover:pointer-events-auto ${!isMobile && 'translate-y-2.5 opacity-0 pointer-events-none'
            }`}>

            <button className="w-full h-full med-text hover:bg-black/80 py-2 bg-black text-center text-text-1 z-10 transition-all">
                {isExisting ? t('removeCart'): t('addCart') }
            </button>

        </div>

    )
}

export default AddToCart