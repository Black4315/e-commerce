import { useState, useEffect } from 'react';
import { productType } from '../types/productType';
import { useCartContext } from '@/contexts/CartContext';
import { useUserContext } from '@/contexts/UserContext';

export const useAddToCart = (item?: productType) => {
    const { cart, addToCart, removeFromCart } = useCartContext();
    const { user } = useUserContext();

    const [isExisting, setIsExisting] = useState(false);

    // Update `isExisting` when `cart` or `item` changes
    useEffect(() => {
        if (item) {
            setIsExisting(cart.some((e) => e.id === item.id));
        }
    }, [cart, item]);

     const Add = async () => {
        if (!item) return Promise.reject("No item to add");

        try {
            // ✅ Simulated API call — replace with real fetch/axios later
            await new Promise((resolve) => setTimeout(resolve, 1000)); 

            if (isExisting) {
                removeFromCart(item.id);
            } else {
                addToCart({ userId: user?.id, quantity: 1, ...item });
            }

            setIsExisting((prev) => !prev);

            return Promise.resolve(); // success
        } catch (err) {
            return Promise.reject(err); // failure
        }
    };

    return {
        Add,
        isExisting,
        cart,
        user,
    };
};
