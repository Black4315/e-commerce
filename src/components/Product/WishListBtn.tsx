"use client"

import HeartsmallIcon from "@/assets/icons/heartsmall"
import Button from "@/components/ui/Button"
import { pages } from "@/constants/pages"
import { useWishlistToggle } from "@/hooks/product/useWishlistToggle"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useTranslations } from "next-intl"
import { useProductContext } from "@/contexts/product/ProductContext"

const WishListBtn = ({ className}: { className?: string;}) => {
  const t = useTranslations('homePage.toast')
  const router = useRouter()

  //contexts
  const item = useProductContext();

  const {
    toggleWishlist,
    isExisting,
    isLoggedIn } = useWishlistToggle(item)

  const handleClick = () => {
    if (!isLoggedIn) {
      router.push(pages.signup);
      return;
    }

    // t() to get translation of toast message
    toast.promise(
      toggleWishlist(),
      {
        loading: !isExisting ? `${t('addingTo', { e: t('wishlist') })}...` : `${t('removingFrom', { e: t('wishlist') }) }...`,
        success: !isExisting ? `${t('addedTo', { e: t('wishlist') })}` : `${t('removedFrom', { e: t('wishlist') })}`,
        error: 'Could not update wishlist.',
      }
    );
  };

  return (
    <Button onClick={handleClick} className={`${isExisting ? 'action-btn-select' : 'bg-white'} rounded-full w-8.5 h-8.5 ${className}`}>
      <HeartsmallIcon className="w-6 h-6" />
    </Button>
  )
}

export default WishListBtn