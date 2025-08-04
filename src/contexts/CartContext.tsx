"use client";
import { CartItem } from "@/types/cartType";
import { createContext, useContext, useEffect, useState } from "react";
import { useUserContext } from "./UserContext";
import useFetchCart from "@/hooks/useFetchCart";
import { useLocale } from "next-intl";
import { Variant } from "@/types/productType";

interface Coupon {
    code: string;
    discount: number; // Discount in percentage (e.g., 10 means 10%)
}

interface CartContextType {
    cart: CartItem[];
    coupon: Coupon | null;
    addToCart: (item: CartItem, variant?: Variant, size?: string | null) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number, variant?: Variant, size?: string | null) => void;
    clearCart: () => void;
    applyCoupon: (coupon: Coupon) => void;
    removeCoupon: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoggedIn } = useUserContext();
    const [cart, setCart] = useState<CartItem[]>([]);
    const [coupon, setCoupon] = useState<Coupon | null>(null);
    
    // Get locale from next-intl
    const locale = useLocale();

    // Fetch cart data based on user and locale
    const { data: fetchedCart, isSuccess } = useFetchCart(locale);

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

    const addToCart = (item: CartItem, variant?: Variant, size?: string | null) => {
        setCart((prev) => {
            const exists = prev.find((i) => i.id === item.id && i.color == variant?.color && i.size == size);
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

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((i) => i.id !== id));
    };

    const updateQuantity = (id: number, quantity: number, variant?: Variant, size?: string | null) => {
        setCart((prev) =>
            prev.map((i) =>
                (i.id === id && i.color == variant?.color && i.size == size) ? { ...i, quantity: quantity } : i
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
        let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        if (coupon) {
            total -= (total * coupon.discount) / 100;
        }

        return total;
    };

    return (
        <CartContext.Provider value={{ cart, coupon, addToCart, removeFromCart, updateQuantity, clearCart, applyCoupon, removeCoupon }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within CartProvider');
    return context;
};
