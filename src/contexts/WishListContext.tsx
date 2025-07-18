// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import { useUserContextContext } from "./UserContext";
// import { WishlistItem } from "@/types/wishlist";


// interface WishlistContextType {
//     wishlist: WishlistItem[];
//     addToWishlist: (item: WishlistItem) => void;
//     removeFromWishlist: (itemId: number) => void;
//     clearWishlist: () => void;
// }

// const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
//     const { isLoggedIn, user } = useUserContextContext();
//     const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

//     // Load
//     useEffect(() => {
//         const stored = isLoggedIn
//             ? localStorage.getItem(`wishlist-${user?.id}`)
//             : sessionStorage.getItem("wishlist");

//         if (stored) {
//             setWishlist(JSON.parse(stored));
//         }
//     }, [isLoggedIn, user?.id]);

//     // Persist
//     useEffect(() => {
//         if (isLoggedIn && user) {
//             localStorage.setItem(`wishlist-${user.id}`, JSON.stringify(wishlist));
//         } else {
//             sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
//         }
//     }, [isLoggedIn, wishlist, user?.id]);

//     const addToWishlist = (item: WishlistItem) => {
//         setWishlist((prev) => {
//             const exists = prev.some((i) => i.id === item.id);
//             return exists ? prev : [...prev, item];
//         });
//     };

//     const removeFromWishlist = (itemId: number) => {
//         setWishlist((prev) => prev.filter((item) => item.id !== itemId));
//     };

//     const clearWishlist = () => {
//         setWishlist([]);
//         if (isLoggedIn && user) {
//             localStorage.removeItem(`wishlist-${user.id}`);
//         } else {
//             sessionStorage.removeItem("wishlist");
//         }
//     };

//     return (
//         <WishlistContext.Provider
//             value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}
//         >
//             {children}
//         </WishlistContext.Provider>
//     );
// };

// export const useWishlist = () => {
//     const ctx = useContext(WishlistContext);
//     if (!ctx) throw new Error("useWishlist must be used inside WishlistProvider");
//     return ctx;
// };
"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import { useUserContext } from './UserContext';
import { WishlistItem } from '@/types/wishlistType';
import useFetchWishList from '@/hooks/useFetchWishList';
import { useLocale } from 'next-intl';



interface WishlistContextType {
    wishlist: WishlistItem[];
    addToWishlist: (item: WishlistItem) => void;
    removeFromWishlist: (id: number) => void;
    clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
    const { user } = useUserContext();
    const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

    //get loacle from next-intl
    const locale = useLocale()

    // Fetch wishlist data
    const { data: fetchedWishlist, isSuccess } = useFetchWishList(locale);

    // Filter user-specific wishlist once data is available
    useEffect(() => {
        if (user && isSuccess && fetchedWishlist) {
            const userWishlist = fetchedWishlist.filter((item) => item.userId === user.id);
            setWishlist(userWishlist);
        }
    }, [user, fetchedWishlist, isSuccess]);


    const addToWishlist = (item: WishlistItem) => {
        setWishlist((prev) => {
            if (prev.some((i) => i.id === item.id)) return prev;
            return [...prev, item];
        });
    };

    const removeFromWishlist = (id: number) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    const clearWishlist = () => {
        setWishlist([]);
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
    if (!context) throw new Error('useWishlist must be used within WishlistProvider');
    return context;
};
