"use client";
import Button2 from "@/components/ui/Button2";
import { pages } from "@/constants/pages";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const UpdateCartBtn = () => {
  const t = useTranslations("cartPage");
  return (
    <div className="flex justify-between items-center w-full mt-4 md:mt-6 gap-4 md:gap-6">
      <Link href={pages.shop}>
        <Button2 className="max-xsm:px-4">{t("returnToShopBtn")}</Button2>
      </Link>

      <Button2 className="max-xsm:px-4">{t("updateCartBtn")}</Button2>
    </div>
  );
};

export default UpdateCartBtn;
