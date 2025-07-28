import ImageViewSlider from "@/features/QuickView/components/imageViewSlider"
import AddToCart from "../../components/ProductCard/components/AddToCart"
import QuickViewIcon from "@/assets/icons/QuickView"
import { productType } from "../../components/ProductCard/types/productType"
import QuickViewInfo from "./components/QuickViewInfo"
import WishListBtn from "@/components/ProductCard/components/WishListBtn"
import Button from "@/components/ui/Button"
import IconsarrowrightIcon from "@/assets/icons/iconsarrowright"

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
    return (
        <div className="h-full flex flex-col items-center ">
            <h2 className="text-2xl font-bold mb-6 md:mb-8 font-inter gap-2 flex-center">
                <QuickViewIcon />
                {quickViewText}
            </h2>

            <div className="flex gap-6 max-lg:flex-col">
                <ImageViewSlider images={images} alt={title} />
                <div className="flex flex-col justify-between text-start min-w-80 max-w-90">
                    <div className="flex flex-col h-full">
                        <QuickViewInfo {...{ title, description, inStock, rating, reviewsCount, link }} />


                        <h1 className="heading leading-10 mt-auto md:text-3xl tracking-normal flex gap-2">
                            <span className={!(currency.toLowerCase() == 'usd') ? 'order-2' : ''}>
                                {currency.toLowerCase() == 'usd' ? '$' : currency}
                            </span>
                            {price.toFixed(2)}
                        </h1>
                        <p className=" text-inactive text-xs">Incl. import charges; est. other taxes: $0.33</p>
                    </div>

                    <div className="mt-4 md:mt-6 max-sm:fixed left-0 right-0 bottom-0 max-sm:bg-white flex gap-2">
                        <AddToCart itemProd={productInfo} show className="relative sm:h-15 rounded overflow-hidden" />
                        <WishListBtn itemProd={productInfo} className="rounded w-14 *:w-14 *:h-8.5 h-full "/>
                    </div>
                </div>

            </div>

        </div>
    )
}


export default QuickView