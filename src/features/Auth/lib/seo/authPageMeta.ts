import { SITE_NAME } from "@/constants";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const baseUrl = process.env.SITE_URL as string;

export async function authPageMetaData({
  params,
  type, // "signup" | "login"
}: {
  params: Promise<{ locale: string }>;
  type: "signup" | "login";
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });
  const auth = t.raw(`auth.${type}`);

  return {
    metadataBase: new URL(baseUrl),
    title: `${auth.title} | ${SITE_NAME}`,
    description: auth.description.replace("{{siteName}}", SITE_NAME),
    openGraph: {
      type: "website",
      locale,
      url: `${baseUrl}/${locale}/auth/${type}`,
      siteName: SITE_NAME,
      title: `${auth.title} | ${SITE_NAME}`,
      description: auth.ogDescription.replace("{{siteName}}", SITE_NAME),
      images: [
        {
          url: `${baseUrl}/assets/images/ogimage_${type}.png`,
          width: 1200,
          height: 630,
          alt: auth.ogAlt.replace("{{siteName}}", SITE_NAME),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${auth.title} | ${SITE_NAME}`,
      description: auth.twitterDescription.replace("{{siteName}}", SITE_NAME),
      images: [`${baseUrl}/assets/images/ogimage_${type}.png`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/auth/${type}`,
      languages: {
        en: `${baseUrl}/en/auth/${type}`,
        ar: `${baseUrl}/ar/auth/${type}`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
