import { createContext, useContext, useState, ReactNode } from "react";
import { ProductSelectionContextType, Size, Variant } from "@/types/productType";


const ProductSelectionContext = createContext<ProductSelectionContextType | undefined>(undefined);

export const ProductSelectionProvider = ({
    defaultVariantIndex,
    variants,
    children,
}: {
    defaultVariantIndex: number;
    variants: Variant[];
    children: ReactNode;
}) => {
    /// some times the product has no varients like coffe machine 
    // doesnt have sizes or colors so we need to ensure that
    const defaultVariant = variants?.[defaultVariantIndex];
    const defaultSizes = defaultVariant.sizes

    const halfIndex = defaultSizes ? Math.floor(defaultSizes.length / 2) : 0;
    const defaultColor = defaultVariant?.color ?? null;
    const defaultSize = defaultSizes.length > 0 ? defaultVariant.sizes[halfIndex] : null;

    const [selectedColor, setSelectedColor] = useState<string | null>(defaultColor);
    const [selectedSize, setSelectedSize] = useState<Size | null>(defaultSize);

    const selectedVariant = variants.find((v) => v.color === selectedColor) || defaultVariant;
    const selectedSizeQuantity = selectedVariant?.sizes.find((s) => s.size === selectedSize?.size)?.quantity;

    const resetSelection = () => {
        setSelectedColor(defaultColor);
        setSelectedSize(defaultSize);
    };

    const colors: string[] = variants
      .filter((v) => v.color !== null)
      .map((v) => v.color !== null ? v.color : '');
    const sizes: Size[] = variants.flatMap(v => v.sizes);

    const hasVariationsSizes = !!(defaultSizes.length > 1)
    return (
        <ProductSelectionContext.Provider
            value={{
                variants,
                selectedColor,
                setSelectedColor,
                selectedSize,
                setSelectedSize,
                selectedVariant,
                selectedSizeQuantity,
                resetSelection,
                colors,
                sizes,
                hasVariationsSizes
            }}
        >
            {children}
        </ProductSelectionContext.Provider>
    );
};

export const useProductSelection = () => {
    const ctx = useContext(ProductSelectionContext);
    if (!ctx) throw new Error("useProductSelection must be used within a ProductSelectionProvider");
    return ctx;
};
