"use client"

import { useEffect, useRef } from "react"
import { useIntersectingObs } from "@/hooks/useIntersectingObs";
import AddToCart from "@/features/cart/components/AddToCart";
import WishListBtn from "@/features/wishlist/components/WishListBtn";

const FixedAddtocart = () => {
    const footerRef = useRef<HTMLElement | null>(null);
    const { hide } = useIntersectingObs(footerRef);

    useEffect(()=> {footerRef.current = document.getElementById('main-footer')},[])
    return (
      <div
        className={`${
          hide ? "translate-y-20" : "translate-y-0"
        } transition-all duration-300 ease-apple w-full z-10 start-0 fixed bottom-0 p-2 bg-white border-t border-border flex items-center gap-4`}
      >
        <AddToCart
          className="relative h-12 grow w-50 rounded overflow-hidden md:*:text-base "
          qtyProps={{
            className: "h-12 w-full rounded *:rounded",
            isDark: false,
          }}
          show
          insideModal
        />
        <WishListBtn className="rounded w-12 *:w-7 *:h-7 h-12 [action-btn-select]:border-transparent border-inactive border hover:border-transparent" />
      </div>
    );
  };

export default FixedAddtocart