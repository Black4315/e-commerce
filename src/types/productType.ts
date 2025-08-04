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


export interface ProductSelectionContextType {
    variants: Variant[];
    colors: string[];
    sizes: Size[];
    selectedColor: string | null;
    setSelectedColor: (color: string | null) => void;
    selectedSize: Size | null;
    setSelectedSize: (size: Size | null) => void;
    selectedVariant: Variant;
    selectedSizeQuantity: number | undefined;
    resetSelection: () => void;
    hasVariationsSizes:boolean;
}


export interface Size {
    size: string;
    quantity: number;
}

export interface Variant {
    sku: string;
    colorName:string| null;
    color: string;
    sizes: Size[];
    price: number;
    originalPrice: number;
    currency: string;
    images: ProductImage[];
    quantityAvailable: number;
    inStock: boolean;
}
export type ProductImage = {
    url: string;
    alt: string;
};

export type productType = {
    flash?: boolean,
    start?: string | Date,
    end?: string | Date,
    id: number;
    title: string;
    handle: string;
    description: string;
    vendor: string;
    category: string;
    tags: string[];
    hasVariations: boolean;
    defaultVariantIndex: number;
    variants: Variant[];
    quantityAvailable: number;
    itemsLeft: number;
    initialItems: number;
    isNew: boolean;
    discountPercent: number;
    rating: number;
    reviewsCount: number;
    soldNumber: number;
    taxes: number;
    weight: string;
    material: string;
    dimensions: string;
};
