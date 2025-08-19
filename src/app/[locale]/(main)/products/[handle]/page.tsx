"use client"
import ImageViewSlider from "@/components/shared/QuickView/components/imageViewSlider";
import PageBreadCrumbs from "@/components/ui/Page_BreadCrumbs";
import ProductProvider from "@/entities/Product/contexts/ProductContext";
import { ProductSelectionProvider } from "@/entities/Product/contexts/ProductSelectionContext";
import { productTypeSchema } from "@/entities/Product/types/productType";
import useFetchApi from "@/lib/fectchApi";
import React from "react";
import ImageView from "./components/ImageView";

const Product = ({
  params,
}: {
  params: Promise<{ locale: string; handle: string }>;
}) => {
  const { locale, handle } = React.use(params);

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
            { label: "Home", link: "/" },
            {
              label: product.category,
              link: "/category/" + product?.category.toLocaleLowerCase(),
            },
            { label: product.title },
          ]}
        >
          <div className="flex max-lg:flex-col items-center justify-between"> 
            <ImageView />
          </div>
        </PageBreadCrumbs>
      </ProductSelectionProvider>
    </ProductProvider>
  );
};

export default Product;
