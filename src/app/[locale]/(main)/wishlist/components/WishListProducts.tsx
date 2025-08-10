'use client'
import ProductCards from "@/components/ui/SectionProducts/components/ProductCards"
import SkeltonProductCard from "@/components/ui/SectionProducts/components/SkeltonProductCards"
import { useWishlist } from "@/contexts/WishListContext"
import { useHydrated } from "@/hooks/useHydrated"
import WishSection from "../../../../../components/ui/WishSection"
import { useTranslations } from "next-intl"
import WishlistIcon from "@/assets/icons/Wishlist"

const WishListProducts = () => {
    const { hydrated } = useHydrated()
    const { wishlist } = useWishlist()
    const t = useTranslations('homePage')

    return (
        <WishSection
            heading={t('wishlist.wishlist') + ` (${wishlist.length})`}
            btn={t('wishlist.moveToCart')}
        >
            <div className="">
                {!hydrated ? (
                    <SkeltonProductCard />
                ) : (

                    <ProductCards btnsClassname="hidden" data={wishlist} emptyState={{
                        icon: <WishlistIcon className="w-14 h-14" />,
                        title: "Your wishlist is feeling lonely",
                        description: "Looks like you haven’t added anything yet. Go find something you love!"
                    }} />
                )
                }
            </div>

        </WishSection>
    )
}

export default WishListProducts