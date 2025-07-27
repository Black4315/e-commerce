import { useCartContext } from "@/contexts/CartContext"
import { useWishlist } from "@/contexts/WishListContext"
import { useAnimateOnChange } from "@/hooks/useAnimateOnChange"
import { useEffect, useState } from "react"

export function useStickyBtns() {
    const [showBtns, setshowBtns] = useState(false)
    const { wishlist } = useWishlist()
    const { cart } = useCartContext()
    const animateW = useAnimateOnChange(wishlist.length)
    const animateC = useAnimateOnChange(cart.length)

    useEffect(() => {
        const sroll = () => {
            if (window.scrollY > 350) {
                setshowBtns(true)
            } else {
                setshowBtns(false)
            }
        }
        window.addEventListener('scroll', sroll)
        return () => window.removeEventListener('scroll', sroll)
    }, [])

    return {
        showBtns,
        animateW,
        animateC
    }
}  
