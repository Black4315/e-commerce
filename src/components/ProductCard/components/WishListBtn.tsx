"use client"

import HeartsmallIcon from "@/assets/icons/heartsmall"
import Button from "@/components/ui/Button"
import { productType } from "../types/productType"
import { useWishlist } from "@/contexts/WishListContext"
import { useState } from "react"

const WishListBtn = ({ item }: { item: productType }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const [isExisting, setIsExisting] = useState(wishlist.some((e) => e.id == item.id))


  const click = () => {
    if (isExisting) {
      removeFromWishlist(item.id)
      setIsExisting(false)
    } else {
      addToWishlist(item)
      setIsExisting(true)
    }
  }

  return (
    <Button onClick={click} className={`${isExisting ? 'action-btn-select' : 'bg-white'} rounded-full w-8.5 h-8.5`}>
      <HeartsmallIcon className="w-6 h-6" />
    </Button>
  )
}

export default WishListBtn