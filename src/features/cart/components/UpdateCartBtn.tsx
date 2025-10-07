"use client";
import Button2 from "@/components/ui/Button2";
import { pages } from "@/constants/pages";
import ProgLink from "@/utils/ProgLink";
import { useTranslations } from "next-intl";

const UpdateCartBtn = () => {
  const t = useTranslations("cartPage");
  return (
    <div className="flex justify-between items-center w-full mt-4 md:mt-6 gap-4 md:gap-6">
      <ProgLink href={pages.shop}>
        <Button2 className="max-xsm:px-4">{t("returnToShopBtn")}</Button2>
      </ProgLink>

      <Button2 className="max-xsm:px-4">{t("updateCartBtn")}</Button2>
    </div>
  );
};

export default UpdateCartBtn;
