import { ProductCardBadges } from "@/components/ProductCard/components/ProductCardBadges"
import CartModalSelSize from "./CartModalSelSize"
import { useProductContext } from "@/contexts/product/ProductContext"
import Link from "next/link"
import { pages } from "@/constants/pages"

const CartModalBody = () => {
    const { flash } = useProductContext()
    // const { selectedVariant } = useProductSelection()
    return (
        <div className="flex flex-col items-start">
            <CartModalSelSize />
            {flash && <Link href={pages.flashSales}> <ProductCardBadges.limited className='md:text-sm'/></Link>}
        </div>
    )
}

export default CartModalBody