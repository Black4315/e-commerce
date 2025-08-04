'use client'

import { useProductSelection } from "@/contexts/product/ProductSelectionContext"
import SizesSelection from "../../SizesSelection"
import { Skeleton } from "@mui/material"

const CartModalSelSize = () => {
    const { selectedVariant, selectedSize, setSelectedSize } = useProductSelection()

    if (!selectedSize) return <Skeleton variant="rectangular"/>;
    return (
        <SizesSelection
            sizes={selectedVariant.sizes}
            size={selectedSize}
            setSize={setSelectedSize}
            dropDown
        />
    )
}

export default CartModalSelSize