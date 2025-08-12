"use client";

import Button2 from "@/components/ui/Button2";
import { useHydrated } from "@/hooks/useHydrated";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";

const CouponForm = () => {
  const { hydrated } = useHydrated();
  const t = useTranslations("cartPage");
  const [code, setCode] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    // TODO: Implement logic to validate & apply coupon code
    console.log("Applying coupon:", code);
  };

  return (
    hydrated && (
      <form
        onSubmit={handleSubmit}
        method="POST"
        aria-labelledby="coupon-form"
        className="h-12 md:h-14 flex gap-4 items-center"
      >
        {/* TODO: adjust the services and use axois and send to server */}
        <input
          type="text"
          name="coupon"
          id="coupon"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder={t("coponeCode")}
          className="flex-1 w-full rounded outline px-6 h-full border border-gray-300 focus:border-secondary-3 focus:outline-none"
        />
        <Button2
          type="submit"
          className="text-text-1 bg-secondary-3 border-none hover:bg-hover-button-2"
        >
          {t("applyCopon")}
        </Button2>
      </form>
    )
  );
};

export default CouponForm;
