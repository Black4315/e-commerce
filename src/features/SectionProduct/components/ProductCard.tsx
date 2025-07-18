"use client"

import { productType } from "../types/productType"

const ProductCard = (props: productType) => {
    const {
        id,
        title,
        description,
        image,
        category,
        originalPrice,
        discountedPrice,
        currency,
        discountPercent,
        inStock,
        rating,
        reviewsCount,
        colors,
        sizes,
        flashSaleStart,
        flashSaleEnd, } = props

    return (
        <div className="flex flex-col w-[270]">
            <div className="rounded bg-secondary-1 relative p-3">
                <span className="p-1.5 font-poppins text-xs tracking-wide px-3 text-text-1 rounded bg-secondary-3">
                    -{discountPercent}%
                </span>
                <div className="">

                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ProductCard