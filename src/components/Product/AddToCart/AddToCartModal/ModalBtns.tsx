'use client'
import ActionsIconButton from "@/components/ui/ActionsIconButton"
import { pages } from "@/constants/pages"
import Icons_arrowleftIcon from "@/assets/icons/icons_arrowleft"
import AddToCart from "../../AddToCart"


const ModalBtns = () => {

    return (
        <div className={`mt-4 md:mt-6 flex gap-2`}>
            <AddToCart
                className="relative h-12 sm:h-15 w-full rounded overflow-hidden md:*:text-base "
                qtyClassName="h-12 sm:h-15 w-full rounded *:rounded"
                insideModal
            />
            <ActionsIconButton
                title="Go to Cart"
                href={pages.cart}
                width={28}
                height={28}
                Icon={Icons_arrowleftIcon}
                tooltipPlacement="top"
                className="h-auto ltr:rotate-180 w-14"
            />
        </div>
    )
}

export default ModalBtns