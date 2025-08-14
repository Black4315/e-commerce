"use client"
import ProductRating from "@/components/shared/Product/ProductRating"
import SoldNumbers from "./SoldNumbers"
import QuickInStock from "./QuickInStock"
import { useProductSelection } from "@/contexts/product/ProductSelectionContext"
import { useProductContext } from "@/contexts/product/ProductContext"
import MoreDetails from "@/components/shared/Product/MoreDetails"

const QuickViewInfo = () => {
  //contexts
  const product = useProductContext()
  const productSelection = useProductSelection()

  const {
    id,
    title,
    description,
    soldNumber
  } = product
  const { inStock } = productSelection.selectedVariant
  const link = `products/${id}`

  return (
    <div className="*:mb-2 sm:*:mb-4 border-b border-border max-md:mb-4 mb-6">

      <h3 className="semi-heading capitalize leading-6 md:leading-8 md:mb-3 font-poppins ellipsis" >{title}</h3>
      <p className="reg-text overflow-hidden line-clamp-4 ">{description}</p>

      <div className="flex gap-2">
        <ProductRating />
        <SoldNumbers soldNumber={soldNumber} />
      </div>

      <div className="flex items-center justify-between w-full">
        <QuickInStock inStock={inStock} />
        <MoreDetails link={link} />
      </div>
      {/* TODO:add size select adn color */}
    </div>

  )
}

export default QuickViewInfo