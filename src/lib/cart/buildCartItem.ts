import { productType, Size, Variant } from "@/types/productType";
import { User } from "@/types/userType";

export function buildCartItem(
    user: User | null,
    item: productType,
    variant: Variant,
    isLoggedIn: boolean,
    size?: Size | null,
) {
    return {
        userId: user?.id,
        canSaveForLater: isLoggedIn,
        sync: isLoggedIn,
        persistent: isLoggedIn,
        id: item.id,
        title: item.title,
        sku: variant.sku,
        size: size?.size,
        color: variant.color,
        price: variant.price,
        originalPrice: variant.originalPrice,
        discountPercent: item.discountPercent,
        currency: variant.currency,
        image: variant.images[0]?.url ?? "",
        inStock: variant.inStock,
        colorName: variant.colorName,
        quantity: 1,
    };
}