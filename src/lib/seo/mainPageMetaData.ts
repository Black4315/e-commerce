import { SITE_NAME } from "@/constants";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const siteName = SITE_NAME;
const baseUrl = process.env.SITE_URL as string;

export async function mainPageMetaData({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: `${siteName} | ${t("main.defaultTitle")}`,
      template: `%s | ${siteName}`,
    },
    description: t("main.description"),
    keywords: t.raw("main.keywords"), // from your locale JSON file
    openGraph: {
      type: "website",
      locale,
      url: `${baseUrl}/${locale}`,
      siteName,
      title: `${siteName} | ${t("main.defaultTitle")}`,
      description: t("main.ogDescription"),
      images: [
        {
          url: `${baseUrl}/assets/images/og-image-${locale}.jpg`,
          width: 1200,
          height: 630,
          alt: `${siteName} - ${t("main.ogAlt")}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteName} | ${t("main.defaultTitle")}`,
      description: t("main.twitterDescription"),
      images: [`${baseUrl}/assets/images/og-image-${locale}.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
  };
}
