"use client";
import { CartItem } from "@/features/cart/types/cartType";
import { createContext, useContext, useEffect, useState } from "react";
import { useUserContext } from "@/contexts/UserContext";
import useFetchCart from "@/hooks/useFetchCart";
import { useLocale } from "next-intl";
import { Size, Variant } from "@/types/productType";

interface Coupon {
  code: string;
  discount: number; // Discount in percentage (e.g., 10 means 10%)
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

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoggedIn } = useUserContext();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [coupon, setCoupon] = useState<Coupon | null>(null);

  // Get locale from next-intl
  const locale = useLocale();

  // Fetch cart data based on user and locale
  const { data: fetchedCart, isSuccess, isLoading } = useFetchCart(locale);

  // Filter user-specific cart once data is available
  useEffect(() => {
    if (isLoggedIn && user && isSuccess && fetchedCart) {
      const userCart = fetchedCart.filter((item) => item.userId === user.id);
      setCart(userCart);
    } else if (!isLoggedIn) {
      const sessionCart = sessionStorage.getItem("cart");
      if (sessionCart) {
        setCart(JSON.parse(sessionCart));
      }
    }
  }, [isLoggedIn, user, fetchedCart, isSuccess, locale]);

  // Add cart list to sessionStorage until user get auth
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [isLoggedIn, cart, user?.id]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const exists = prev.find(
        (i) =>
          i.id === item.id &&
          i.selectedVariant.sku == item.selectedVariant.sku &&
          i.selectedSize == item.selectedSize
      );
      if (exists) {
        return prev.map((i) =>
          i.id === item.id
            ? {
                ...i,
                quantity: i.quantity + item.quantity,
              }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = ({ id, selectedVariant, selectedSize }: CartItem) => {
    setCart((prev) =>
      prev.filter(
        (i) =>
          i.id != id &&
          i.selectedVariant.sku != selectedVariant.sku ||
          i.selectedSize?.size != selectedSize?.size 
      )
    );
  };

  const updateQuantity = (
    { id, selectedVariant, selectedSize }: CartItem,
    quantity: number
  ) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id &&
        i.selectedVariant.sku == selectedVariant.sku &&
        i.selectedSize == selectedSize
          ? { ...i, quantity: quantity }
          : i
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyCoupon = (coupon: Coupon) => {
    setCoupon(coupon);
  };

  const removeCoupon = () => {
    setCoupon(null);
  };

  // Calculate total price considering the coupon
  const calculateTotalPrice = () => {
    let total = cart.reduce(
      (sum, item) =>
        sum +
        (item.selectedVariant.price * item.quantity +
          item.taxes * item.quantity),
      0
    );

    if (coupon) {
      total -= (total * coupon.discount) / 100;
    }

    return +total.toFixed(2);
  };

  const subTotal = +cart
    .reduce((sum, curr) => curr.selectedVariant.price * curr.quantity + sum, 0)
    .toFixed(2);
  const totalTaxes = +cart
    .reduce((sum, curr) => curr.taxes * curr.quantity + sum, 0)
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
