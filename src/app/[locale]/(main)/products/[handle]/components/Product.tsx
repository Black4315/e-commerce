import PageBreadCrumbs from "@/components/ui/Page_BreadCrumbs";
import ProductProvider from "@/entities/Product/contexts/ProductContext";
import { ProductSelectionProvider } from "@/entities/Product/contexts/ProductSelectionContext";
import { productType } from "@/entities/Product/types/productType";
import ProductContent from "./ProductContent/ProductContent";
import { useTranslations } from "next-intl";
import { pages } from "@/constants/pages";

export default function Product({
  product,
  isMobile,
}: {
  product: productType;
  isMobile?: boolean;
}) {
  const t = useTranslations("breadCrumbs");
  return (
    <ProductProvider product={product}>
      <ProductSelectionProvider
        variants={product.variants}
        defaultVariantIndex={product.defaultVariantIndex}
      >
        <PageBreadCrumbs
          breadcrumbsData={[
            { label: t("home"), link: "/" },
            { label: t("shop"), link: pages.shop },
            {
              label: product.category,
              link: "/category/" + product?.category.toLocaleLowerCase(),
            },
            { label: product.title },
          ]}
          isMobile={isMobile}
        >
          <ProductContent />
        </PageBreadCrumbs>
      </ProductSelectionProvider>
    </ProductProvider>
  );
}
