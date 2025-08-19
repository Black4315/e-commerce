/**
 * old one
 */
// export type productTypeOld = {
//     id: number;
//     title: string;
//     description: string;
//     image: string;
//     images: string[];
//     category: string;
//     originalPrice: number;
//     price: number;
//     currency: string;
//     discountPercent: number;
//     inStock: boolean;
//     rating: number;
//     reviewsCount: number;
//     colors?: string[];
//     sizes?: string[];
//     isNew: boolean;
// };
import { z } from "zod";


export interface ProductSelectionContextType {
    variants: Variant[];
    colors: string[];
    sizes: Size[];
    selectedColor: string;
    setSelectedColor: (color: string) => void;
    selectedSize: Size ;
    setSelectedSize: (size: Size) => void;
    selectedVariant: Variant;
    selectedSizeQuantity: number | undefined;
    resetSelection: () => void;
    hasVariationsSizes: boolean;
}

export const productImageSchema = z.object({
    url: z.string(), //.url(),
    alt: z.string()
});

export const sizeSchema = z.object({
    size: z.string(),
    quantity: z.number()
});

export const variantSchema = z.object({
    sku: z.string(),
    colorName: z.string(),
    color: z.string(),
    sizes: z.array(sizeSchema),
    price: z.number(),
    originalPrice: z.number(),
    currency: z.string(),
    images: z.array(productImageSchema),
    quantityAvailable: z.number(),
    inStock: z.boolean()
});

export const productTypeSchema = z.object({
    flash: z.boolean().optional(),
    start: z.union([z.string(), z.date()]).optional(),
    end: z.union([z.string(), z.date()]).optional(),
    id: z.number(),
    title: z.string(),
    handle: z.string(),
    description: z.string(),
    vendor: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    hasVariations: z.boolean(),
    defaultVariantIndex: z.number(),
    variants: z.array(variantSchema),
    quantityAvailable: z.number().optional(),
    itemsLeft: z.number(),
    initialItems: z.number(),
    isNew: z.boolean(),
    discountPercent: z.number(),
    rating: z.number(),
    reviewsCount: z.number(),
    soldNumber: z.number(),
    taxes: z.number(),
    weight: z.string(),
    material: z.string(),
    dimensions: z.string()
});

export type Size = z.infer<typeof sizeSchema>
export type Variant = z.infer<typeof variantSchema>
export type ProductImage = z.infer<typeof productImageSchema>
export type productType = z.infer<typeof productTypeSchema>
export const noSize = (variant:Variant) => ({
  size: "",
  quantity: variant.quantityAvailable,
});



