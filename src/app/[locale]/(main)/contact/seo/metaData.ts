import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SITE_NAME } from "@/constants";

const baseUrl = process.env.SITE_URL as string;

export async function generateMetadataContact({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "seo.contact" });

  return {
    title: t("title"),
    description: t("description", { site: SITE_NAME }),
    openGraph: {
      title: t("title", { site: SITE_NAME }),
      description: t("description", { site: SITE_NAME }),
      url: `${baseUrl}/${locale}/contact`,
      siteName: SITE_NAME,
      images: [
        {
          url: `${baseUrl}/assets/images/ogimage.jpg`,
          width: 1200,
          height: 630,
          alt: t("ogAlt", { site: SITE_NAME }),
        },
      ],
      locale: locale === "ar" ? "ar_AR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title", { site: SITE_NAME }),
      description: t("twitterDescription", { site: SITE_NAME }),
      images: [`${baseUrl}/assets/images/ogimage.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/contact`,
      languages: {
        en: `${baseUrl}/en/contact`,
        ar: `${baseUrl}/ar/contact`,
      },
    },
  };
}
