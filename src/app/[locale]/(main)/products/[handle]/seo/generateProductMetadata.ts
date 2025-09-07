import { getProduct } from "../services/getProduct";
import { SITE_NAME } from "@/constants";
import { Metadata } from "next";

const siteName = SITE_NAME;
const baseUrl = process.env.SITE_URL as string;

export async function generateProductMetadata({
  params,
}: {
  params: Promise<{ locale: string; handle: string }>;
}): Promise<Metadata> {
  const { locale, handle } = await params;
  const product = await getProduct(locale, handle);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "Sorry, this product could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const image =
    product.variants?.[product.defaultVariantIndex]?.images?.[0]?.url ||
    `${baseUrl}/assets/images/defaultProduct.jpg`;

  return {
    title: product.title,
    description: product.description || `Buy ${product.title} online.`,
    openGraph: {
      title: product.title,
      description: product.description || `Check out ${product.title}`,
      url: `${baseUrl}/${locale}/products/${handle}`,
      siteName: siteName,
      images: [
        {
          url: image,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
      locale,
      type: "website", // required to match Next.js types
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description || `Check out ${product.title}`,
      images: [image],
    },
  };
}
