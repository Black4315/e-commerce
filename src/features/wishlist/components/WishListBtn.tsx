"use client";

import HeartsmallIcon from "@/assets/icons/heartsmall";
import Button from "@/components/ui/Button";
import { pages } from "@/constants/pages";
import { useWishlistToggle } from "@/features/wishlist/hooks/useWishlistToggle";
import { usePathname, useRouter } from "next/navigation";
import { useProductContext } from "@/entities/Product/contexts/ProductContext";
import IcondeleteIcon from "@/assets/icons/icondelete";
import { productType } from "@/entities/Product/types/productType";
import { CartItem } from "@/features/cart/types/cartType";

const WishListBtn = ({
  item: exItem,
  className,
}: {
  item?: productType | CartItem;
  className?: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const isWishlistPage = pathname.includes(pages.wishlist);

  //contexts
  const item = () => {
    try {
      const item = useProductContext();
      return item;
    } catch (error) {
      return exItem as productType;
    }
  };
  if (!item()) return null;

  const { toggleWishlist, isExisting, isLoggedIn } = useWishlistToggle(item());

  const handleClick = () => {
    if (!isLoggedIn) {
      router.push(pages.signup);
      return;
    }
    toggleWishlist();
  };

  return (
    <Button
      onClick={handleClick}
      aria-label="wishlist toggling button"
      className={`${
        !isWishlistPage && isExisting ? "action-btn-select" : "bg-white"
      } rounded-full w-8.5 h-8.5 ${className}`}
    >
      {isWishlistPage && isExisting ? (
        <IcondeleteIcon className="w-6 h-6" />
      ) : (
        <HeartsmallIcon className="w-6 h-6" />
      )}
    </Button>
  );
};

export default WishListBtn;
