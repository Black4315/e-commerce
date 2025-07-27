'use client'
import Badge from "@/components/ProductCard/components/ui/Badge";
import QuickViewBtn from "./QuickViewBtn"
import WishListBtn from "./WishListBtn"
import { useTranslations } from "next-intl";
import { productType } from "../types/productType";
import { useProductContext } from "../context/ProductContext";

const ProductActions = () => {
    const t = useTranslations('homePage.product')

    //contexts
    const item = useProductContext()
    return (
        <div className="w-full flex justify-between">

            <div className="absolute top-4 right-4 flex flex-col gap-2">
                <WishListBtn />
                <QuickViewBtn />
            </div>

            {/* Discount badge && new badge */}
            <div className="absolute top-4 left-4 flex flex-col gap-3">
                {item.discountPercent ? <Badge>-{item.discountPercent}%</Badge> : ''}

                {item.isNew && <Badge className="bg-button-1 text-center" >{t('new')}</Badge>}
            </div>
        </div>
    )
}

export default ProductActions