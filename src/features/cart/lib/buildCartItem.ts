import { noSize, productType, Size, Variant } from "@/types/productType";
import { User } from "@/types/userType";

export function buildCartItem(
  user: User | null,
  isLoggedIn: boolean,
  item: productType,
  variant: Variant,
  size: Size
) {
  return {
    userId: user?.id ?? null,
    canSaveForLater: isLoggedIn,
    sync: isLoggedIn,
    persistent: isLoggedIn,
    selectedVariant: variant,
    selectedSize: size ?? noSize(variant),
    quantity: 1,
    ...item,
  };
}
