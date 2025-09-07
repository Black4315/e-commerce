"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { useUserContext } from "@/contexts/UserContext";
import useFetchCart from "@/features/cart/hooks/useFetchCart";
import { CartItem } from "@/features/cart/types/cartType";

interface Coupon {
  code: string;
  discount: number; // e.g. 10 => 10%
}

interface CartContextType {
  cart: CartItem[];
  coupon: Coupon | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  updateQuantity: (item: CartItem, quantity: number) => void;
  clearCart: () => void;
  applyCoupon: (coupon: Coupon) => void;
  removeCoupon: () => void;
  calculateTotalPrice: () => number;
  isLoading: boolean;
  subTotal: number;
  totalTaxes: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

/* ---------- helpers ---------- */
const areSameCartItem = (
  a: CartItem,
  b: Pick<CartItem, "id" | "selectedVariant" | "selectedSize">
) => {
  return (
    a.id === b.id &&
    a.selectedVariant?.sku === b.selectedVariant?.sku &&
    (a.selectedSize?.size ?? "") === (b.selectedSize?.size ?? "")
  );
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoggedIn } = useUserContext();
  const locale = useLocale();

  const { data: fetchedCart, isSuccess, isLoading } = useFetchCart(locale);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [coupon, setCoupon] = useState<Coupon | null>(null);

  // Prevent overwriting local changes on subsequent refetches:
  const hasInitializedFromServerRef = useRef(false);
  const lastUserIdRef = useRef<string | number | null | undefined>(undefined);

  /* ---------- initialize cart (server or session) ---------- */
  useEffect(() => {
    // If user is not logged in, restore guest cart from sessionStorage
    if (!isLoggedIn) {
      try {
        const sessionCart = sessionStorage.getItem("cart");
        if (sessionCart) setCart(JSON.parse(sessionCart));
      } catch (e) {
        console.warn("Failed to parse session cart", e);
      }
      // reset server-init state when logging out / guest
      hasInitializedFromServerRef.current = false;
      lastUserIdRef.current = undefined;
      return;
    }

    // logged-in flow: initialize from server once per user
    if (isLoggedIn && user && isSuccess && fetchedCart) {
      // if user changed, allow re-initialization
      if (lastUserIdRef.current !== user.id) {
        hasInitializedFromServerRef.current = false;
      }

      if (!hasInitializedFromServerRef.current) {
        const userCart = fetchedCart.filter((it: any) => it.userId === user.id);
        setCart(userCart);
        hasInitializedFromServerRef.current = true;
        lastUserIdRef.current = user.id;
      }
    }
    // only run when login/user/fetchedCart changes
  }, [isLoggedIn, user?.id, fetchedCart, isSuccess, locale]);

  /* ---------- persist guest cart to sessionStorage ---------- */
  useEffect(() => {
    if (!isLoggedIn) {
      try {
        sessionStorage.setItem("cart", JSON.stringify(cart));
      } catch (e) {
        console.warn("Failed to save cart to sessionStorage", e);
      }
    }
  }, [isLoggedIn, cart]);

  // cart operations (using comparator)
  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => areSameCartItem(i, item));
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = {
          ...next[idx],
          quantity: next[idx].quantity + item.quantity,
        };
        return next;
      }
      return [...prev, item];
    });
    // TODO: if logged in, also call API to persist
    // NOTE: If logged-in, you probably should call your API here to persist the change,
    // then invalidate/refetch the server cart (or use optimistic update + revert on error).
  };

  const removeFromCart = ({ id, selectedVariant, selectedSize }: CartItem) => {
    setCart((prev) =>
      prev.filter(
        (i) =>
          !areSameCartItem(i, {
            id,
            selectedVariant,
            selectedSize,
          })
      )
    );
    // TODO: if logged in, also call API to persist
  };

  const updateQuantity = (
    { id, selectedVariant, selectedSize }: CartItem,
    quantity: number
  ) => {
    setCart((prev) =>
      prev.map((i) =>
        areSameCartItem(i, { id, selectedVariant, selectedSize })
          ? { ...i, quantity }
          : i
      )
    );
    // TODO: if logged in, also call API to persist
  };

  const clearCart = () => setCart([]); // TODO: if logged in, also call API to persist
  const applyCoupon = (c: Coupon) => setCoupon(c); // TODO: if logged in, also call API to persist
  const removeCoupon = () => setCoupon(null); // TODO: if logged in, also call API to persist

  const calculateTotalPrice = () => {
    let total = cart.reduce(
      (sum, item) =>
        sum +
        item.selectedVariant.price * item.quantity +
        (item.taxes ?? 0) * item.quantity,
      0
    );
    if (coupon) {
      total -= (total * coupon.discount) / 100;
    }
    return +total.toFixed(2);
  };

  const subTotal = +cart
    .reduce((sum, curr) => sum + curr.selectedVariant.price * curr.quantity, 0)
    .toFixed(2);

  const totalTaxes = +cart
    .reduce((sum, curr) => sum + (curr.taxes ?? 0) * curr.quantity, 0)
    .toFixed(2);

  return (
    <CartContext.Provider
      value={{
        cart,
        coupon,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyCoupon,
        removeCoupon,
        calculateTotalPrice,
        isLoading,
        subTotal,
        totalTaxes,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
