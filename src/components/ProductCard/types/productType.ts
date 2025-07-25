export type productType = {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    originalPrice: number;
    price: number;
    currency: string;
    discountPercent: number;
    inStock: boolean;
    rating: number;
    reviewsCount: number;
    colors?: string[];
    sizes?: string[];
    isNew: boolean;
};
