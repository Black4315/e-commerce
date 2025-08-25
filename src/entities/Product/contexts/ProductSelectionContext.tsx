"use client";
import { createContext, useContext, useState, ReactNode, useRef } from "react";
import {
  noSize,
  ProductSelectionContextType,
  Size,
  Variant,
} from "@/entities/Product/types/productType";

const ProductSelectionContext = createContext<
  ProductSelectionContextType | undefined
>(undefined);

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
  const defaultSizes = defaultVariant.sizes;

  const halfIndex = defaultSizes ? Math.floor(defaultSizes.length / 2) : 0;
  const defaultSize = defaultSizes.length > 0 ? defaultVariant.sizes[halfIndex] : noSize(defaultVariant);

  const [selectedSku, setSelectedSku] = useState<string>( defaultVariant?.sku ?? "" );
  const [selectedSize, setSelectedSize] = useState<Size>(defaultSize);
  
  const selectedVariant = useRef(variants.find((v) => v.sku === selectedSku) || defaultVariant).current;
  const selectedColor = useRef(selectedVariant.color).current;
  const selectedSizeQuantity = selectedVariant?.sizes.find(
    (s) => s.size === selectedSize?.size
  )?.quantity;

  const resetSelection = () => {
    setSelectedSku(defaultVariant?.sku ?? "");
    setSelectedSize(defaultSize);
  };

  const colors: string[] = variants
    .filter((v) => v.color !== "")
    .map((v) => (v.color !== "" ? v.color : ""));
  const skusWithColors: any[] = variants.map((v) => ({ sku:v.sku, color: v.color ?? "" }));
  const sizes: Size[] = selectedVariant.sizes;

  const hasVariationsSizes = !!(defaultSizes.length > 1);
  return (
    <ProductSelectionContext.Provider
      value={{
        variants,
        selectedColor,
        selectedSize,
        setSelectedSize,
        selectedVariant,
        selectedSizeQuantity,
        resetSelection,
        colors,
        sizes,
        skusWithColors,
        selectedSku,
        setSelectedSku,
        hasVariationsSizes,
      }}
    >
      {children}
    </ProductSelectionContext.Provider>
  );
};

export const useProductSelection = () => {
  const ctx = useContext(ProductSelectionContext);
  if (!ctx)
    throw new Error(
      "useProductSelection must be used within a ProductSelectionProvider"
    );
  return ctx;
};
