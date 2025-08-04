'use client'
import QuickViewBtn from "../../Product/QuickViewBtn"
import WishListBtn from "../../Product/WishListBtn"
import { useProductContext } from "@/contexts/product/ProductContext";
import { ProductCardBadges } from "./ProductCardBadges";

const ProductCardActions = () => {

    //contexts
    const item = useProductContext()

    if (!item) return null
    return (
        <div className="w-full flex justify-between">

            <div className="absolute top-4 end-4 flex flex-col gap-2">
                <WishListBtn />
                <QuickViewBtn />
            </div>

            {/* Discount badge && new badge */}
            <ProductCardBadges item={item} />
        </div>
    )
}

export default ProductCardActions

