
export interface CartItem {
    id: number;  // Reference to the product
    title: string;  // Title of the product
    description: string;  // Short description of the product
    price: number;  // The price after applying discounts
    discountPercent: number;  // Discount percentage
    originalPrice?: number;  // Optional original price (if showing a discount)
    quantity: number;  // Quantity added to the cart
    image: string;  // Product image URL
    category: string;  // Product category
    isNew: boolean;  // Whether the product is new
    currency: string;  // Currency (USD, EUR, etc.)
    sizes?: string[];  // Available sizes, if any
    colors?: string[];  // Available colors, if any
    inStock?: boolean;  // Stock availability, optional if you want to show out-of-stock items
    rating?: number;  // Product rating, optional if you want to show ratings
    reviewsCount?: number;  // Number of reviews, optional
    userId?:number;
}