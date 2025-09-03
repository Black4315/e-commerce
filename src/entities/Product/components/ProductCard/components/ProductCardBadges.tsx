"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Badge from "./ui/Badge";
import Link from "next/link";
import { useProductContext } from "@/entities/Product/contexts/ProductContext";
import { pages } from "@/constants/pages";

export const ProductCardBadges = ({ className }: { className?: string }) => {
  const t = useTranslations("homePage.product");

  //contexts
  const item = useProductContext();

  return (
    <div
      className={cn("absolute top-4 start-4 flex flex-col gap-2", className)}
    >
      {item.discountPercent ? (
        <Badge className="">-{item.discountPercent}%</Badge>
      ) : (
        ""
      )}

      {item.isNew && (
        <Badge className="bg-button-1 text-center">{t("new")}</Badge>
      )}

      {item.flash && <ProductCardBadges.limited />}
    </div>
  );
};

ProductCardBadges.limited = ({ className }: { className?: string }) => {
  const t = useTranslations("homePage.product");

  return (
    <Link href={pages.flashSales}>
      <Badge
        className={cn(
          "bg-limited-color hover:bg-[#a80c30] transition rounded-full px-2 h-fit py-1 max-md:text-text-[10px]",
          className
        )}
      >
        {t("limitedTime")}
      </Badge>
    </Link>
  );
};
