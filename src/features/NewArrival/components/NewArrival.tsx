"use client";
import { useLocale, useTranslations } from "next-intl";
import { type NewArrival } from "../types";
import { UseQueryResult } from "@tanstack/react-query";
import LoadingNewArrival from "./LoadingNewArrival";
import ErrorNewArrival from "./ErrorNewArrival";
import Section from "@/components/ui/Section";
import BentoGridItems from "./BentoGrid";
import { useFetchNewArrival } from "../hooks/useFetchNewArrival";

const NewArrival = () => {
  // translations
  const t = useTranslations("homePage.newArrival");
  const locale = useLocale();

  // fetching
  const { data, isLoading, isError, refetch } = useFetchNewArrival(
    locale
  ) as UseQueryResult<NewArrival, Error>;

  // if (isLoading) return <LoadingNewArrival />;
  // if (isError || !data || !data.NewArrival) return <ErrorNewArrival refetch={refetch} />;

  const NewArrival = data && data.NewArrival;
  return (
    <Section
      isbtns={false}
      label={t("label")}
      heading={t("title")}
      className="border-none"
    >
      {isError ? (
        <ErrorNewArrival refetch={refetch} />
      ) : isLoading ? (
        <LoadingNewArrival />
      ) : (
        <BentoGridItems NewArrival={NewArrival} />
      )}
    </Section>
  );
};

export default NewArrival;
