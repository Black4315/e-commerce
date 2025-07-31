"use client"

import HeartsmallIcon from "@/assets/icons/heartsmall"
import Button from "@/components/ui/Button"
import { productType } from "../types/productType"
import { useOptionalProductContext } from "../context/ProductContext"
import { pages } from "@/constants/pages"
import { useWishlistToggle } from "../hooks/useWishlistToggle"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const WishListBtn = ({ className, itemProd, }: { className?: string; itemProd?: productType; }) => {
  //contexts
  const router = useRouter()
  const item = useOptionalProductContext() || itemProd;
  if (!item) return null

  const {
    toggleWishlist,
    isExisting,
    isLoggedIn } = useWishlistToggle(item)

  const handleClick = () => {
    if (!isLoggedIn) {
      router.push(pages.signup);
      return;
    }

    toast.promise(
      toggleWishlist(),
      {
        loading: isExisting ? 'Removing...' : 'Adding...',
        success: isExisting ? 'Removed from wishlist!' : 'Added to wishlist!',
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