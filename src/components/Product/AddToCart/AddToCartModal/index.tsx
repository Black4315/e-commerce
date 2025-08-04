"use client"

import { useTranslations } from "next-intl"
import ModalBtns from "./components/ModalBtns"
import CartModalHeading from "./components/CartModalHeading"
import CartModalBody from "./components/CartModalBody"


const AddToCartModal = () => {
  const t = useTranslations('homePage.product')

  return (
    <div className="h-full flex flex-col sm:w-120">
      {/* text head */}
      <h2 className="semi-heading tracking-normal mb-6 font-poppins">
        {t('selectVariant')}
      </h2>

      <div className={`flex gap-6 md:gap-8 max-lg:h-full flex-col`}>
        <CartModalHeading />
        <CartModalBody />
        <ModalBtns />
      </div>

    </div>
  )
}

export default AddToCartModal