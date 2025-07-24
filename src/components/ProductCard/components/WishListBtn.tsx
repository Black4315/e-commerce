"use client"

import HeartsmallIcon from "@/assets/icons/heartsmall"
import Button from "@/components/ui/Button"

const WishListBtn = () => {
  return (
      <Button className="rounded-full w-8.5 h-8.5 bg-white">
          <HeartsmallIcon className="w-6 h-6"/>
      </Button>
  )
}

export default WishListBtn