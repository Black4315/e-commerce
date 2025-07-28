
import { productType } from "./types/productType"
import Link from "next/link"
import AddToCart from "./components/AddToCart"
import ProductImage from "./components/ProductImage"
import ProductActions from "./components/ProductActions"
import ProductColors from "./components/ProductColors"
import ProductRating from "./components/ProductRating"
import ProductPrice from './components/ProductPrice'
import { useMobileCheck } from "@/hooks/useMobileCheck"
import { cn } from "@/lib/utils"
import ProductProvider from "./context/ProductContext"
import { useTranslations } from "next-intl"

const ProductCard = (props: productType & { className?: string }) => {
    const isMobile = useMobileCheck()
    const t = useTranslations('homePage.product')
    const {
        id,
        title,
        colors,
        inStock,
    } = props

    return (
        <ProductProvider product={props}>

            <div
                data-label={!inStock ? t('outStock') : ''}
                className={cn(`relative flex flex-col justify-between w-[270px] h-[350px] flex-shrink-0 rounded-xl overflow-hidden transition-apple duration-200 shadows-[0px_2px_6px_#00000029] shadow-[2px_4px_6px_rgba(0,0,0,0.06)] ${!isMobile && 'hover:shadow-[2px_4px_16px_#00000029] hover:scale-[1.01]'} ${!inStock && `after:content-[attr(data-label)] sale-ended `}`, props.className)}>


                <div className="relative bg-secondary-1 w-full group overflow-hidden flex-shrink-0 h-[262px]">
                    <ProductImage />
                    <AddToCart inStock={inStock} />

                    {/* Buttons on top and badges*/}
                    <ProductActions />
                </div>

                {/* Name, Price & Rating */}
                <Link href={`/product/${id}`} className="flex flex-col h-full">
                    <div className={`flex flex-col p-2 gap-0.5`}>
                        <h3 className="med-text capitalize">{title}</h3>

                        <div className={`flex ${!colors?.length ? 'flex-col gap-0.5' : 'items-center gap-3'}`}>
                            {/* remove discount if there is no discountPercent */}
                            <ProductPrice />

                            <ProductRating />
                        </div>

                        {/* colors */}
                        <ProductColors colors={colors}/>
                    </div>
                </Link>

            </div>
        </ProductProvider>
    )
}

export default ProductCard