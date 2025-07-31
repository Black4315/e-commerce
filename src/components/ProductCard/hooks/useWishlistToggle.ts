import { useState, useEffect } from 'react';
import { productType } from '../types/productType';
import { useWishlist } from '@/contexts/WishListContext';
import { useUserContext } from '@/contexts/UserContext';

export const useWishlistToggle = (item: productType) => {
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist()
    const { isLoggedIn , user} = useUserContext()


    const [isExisting, setIsExisting] = useState(wishlist.some((e) => e.id == item.id))


    const toggleWishlist = async () => {
        if (!item) return Promise.reject("No item");

        try {
            // Simulated API delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

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

    return {
        toggleWishlist,
        isExisting,
        isLoggedIn
    };
};