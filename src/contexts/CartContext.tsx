// "use client";
// import { CartItem } from "@/types/cart";
// import { createContext, useContext, useEffect, useState } from "react";
// import { useUserContext } from "./UserContext";

// interface CartContextType {
//     cart: CartItem[];
//     addToCart: (item: CartItem) => void;
//     removeFromCart: (itemId: number) => void;
//     clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
//     const { isLoggedIn, user } = useUserContext();
//     const [cart, setCart] = useState<CartItem[]>([]);

//     // Load cart from local/sessionStorage
//     useEffect(() => {
//         const stored = isLoggedIn
//             ? sessionStorage.getItem(`cart-${user?.id}`)
//             : sessionStorage.getItem("cart");

//         if (stored) {
//             setCart(JSON.parse(stored));
//         }
//     }, [isLoggedIn, user?.id]);

//     // Persist cart
//     useEffect(() => {
//         if (isLoggedIn && user) {
//             sessionStorage.setItem(`cart-${user.id}`, JSON.stringify(cart));
//         } else {
//             sessionStorage.setItem("cart", JSON.stringify(cart));
//         }
//     }, [isLoggedIn, cart, user?.id]);

//     const addToCart = (item: CartItem) => {
//         setCart((prev) => {
//             const existing = prev.find((i) => i.id === item.id);
//             if (existing) {
//                 return prev.map((i) =>
//                     i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
//                 );
//             }
//             return [...prev, item];
//         });
//     };

//     const removeFromCart = (itemId: number) => {
//         setCart((prev) => prev.filter((i) => i.id !== itemId));
//     };

//     const clearCart = () => {
//         setCart([]);
//         if (isLoggedIn && user) {
//             sessionStorage.removeItem(`cart-${user.id}`);
//         } else {
//             sessionStorage.removeItem("cart");
//         }
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => {
//     const ctx = useContext(CartContext);
//     if (!ctx) throw new Error("useCart must be used inside CartProvider");
//     return ctx;
// };

"use client";
import { CartItem } from "@/types/cartType";
import { createContext, useContext, useEffect, useState } from "react";
import { useUserContext } from "./UserContext";
import useFetchCart from "@/hooks/useFetchCart";
import { useLocale } from "next-intl";


interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoggedIn } = useUserContext();
    const [cart, setCart] = useState<CartItem[]>([]);

    //get loacle from next-intl
    const locale = useLocale();

    // Fetch cart data
    // This hook should return the cart data based on the locale and user
    const { data: fetchedCart, isSuccess } = useFetchCart(locale);

    // Filter user-specific cart once data is available
    useEffect(() => {
        if (user && isSuccess && fetchedCart) {
            const userCart = fetchedCart.filter((item) => item.userId === user.id);
            setCart(userCart);
        }
    }, [user, fetchedCart, isSuccess]);

    useEffect(() => {
        if (isLoggedIn && user) {
            // it will change to real for auth user when backend
            sessionStorage.setItem(`cart-${user.id}`, JSON.stringify(cart));
        } else {
            // save the cart until user next auth
            sessionStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [isLoggedIn, cart, user?.id]);

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            const exists = prev.find((i) => i.id === item.id);
            if (exists) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                );
            }
            return [...prev, item];
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((i) => i.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within CartProvider');
    return context;
};