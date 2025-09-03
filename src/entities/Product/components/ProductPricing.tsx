"use client";

import { useProductContext } from "@/entities/Product/contexts/ProductContext";
import { useProductSelection } from "@/entities/Product/contexts/ProductSelectionContext";
import { currencyOfPrice } from "@/utils";
import { useTranslations } from "next-intl";
import Price from "./Price";
import { FlashWrapperPricing } from "./FlashWrapperPricing";

const ProductPricing = () => {
  //contexts
  const product = useProductContext();
  const productSelection = useProductSelection();

  const { discountPercent, taxes, flash, end } = product;
  const { currency, price, originalPrice } = productSelection.selectedVariant;

  const t = useTranslations("homePage.product");
  return (
    <>
      {flash ? (
        <FlashWrapperPricing end={end}>
          <Pricing
            {...{
              discountPercent,
              price,
              currency,
              originalPrice,
            }}
          />
        </FlashWrapperPricing>
      ) : (
        <Pricing
          {...{
            discountPercent,
            price,
            currency,
            originalPrice,
          }}
        />
      )}
      <p className=" text-inactive text-xs">
        {t("taxes")}: <Price currency={currency} price={taxes.toFixed(2)} />
      </p>
    </>
  );
};

export default ProductPricing;

export const Pricing = ({
  discountPercent,
  price,
  currency,
  originalPrice,
}: {
  discountPercent: number;
  price: number;
  currency: string;
  originalPrice: number;
}) =>
  discountPercent ? (
    <h1 className="heading font-bold leading-10 mt-auto md:text-3xl tracking-normal flex items-center gap-2">
      <Price currency={currency} price={price.toFixed(2)} />
      <s className="med-text md:text-xl text-inactive">
        {" "}
        {currencyOfPrice(currency)}
        {originalPrice}
      </s>
    </h1>
  ) : (
    <h1 className="heading font-bold leading-10 mt-auto md:text-3xl tracking-normal">
      <Price currency={currency} price={price.toFixed(2)} />
    </h1>
  );
