// page.tsx (ProductPage - App Router)

import { getProduct } from "./services/getProduct";
import Product from "./components/Product";
import { headers } from "next/headers";
import { isMobileUserAgent } from "@/utils/mobileCheck";
import { generateProductMetadata } from "./seo/generateProductMetadata";
import { generateProductSchema } from "./seo/generateProductSchema";

export const generateMetadata = generateProductMetadata;

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    locale: string;
    handle: string;
  }>;
}) {
  const { locale, handle } = await params;

  const userAgent = (await headers()).get("user-agent") || "";
  const isMobile = isMobileUserAgent(userAgent);

  const product = await getProduct(locale, handle);
  const structuredData = generateProductSchema(product, locale);

  return (
    <>
      <Product product={product} isMobile={isMobile} />

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
