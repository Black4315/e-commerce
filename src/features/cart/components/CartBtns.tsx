"use client";
import Button2 from "@/components/ui/Button2";
import { pages } from "@/constants/pages";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const UpdateCartBtn = () => {
  const t = useTranslations("cartPage");
  return (
    <div className="flex justify-between items-center w-full max-sm:flex-col mt-6 gap-6">
      <Link href={pages.ourProducts}>
        <Button2>{t("returnToShopBtn")}</Button2>
      </Link>

      <Button2>{t("updateCartBtn")}</Button2>
    </div>
  );
};

export default UpdateCartBtn;
