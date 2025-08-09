import { useCartContext } from "@/contexts/CartContext"
import { useWishlist } from "@/contexts/WishListContext"
import { useAnimateOnChange } from "@/hooks/useAnimateOnChange"
import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function useStickyBtns() {
    const [showBtns, setshowBtns] = useState(false)
    const { wishlist } = useWishlist()
    const { cart } = useCartContext()
    const animateW = useAnimateOnChange(wishlist.length)
    const animateC = useAnimateOnChange(cart.length)
    const pathname = usePathname();
    const locale = useLocale()

    useEffect(() => {
        if (!(pathname == `/${locale}`)) return;

        const sroll = () => {
            if (window.scrollY > 200) {
                setshowBtns(true)
                return
            } else {
                setshowBtns(false)
            }
        }
        window.addEventListener('scroll', sroll)
        return () => window.removeEventListener('scroll', sroll)
    }, [pathname])

    return {
        showBtns,
        animateW,
        animateC
    }
}  
