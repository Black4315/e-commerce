"use client";

import { useProductContext } from "@/contexts/product/ProductContext";
import { useProductSelection } from "@/contexts/product/ProductSelectionContext";
import { currencyOfPrice } from "@/utils";
import { useTranslations } from "next-intl";
import Price from "./Price";

const ProductPricing = () => {
  //contexts
  const product = useProductContext();
  const productSelection = useProductSelection();

  const { discountPercent, taxes } = product;
  const { currency, price, originalPrice } = productSelection.selectedVariant;

  const t = useTranslations("homePage.product");
  return (
    <>
      {discountPercent ? (
        <h1 className="heading leading-10 mt-auto md:text-3xl tracking-normal flex items-center gap-2">
          <Price currency={currency} price={price.toFixed(2)} />
          <s className="med-text md:text-xl text-inactive">
            {" "}
            {currencyOfPrice(currency)}
            {originalPrice}
          </s>
        </h1>
      ) : (
        <h1 className="heading leading-10 mt-auto md:text-3xl tracking-normal">
          <Price currency={currency} price={price.toFixed(2)} />
        </h1>
      )}

      <p className=" text-inactive text-xs">
        {t("taxes")}: <Price currency={currency} price={taxes.toFixed(2)} />
      </p>
    </>
  );
};

export default ProductPricing;
