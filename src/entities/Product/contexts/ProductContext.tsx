"use client";

import { createContext, useContext } from "react";
import { productType } from "../types/productType";

export const ProductContext = createContext<productType | undefined>(undefined);

export const useProductContext = () => {
  const ctx = useContext(ProductContext);
  if (ctx == undefined)
    throw new Error("useProductContext must used in ProductProvider");
  return ctx;
};

const ProductProvider = ({
  children,
  product,
}: {
  children: React.ReactNode;
  product: productType;
}) => {
  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
