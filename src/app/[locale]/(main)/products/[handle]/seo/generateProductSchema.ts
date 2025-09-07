import { SITE_NAME } from "@/constants";
import { productType } from "@/entities/Product/types/productType";

export function generateProductSchema(product: productType, locale: string) {
  const variant = product.variants[product.defaultVariantIndex];

  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.title,
    image: [variant.images[0]?.url],
    description: product.description,
    sku: variant.sku,
    brand: {
      "@type": "Brand",
      //FIXME:add actual brand name
      name: SITE_NAME, // You could pass brand as param if needed
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: product.rating,
        // FIXME: add best rating
        bestRating: product.rating,
      },
      author: {
        "@type": "Person",
        // FIXME:add actual auther
        name: "Yahia",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewsCount,
    },
    offers: {
      "@type": "Offer",
      url: `${process.env.SITE_URL}/${locale}/products/${product.handle}`,
      priceCurrency: "USD",
      price: variant.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };
}
