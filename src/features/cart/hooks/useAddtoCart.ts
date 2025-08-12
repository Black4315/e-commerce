import { useCartContext } from "@/features/cart/contexts/CartContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { CartItem } from "../types/cartType";

export const useAddToCart = (
    item: CartItem,
    hasVariationsSizes?:boolean,
) => {
    const t = useTranslations('homePage.toast')
    const { cart, addToCart, removeFromCart, updateQuantity } = useCartContext();
    const [exists, setExists] = useState(false);
    const [quantity, setquantity] = useState(1);

    // if hasVariationsSizes is false this mean there is no varients in product so pick the product itemsLeft
    const left = (hasVariationsSizes ? item?.selectedSize?.quantity : item?.itemsLeft) ?? 1;
    const [itemsLeft, setItemsLeft] = useState(left)

    // update exists and quantity at any render of cart or item 
    useEffect(() => {
        // i check the color and size cuz the user could want to add to cart same product,but with another color and size 
        const existsItem =
          item &&
          cart.find(
            (i) =>
              i.id === item.id &&
              i.selectedVariant.color == item.selectedVariant.color &&
              i.selectedSize?.size == item.selectedSize?.size
          );

        setExists(!!existsItem);
        setquantity(existsItem?.quantity || 1);
        setItemsLeft(left)
    }, [cart, item]);


    /**
     * do prefrom add or remove from cart
     *  
     */
    const perform = async (add = true) => {
      if (!item) throw new Error("Missing product or variant");

      await new Promise((r) => setTimeout(r, 1000)); // TODO: Implement logic to validate

      if (add) addToCart({ ...item });
      else removeFromCart(item);

      setExists(add);
    };

    /**
     * prefrom quanity update
     *  
     */
    const performQyt = async (val: number) => {
      if (!item?.id) throw new Error("No item with this id");

      await new Promise((r) => setTimeout(r, 400)); // TODO: Implement logic to validate

      setquantity(val);
      updateQuantity(item, val);
    }

    /**
     * Toggel Add and remove from cart with toast message
     */
    const toggleCart = (add = true) => {
        toast.promise(perform(add), {
            loading: add ? `${t('addingTo', { e: t('cart') })}...` : `${t('removingFrom', { e: t('cart') })}...`,
            success: add ? `${t('addedTo', { e: t('cart') })}` : `${t('removedFrom', { e: t('cart') })}`,
            error: "Cart update failed.",
        });
    };

    /**
     *  Update quantity with toast message 
     */
    const updateQty = (val: number) => {
        if (val <= 0) return toggleCart(false); // dont call toast if item got removed

        // if value more thatn itemsLeft setQuanity to itemsLeft
        if (val > itemsLeft) {
            setquantity(itemsLeft);
            return toast.error(t('maxItemsAllowed', { count: itemsLeft }))
        }

        const inc = val > quantity
        const promis = performQyt(val)
        toast.promise(promis, {
            loading: inc ? `${t('incingQyt')}...` : `${t('decingQyt')}...`,
            success: inc ? `${t('qytInced')}` : `${t('qytDeced')}`,
            error: "Cart update failed.",
        });
        return promis
    };


    return {
      toggleCart,
      updateQty,
      perform,
      performQyt,
      exists,
      quantity,
      itemsLeft,
      cart,
    };
};
