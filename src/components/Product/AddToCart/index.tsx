'use client'

import { useMobileCheck } from '@/hooks/useMobileCheck'
import { useTranslations } from 'next-intl'
import { useProductContext } from '@/contexts/product/ProductContext'
import { useAddToCart } from '@/hooks/product/useAddtoCart'
import { cn } from '@/lib/utils'
import { useProductSelection } from '@/contexts/product/ProductSelectionContext'
import { ChangeCartQuantity } from './ChangeCartQuantity'
import AddToCartModal from './AddToCartModal'
import AddButton from './AddButton'
import { ModalPopup } from '@/components/ui/ModalPopup'
import { useModal } from '@/hooks/useModal'

type Props = {
    className?: string
    qtyClassName?: string;
    show?: boolean
    insideModal?: boolean
}

export default function AddToCart({
    show,
    className,
    qtyClassName,
    insideModal = false
}: Props) {
    const t = useTranslations('homePage.product')
    const isMobile = useMobileCheck()


    // contexts
    const item = useProductContext()
    const { selectedVariant, selectedSize, hasVariationsSizes } = useProductSelection()
    const variant = selectedVariant
    const size = selectedSize

    // custom hook
    const {
        toggleCart,
        updateQty,
        exists,
        quantity
    } = useAddToCart(item, variant, size, hasVariationsSizes)
    const { modalOpen, openModal, closeModal } = useModal()

    // if there is variations open vairiations modal to make user able to choose on
    const handleClick = () => (hasVariationsSizes && !insideModal) ? openModal() : toggleCart()
    const hidden = !isMobile && !exists && !show && variant?.inStock

    // conditions
    const renderQuantity = () =>
        exists && variant?.inStock ? (
            <ChangeCartQuantity
                updateQty={updateQty}
                maxQyt={item?.itemsLeft}
                quantity={quantity}
                className={qtyClassName}
            />
        ) : (
            <AddButton inStock={variant?.inStock} onClick={handleClick} label={t('addCart')} soldOut={t('soldOut')} />
        )

    return (
        <div
            className={cn(
                'absolute bottom-0 w-full transition-apple duration-150 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-500 group-hover:pointer-events-auto',
                false && 'translate-y-2.5 opacity-0 pointer-events-none',
                className
            )}
        >
            {renderQuantity()}
            <ModalPopup
                isOpen={modalOpen}
                onClose={closeModal}
                content={<AddToCartModal />}
                classes={{
                    popup: 'max-sm:w-screen',
                }}
            />
        </div>
    )
}
