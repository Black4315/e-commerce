'use client'
import Badge from "@/components/ProductCard/components/ui/Badge";
import QuickViewBtn from "../../SectionProducts/components/QuickViewBtn"
import WishListBtn from "./WishListBtn"
import { useTranslations } from "next-intl";
import { productType } from "../types/productType";

const ProductActions = ({
    props
}: {
    props: productType
}) => {
    const t = useTranslations('homePage.product')
    return (
        <div className="w-full flex justify-between">

            <div className="absolute top-4 right-4 flex flex-col gap-2">
                <WishListBtn item={props} />
                <QuickViewBtn />
            </div>

            {/* Discount badge && new badge */}
            <div className="absolute top-4 left-4 flex flex-col gap-3">
                {props.discountPercent ? <Badge>-{props.discountPercent}%</Badge> : ''}

                {props.isNew && <Badge className="bg-button-1 text-center" >{t('new')}</Badge>}
            </div>
        </div>
    )
}

export default ProductActions