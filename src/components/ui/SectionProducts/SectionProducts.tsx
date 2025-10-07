"use client";
import ProductCards from "./components/ProductCards";
import { productType } from "@/entities/Product/types/productType";
import SkeltonProductCard from "./components/SkeltonProductCards";
import ErrorProducts from "./components/ErrorProducts";

import Section from "../Section";
import { useTranslations } from "next-intl";
import ProgLink from "@/utils/ProgLink";

type SectionProductsProps = {
  children?: React.ReactNode;
  className?: string;
  label?: string | React.ReactNode;
  heading?: string;
  viewAllLink?: string;
  timerComponent?: React.ReactNode;
  isLoading: boolean;
  isError: boolean;
  products: productType[];
  rows?: number;
} & React.ComponentProps<"section">;

const SectionProducts: React.FC<SectionProductsProps> = ({
  children,
  className,
  label,
  heading,
  viewAllLink,
  timerComponent,
  isLoading,
  isError,
  products,
  rows,
  ...props
}) => {
  const t = useTranslations("homePage.product");

  return (
    <Section
      {...{
        className,
        label,
        heading,
        timerComponent,
        ...props,
      }}
      isbtns={true}
    >
      {/* products slider */}
      {isError ? (
        <ErrorProducts rows={rows} />
      ) : isLoading ? (
        <SkeltonProductCard rows={rows} />
      ) : (
        <>
          <ProductCards data={products} rows={rows} />
          {viewAllLink && products.length ? (
            <div className="flex-center">
              <ProgLink
                href={viewAllLink}
                className="w-48 md:w-56 aspect-[4.6] med-text flex-center hover:bg-hover-button-2 transition-all bg-secondary-3 text-text-1 rounded"
              >
                {t("viewAll")}
              </ProgLink>
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </Section>
  );
};

export default SectionProducts;
