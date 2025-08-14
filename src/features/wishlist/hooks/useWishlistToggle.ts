import { useState, useEffect } from "react";
import { productType } from "../../../types/productType";
import { useWishlist } from "@/features/wishlist/contexts/WishListContext";
import { useUserContext } from "@/contexts/UserContext";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

export const useWishlistToggle = (item: productType) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { isLoggedIn, user } = useUserContext();
  const t = useTranslations("homePage.toast");

  const [isExisting, setIsExisting] = useState(
    wishlist.some((e) => e.id == item.id)
  );

  const toggleWishlistProm = async () => {
    if (!item) return Promise.reject("No item");

    try {
      // Simulated API delay
      await new Promise((resolve) => setTimeout(resolve, 600));

      if (isExisting) {
        removeFromWishlist(item.id);
      } else {
        addToWishlist({ ...item, userId: user?.id });
      }

      setIsExisting((prev) => !prev);
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const toggleWishlist = () => {
    // t() to get translation of toast message
    const promise = toggleWishlistProm();

    toast.promise(promise, {
      loading: !isExisting
        ? `${t("addingTo", { e: t("wishlist") })}...`
        : `${t("removingFrom", { e: t("wishlist") })}...`,
      success: !isExisting
        ? `${t("addedTo", { e: t("wishlist") })}`
        : `${t("removedFrom", { e: t("wishlist") })}`,
      error: "Could not update wishlist.",
    });

    return promise;
  };
  return {
    toggleWishlist,
    isExisting,
    isLoggedIn,
  };
};
