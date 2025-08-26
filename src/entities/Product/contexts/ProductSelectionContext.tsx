"use client";
import { createContext, useContext, useState, useMemo, ReactNode, useEffect } from "react";
import {
  noSize,
  ProductSelectionContextType,
  Size,
  Variant,
} from "@/entities/Product/types/productType";

// Create context with optional type (will throw if accessed without provider)
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
  // --- Default setup (first load) ---
  const defaultVariant = variants?.[defaultVariantIndex];

  // --- States for selections ---
  const [selectedSku, setSelectedSku] = useState(defaultVariant?.sku ?? "");

  // --- Derived values (auto-update when dependencies change) ---
  const selectedVariant = useMemo(
    () => variants.find((v) => v.sku === selectedSku) ?? defaultVariant,
    [variants, selectedSku, defaultVariant]
  );
  const defaultSizes = selectedVariant?.sizes ?? [];

  // Choose middle size if available, otherwise return a "noSize" placeholder
  const defaultSize =
    defaultSizes.length > 0
      ? defaultSizes[Math.floor(defaultSizes.length / 2)]
      : noSize(selectedVariant);

  const [selectedSize, setSelectedSize] = useState<Size>(defaultSize);
  const selectedColor = selectedVariant?.color ?? "";
  const selectedSizeQuantity =
    selectedVariant?.sizes.find((s) => s.size === selectedSize?.size)
      ?.quantity ?? 0;

  // --- Lists for UI rendering ---
  const colors = useMemo(
    // Only keep truthy colors
    () => variants.map((v) => v.color).filter(Boolean),
    [variants]
  );

  const skusWithColors = useMemo(
    // Useful for mapping buttons by SKU+color
    () => variants.map((v) => ({ sku: v.sku, color: v.color ?? "" })),
    [variants]
  );

  const sizes = selectedVariant?.sizes ?? [];
  const hasVariationsSizes = defaultSizes.length > 1;

  // --- Reset helper ---
  const resetSelection = () => {
    setSelectedSku(selectedVariant?.sku ?? "");
    setSelectedSize(defaultSize);
  };

  useEffect(()=> resetSelection(), [selectedVariant]);

  // --- Provide everything to children ---
  return (
    <ProductSelectionContext.Provider
      value={{
        variants,
        selectedSku,
        setSelectedSku,
        selectedVariant,
        selectedColor,
        selectedSize,
        setSelectedSize,
        selectedSizeQuantity,
        resetSelection,
        colors,
        sizes,
        skusWithColors,
        hasVariationsSizes,
      }}
    >
      {children}
    </ProductSelectionContext.Provider>
  );
};

// Hook to safely consume context
export const useProductSelection = () => {
  const ctx = useContext(ProductSelectionContext);
  if (!ctx) {
    throw new Error(
      "useProductSelection must be used within a ProductSelectionProvider"
    );
  }
  return ctx;
};
