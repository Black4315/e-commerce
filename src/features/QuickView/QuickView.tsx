import ImageViewSlider from "@/features/QuickView/components/imageViewSlider"
import AddToCart from "../../components/ProductCard/components/AddToCart"
import QuickViewIcon from "@/assets/icons/QuickView"
import { productType } from "../../components/ProductCard/types/productType"
import QuickViewInfo from "./components/QuickViewInfo"
import WishListBtn from "@/components/ProductCard/components/WishListBtn"
import Button from "@/components/ui/Button"
import IconsarrowrightIcon from "@/assets/icons/iconsarrowright"
import { useMobileCheck } from "@/hooks/useMobileCheck"
import QuickPricing from "./components/QuickPricing"

const QuickView = ({ productInfo, quickViewText }: { productInfo: productType; quickViewText: string }) => {

    const {
        id,
        images,
        title,
        price,
        description,
        discountPercent,
        originalPrice,
        currency,
        inStock,
        rating,
        reviewsCount
    } = productInfo

    const link = `products/${id}`
    const isMobile = useMobileCheck()

    const taxes = 0.33
    const soldNumber = 2000
    return (
        <div className="h-full flex flex-col items-center ">
            <h2 className="semi-heading mb-4 md:mb-6 font-inter gap-2 flex-center">
                <QuickViewIcon />
                {quickViewText}
            </h2>

            <div className={`flex gap-4 md:gap-6 max-lg:h-full ${isMobile ? 'w-full flex-col ' : 'max-lg:max-w-158 max-lg:flex-col'}`}>
                <ImageViewSlider images={images} alt={title} />

                <div className={`flex flex-col justify-between text-start max-lg:h-full ${isMobile ? 'w-full' : 'lg:min-w-80 lg:max-w-90'}`}>
                    <div className="flex flex-col h-full">
                        <QuickViewInfo {...{ title, description, inStock, rating, reviewsCount, link, soldNumber }} />
                        <QuickPricing {...{ price, currency, taxes, discountPercent, originalPrice }}/>
                    </div>

                    <div className={`mt-4 md:mt-6 flex gap-2 ${isMobile ? 'max-md:mb-0 mb-6 ' :'max-md:mb-4 max-lg:mb-6 '}`}>
                        <AddToCart itemProd={productInfo} show className="relative h-12 sm:h-15 rounded overflow-hidden " />
                        <WishListBtn itemProd={productInfo} className="rounded w-14 *:w-14 *:h-8.5 h-full "/>
                    </div>
                </div>

            </div>

        </div>
    )
}


export default QuickView