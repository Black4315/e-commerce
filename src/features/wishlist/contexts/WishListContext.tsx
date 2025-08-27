"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { WishlistItem } from "@/features/wishlist/types/wishlistType";
import useFetchWishList from "@/features/wishlist/hooks/useFetchWishList";
import { useLocale } from "next-intl";

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const WishlistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user, isLoggedIn } = useUserContext();
  const locale = useLocale();
  const { data: fetchedWishlist, isSuccess } = useFetchWishList(locale);

  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const hasInitializedFromServerRef = useRef(false);
  const lastUserIdRef = useRef<string | number | null | undefined>(undefined);

  // initialize once per user / or restore from session
  useEffect(() => {
    if (!isLoggedIn) {
      const sessionWishlist = sessionStorage.getItem("wishlist");
      if (sessionWishlist) {
        setWishlist(JSON.parse(sessionWishlist));
      }
      hasInitializedFromServerRef.current = false;
      lastUserIdRef.current = undefined;
      return;
    }

    if (isLoggedIn && user && isSuccess && fetchedWishlist) {
      if (lastUserIdRef.current !== user.id) {
        hasInitializedFromServerRef.current = false;
      }

      if (!hasInitializedFromServerRef.current) {
        const userWishlist = fetchedWishlist.filter(
          (item) => item.userId === user.id
        );
        setWishlist(userWishlist);
        hasInitializedFromServerRef.current = true;
        lastUserIdRef.current = user.id;
      }
    }
  }, [isLoggedIn, user?.id, fetchedWishlist, isSuccess]);

  // persist guest wishlist only
  useEffect(() => {
    if (!isLoggedIn) {
      sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [isLoggedIn, wishlist]);

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
    // TODO: if logged in, also call API to persist
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    // TODO: if logged in, also call API to persist
  };

  const clearWishlist = () => {
    setWishlist([]);
    // TODO: if logged in, also call API to clear
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context)
    throw new Error("useWishlist must be used within WishlistProvider");
  return context;
};
