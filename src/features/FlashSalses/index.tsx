"use client";
import SectionProducts from "@/components/ui/SectionProducts/SectionProducts";
import { useFetchFlashsales } from "./hooks/useFetchFlashSales";
import { useLocale, useTranslations } from "next-intl";
import CountdownTimer from "./components/CountdownTimer";
import ErrorTimer from "./components/ErrorTimer";
import {
  FlashSalesProvider,
  useFlashSalesContext,
} from "./context/FlashSalesContext";
import LoadingTimer from "./components/LoadingTimer";

export default function FlashSales() {
  return (
    <FlashSalesProvider>
      <FlashSalesSection />
    </FlashSalesProvider>
  );
}

const FlashSalesSection = () => {
  const { flashEnd, setFlashEnd } = useFlashSalesContext();

  // translations
  const t = useTranslations("homePage");
  const locale = useLocale();

  // fetching
  const { data, isLoading, isError } = useFetchFlashsales(locale);

  const { flashSale } = data ?? {
    flashSale: { start: "", end: "", products: [], viewAll: "" },
  };

  /**
   * class back function for set flash end to true to hide the section on timer ends
   */
  const onTimerEnd = () => {
    setFlashEnd(true);
  };

  return (
    <SectionProducts
      label={t("flashSale.label")}
      heading={t("flashSale.title")}
      timerComponent={
        isError ? (
          <ErrorTimer />
        ) : !isLoading ? (
          <CountdownTimer onTimerEnd={onTimerEnd} endDate={flashSale.end} />
        ) : (
          <LoadingTimer />
        )
      }
      isLoading={isLoading}
      isError={isError}
      products={flashSale.products}
      viewAllLink={flashSale.viewAll}
    />
  );
};
