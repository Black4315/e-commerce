"use client";

import Price from "@/entities/Product/components/Price";
import Button2 from "@/components/ui/Button2";
import { pages } from "@/constants/pages";
import { currencyOfPrice } from "@/utils";
import { useTranslations } from "next-intl";

import React from "react";
import ProgLink from "@/utils/ProgLink";

const TotalCheckout = ({
  subTotal,
  total,
  shipping,
  currency,
  taxes,
}: {
  subTotal: number;
  total: number;
  shipping: number;
  taxes: number;
  currency: string;
}) => {
  const t = useTranslations("cartPage");

  const totals = [
    { label: t("subTotal"), value: subTotal },
    { label: t("shipping"), value: shipping },
    { label: t("taxes"), value: taxes },
    { label: t("total"), value: total },
  ];
  return (
    <div className="px-4 md:px-6 py-6 md:py-8 text-black border-1 rounded max-md:w-full lg:w-110 shrink-1">
      <h3 className="med-text text-lg md:text-xl mb-4 md:mb-6">
        {t("cartTotal")}
      </h3>

      <ul className="flex flex-col gap-3 md:gap-4 ">
        {totals.map(({ label, value }, i) => (
          <li
            key={i}
            className="reg-text w-full flex justify-between items-center not-last:border-b border-inactive pb-3 md:pb-4 capitalize"
          >
            <span>{label}:</span>
            <span>
              <Price currency={currency} price={value} />
            </span>
          </li>
        ))}
      </ul>

      <ProgLink href={pages.checkout} className="mt-2 md:mt-4">
        <Button2
          type="submit"
          className="text-text-1 bg-secondary-3 border-none hover:bg-hover-button-2 mx-auto"
        >
          {t("proceedCheck")}
        </Button2>
      </ProgLink>
    </div>
  );
};

export default TotalCheckout;
