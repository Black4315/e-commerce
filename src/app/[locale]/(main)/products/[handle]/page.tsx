import { getProduct } from "./services/getProduct";
import Product from "./components/Product";
import { headers } from "next/headers";
import { isMobileUserAgent } from "@/utils/mobileCheck";

export default async function ProductPage({
  params,
}: {
  params: { locale: string; handle: string };
}) {
  const { locale, handle } = await params;

  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = isMobileUserAgent(userAgent);

  // server-side fetch
  const product = await getProduct(locale, handle);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError || !product) {
  //   return <div>Error loading product</div>;
  // }
  //TODO:SEO For This Page
  return <Product product={product} isMobile={isMobile} />;
};
