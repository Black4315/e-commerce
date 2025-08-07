
import { productType } from "../../../types/productType"
import ProductProvider from "../../../contexts/product/ProductContext"
import Card from "./components/Card"
import { ProductSelectionProvider } from "@/contexts/product/ProductSelectionContext"

type ProductCardType = {
    product: productType,
    className?: string
}
const ProductCard = ({
    product,
    className
}: ProductCardType) => {
    return (
        <ProductProvider product={product}>
            <ProductSelectionProvider
                variants={product.variants}
                defaultVariantIndex={product.defaultVariantIndex}
            >
                <Card className={className} />
            </ProductSelectionProvider>
        </ProductProvider>
    )
}

export default ProductCard