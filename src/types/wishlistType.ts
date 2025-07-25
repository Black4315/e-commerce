import { productType } from "@/components/ProductCard/types/productType";

export type WishlistItem = {
    userId?: number; // Optional, as a guest might not have a userId
} & productType;
