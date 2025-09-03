"use client";
import {
  ImageSliderBody,
  ImageSliderWrapper,
} from "@/components/ui/ImageSlider";
import React from "react";
import { useFetchSlider } from "./hooks/useFetchSlider";
import { useLocale, useTranslations } from "next-intl";
import SliderItem from "./components/SliderItem";
import { SliderItemtype } from "./types/sliderItem";
import LoadingOffers from "./components/LoadingOffers";
import ErrorOffers from "./components/ui/ErrorOffers";

const OffersSlider = () => {
  const locale = useLocale();
  const { data, isLoading, isError, refetch } = useFetchSlider(locale);

  if (isLoading) return <LoadingOffers />;
  if (isError || !data?.length) return <ErrorOffers refetch={refetch} />;

  return (
    <div className="md:ps-6 pt-4 sm:pt-6 lg:pt-10 lg:ps-10 w-full">
      <ImageSliderWrapper className="max-lg:rounded-lg max-sm:h-95 max-md:h-110 forced-colors:border rounded-xl">
        <ImageSliderBody className="my-slider max-md:!relative">
          {data &&
            data.map(({ name, image, logo, offerBody, link }) => (
              <SliderItem {...{ name, image, logo, offerBody, link }} />
            ))}
        </ImageSliderBody>
      </ImageSliderWrapper>
    </div>
  );
};

export default OffersSlider;
