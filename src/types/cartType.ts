
export interface CartItem {
    userId: number | null | string | undefined;
    canSaveForLater?: boolean;
    sync?: boolean;
    persistent?: boolean;
    id: number;
    title: string;
    sku: string;
    size?: string | null;
    colorName: string | null;
    color: string | null;
    price: number;
    originalPrice: number;
    discountPercent: number;
    currency:string;
    quantity: number;
    image: string;
    inStock: boolean;
};