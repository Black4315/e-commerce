"use client"
import PageBreadCrumbs from "@/components/ui/Page_BreadCrumbs";
import ProductProvider from "@/entities/Product/contexts/ProductContext";
import { ProductSelectionProvider } from "@/entities/Product/contexts/ProductSelectionContext";
import { productTypeSchema } from "@/entities/Product/types/productType";
import useFetchApi from "@/lib/fectchApi";
import React from "react";
import ProductContent from "./components/ProductContent";
import { useTranslations } from "next-intl";

const Product = ({
  params,
}: {
  params: Promise<{ locale: string; handle: string }>;
}) => {
  const { locale, handle } = React.use(params);
  const t = useTranslations("breadCrumbs");
  // fetch product
  const {
    data: product,
    isLoading,
    isError,
  } = useFetchApi(
    [handle],
    `/api/products/${handle}`,
    locale,
    productTypeSchema
  );

  if ( isLoading ){
    return <div>Loading...</div>
  }
  
  if (isError || !product) {
    return <div>Error loading product</div>;
  }

  return (
    <ProductProvider product={product}>
      <ProductSelectionProvider
        variants={product.variants}
        defaultVariantIndex={product.defaultVariantIndex}
      >
        <PageBreadCrumbs
          breadcrumbsData={[
            { label: t("home"), link: "/" },
            {
              label: product.category,
              link: "/category/" + product?.category.toLocaleLowerCase(),
            },
            { label: product.title },
          ]}
        >
          <ProductContent />
        </PageBreadCrumbs>
      </ProductSelectionProvider>
    </ProductProvider>
  );
};

export default Product;
