import { useWishlistToggle } from "@/features/wishlist/hooks/useWishlistToggle";
import { CartItem } from "../types/cartType";
import { useAddToCart } from "./useAddtoCart";

export const useCartItemLogic = (item: CartItem) => {
  const {
    selectedVariant: { sizes },
  } = item;
  const hasVariationsSizes = !!(sizes.length > 1);

  const {
    updateQty,
    itemsLeft: maxQyt,
    perform,
  } = useAddToCart(item, hasVariationsSizes);
  const { toggleWishlist } = useWishlistToggle(item);

  const handleUpdateQty = (newQuantity: number) => updateQty(newQuantity);
  const handleToggleWishlist = async () => {
    await toggleWishlist();
    perform(false);
  };

  return {
    handleUpdateQty,
    handleToggleWishlist,
    maxQyt,
    quantity: item.quantity,
  };
};
