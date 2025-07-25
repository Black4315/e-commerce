export type WishlistItem = {
    userId?: number; // Optional, as a guest might not have a userId
    id: number;
    name: string;
    price: number;
    image: string;
    originalPrice: number;
    currency: string;
    discountPercent: number;
    inStock: boolean;
    rating: number;
    reviewsCount: number;
    colors?: string[];
    sizes?: string[];
    isNew: boolean;
};