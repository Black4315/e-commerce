import { cn } from "@/lib/utils"
import { productType } from "@/types/productType"
import { useTranslations } from "next-intl"
import Badge from "./ui/Badge"

export const ProductCardBadges = ({ item, className }: { item: productType, className?: string }) => {
    const t = useTranslations('homePage.product')

    return (
        < div className={cn("absolute top-4 start-4 flex flex-col gap-2", className)} >
            {item.discountPercent ? <Badge className="">-{item.discountPercent}%</Badge> : ''}

            {item.isNew && <Badge className="bg-button-1 text-center" >{t('new')}</Badge>}

           {item.flash && <ProductCardBadges.limited />}
        </div >
    )
}

ProductCardBadges.limited = ({ className }: { className?: string }) => {
    const t = useTranslations('homePage.product')

    return (
        <Badge className={cn("bg-[#CC0C39] rounded-full px-2 h-fit py-1 max-md:text-text-[10px]",className)}>{t('limitedTime')}</Badge>
    )
}