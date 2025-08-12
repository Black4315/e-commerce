"use client"

import HeartsmallIcon from "@/assets/icons/heartsmall"
import Button from "@/components/ui/Button"
import { pages } from "@/constants/pages"
import { useWishlistToggle } from "@/hooks/product/useWishlistToggle"
import { usePathname, useRouter } from "next/navigation"
import { useProductContext } from "@/contexts/product/ProductContext"
import IcondeleteIcon from "@/assets/icons/icondelete"

const WishListBtn = ({ className }: { className?: string; }) => {
  const router = useRouter()
  const pathname = usePathname();
  const isWishlistPage = pathname.includes(pages.wishlist);

  //contexts
  const item = useProductContext();

  const {
    toggleWishlist,
    isExisting,
    isLoggedIn
  } = useWishlistToggle(item)

  const handleClick = () => {
    if (!isLoggedIn) {
      router.push(pages.signup);
      return;
    }
    toggleWishlist()
  };

  return (
    <Button onClick={handleClick} className={`${!isWishlistPage && isExisting ? 'action-btn-select' : 'bg-white'} rounded-full w-8.5 h-8.5 ${className}`}>
      {isWishlistPage && isExisting ? <IcondeleteIcon className="w-6 h-6" /> : <HeartsmallIcon className="w-6 h-6" />}
    </Button>
  )
}

export default WishListBtn