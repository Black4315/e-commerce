"use client";

import Link from "next/link";
import AddToCart from "../../Product/AddToCart";
import ProductCardActions from "./ProductCardActions";
import ProductCardImage from "./ProductCardImage";
import ProductCardPrice from "./ProductCardPrice";
import ProductRating from "../../Product/ProductRating";
import ProductColors from "../../Product/ProductColors";
import { cn } from "@/lib/utils";
import { useMobileCheck } from "@/hooks/useMobileCheck";
import { useTranslations } from "next-intl";
import { useProductContext } from "@/contexts/product/ProductContext";
import { useProductSelection } from "@/contexts/product/ProductSelectionContext";

const Card = ({
  className
}: {
  className?: string;
}) => {

  const isMobile = useMobileCheck()
  const t = useTranslations('homePage.product')

  // contexts
  const { id, title, discountPercent } = useProductContext()
  const { selectedVariant, colors, selectedColor } = useProductSelection() // to check wich varient is selected (colors or sizes)

  const inStock = selectedVariant?.inStock

  return (
    <div
      data-label={inStock == false ? t('outStock') : ''}
      className={cn(`group forced-colors:border relative flex flex-col justify-between w-[270px] h-[350px] flex-shrink-0 rounded-xl overflow-hidden transition-apple duration-200 shadows-[0px_2px_6px_#00000029] shadow-[2px_4px_6px_rgba(0,0,0,0.06)] ${!isMobile && 'hover:shadow-[2px_4px_16px_#00000029] hover:scale-[1.01]'} ${inStock == false && `after:content-[attr(data-label)] sale-ended `}`, className)}>


      <div className="relative bg-secondary-1 w-full group overflow-hidden flex-shrink-0 h-[262px]">
        <ProductCardImage />
        <AddToCart />

        {/* Buttons on top and badges*/}
        <ProductCardActions />
      </div>

      {/* Name, Price & Rating */}
      <Link href={`/product/${id}`} className="flex flex-col h-full group-[.sale-ended]:blur-[1.2px]">
        <div className={`flex flex-col p-2 gap-0.5`}>
          <h3 className="med-text capitalize">{title}</h3>

          <div className={`flex ${!colors?.length ? 'flex-col gap-0.5' : 'items-center gap-3'}`}>
            {/* remove discount if there is no discountPercent */}
            <ProductCardPrice />

            <ProductRating />
          </div>

          {/* colors */}
          <ProductColors {...{ colors, selectedColor }} />
        </div>
      </Link>

    </div>)
}

export default Card