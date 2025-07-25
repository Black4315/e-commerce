import { productType } from "@/components/ProductCard/types/productType";

export interface CartItem extends productType{
    quantity: number;  // Quantity added to the cart
    userId?:number;
} ;