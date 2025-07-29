"use client"
import ProductRating from "@/components/ProductCard/components/ProductRating"
import SoldNumbers from "./SoldNumbers"
import { useTranslations } from "next-intl"
import QuickInStock from "./QuickInStock"
import IconsarrowrightIcon from "@/assets/icons/iconsarrowright"
import Link from "next/link"

const QuickViewInfo = ({
  title,
  description,
  inStock,
  rating,
  reviewsCount,
  link,
  soldNumber
}: {
  title: string
  description: string
  inStock: boolean
  rating: number
  reviewsCount: number
  link: string
  soldNumber: number
}) => {
  const t = useTranslations('homePage.product')

  return (
    <div className="*:mb-2 sm:*:mb-4 border-b border-border max-md:mb-4 mb-6">

      <h3 className="semi-heading capitalize leading-6 md:leading-8 md:mb-3 font-poppins text-ellipsis whitespace-nowrap overflow-hidden" >{title}</h3>
      <p className="reg-text overflow-hidden line-clamp-4 ">{description}</p>

      <div className="flex gap-2">
        <ProductRating rating={rating} reviewsCount={reviewsCount} />
        <SoldNumbers soldNumber={soldNumber} />
      </div>

      <div className="flex items-center justify-between w-full">
        <QuickInStock inStock={inStock} />
        <Link href={link} className='flex items-center gap-2 text-secondary-3 group'>
          <span className='text-xs border-b my-1 border-0 hover:border-secondary-3 transition-all '>
            {t('moreDetails')}
          </span>
          <IconsarrowrightIcon className={`w-4 h-4 rtl:rotate-180`} />
        </Link>
      </div>

    </div>

  )
}

export default QuickViewInfo