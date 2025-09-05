// lib/seo/about.ts
import { SITE_NAME } from "@/constants";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const baseUrl = process.env.SITE_URL as string;

export async function aboutPageMetaData({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } =await params;
  const t = await getTranslations({ locale, namespace: "seo" });
  const about = t.raw("about");

  return {
    metadataBase: new URL(baseUrl),
    title: `${about.title} | ${SITE_NAME}`,
    description: about.description.replace("{{siteName}}", SITE_NAME),
    openGraph: {
      type: "website",
      locale,
      url: `${baseUrl}/${locale}/about`,
      siteName: SITE_NAME,
      title: `${about.title} | ${SITE_NAME}`,
      description: about.ogDescription.replace("{{siteName}}", SITE_NAME),
      images: [
        {
          url: `${baseUrl}/assets/images/ogimage.jpg`,
          width: 1200,
          height: 630,
          alt: about.ogAlt.replace("{{siteName}}", SITE_NAME),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${about.title} | ${SITE_NAME}`,
      description: about.twitterDescription.replace("{{siteName}}", SITE_NAME),
      images: [`${baseUrl}/assets/images/ogimage.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
      languages: {
        en: `${baseUrl}/en/about`,
        ar: `${baseUrl}/ar/about`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
