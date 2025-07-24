'use client';

import Section from "@/components/Section";
import CategorySlider from "./components/CategorySlider";
import { useCallback, useState } from "react";
import { EmblaCarouselHandle } from "@/components/ui/EmblaCarousel";
import { useTranslations } from "next-intl";


const BrowseByCategory = () => {
  const t = useTranslations('homePage.browseByCategory')

  return (
    <Section
      label={t('label')}
      heading={t('title')}
      isbtns={true}
    >
      <CategorySlider />
    </Section>
  )
}

export default BrowseByCategory