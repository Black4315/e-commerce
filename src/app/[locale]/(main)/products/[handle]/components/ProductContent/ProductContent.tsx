// "use client";
// import JustForU from "@/entities/justForU";
// import ImageView from "./ImageView";
// import ProductBody from "./ProductBody";
// import { useTranslations } from "next-intl";
// import { useMobileCheck } from "@/contexts/MobileCheckContext";
// import ShippingInfoBadges from "./ShippingInfoBadges";
// import ProductAboutItem from "@/entities/Product/components/ProductAboutItem";
// import { ProductCardBadges } from "@/entities/Product/components/ProductCard/components/ProductCardBadges";
// import ProductDetails from "@/entities/Product/components/ProductDetails";
// import ProductDescriptionSec from "@/entities/Product/components/ProductDescriptionSec";

// const ProductContent = () => {
//   const t = useTranslations("homePage");
//   const isMobile = useMobileCheck();
//   return (
//     <section className="space-y-12 md:space-y-20">
//       <div
//         className={`grid gap-5 *:not-[.no-border]:border-b *:not-[.no-border]:border-border *:pb-5 ${
//           isMobile
//             ? "grid-cols-1"
//             : "grid-cols-1 md:grid-cols-[minmax(0,1.12fr)_1fr]"
//         }`}
//       >
//         <div className={`${!isMobile ? "col-span-1 no-border" : "no-border"}`}>
//           <ImageView />
//           <ProductCardBadges className="relative top-0 mt-4 flex-row items-center flex-wrap" />
//         </div>

//         <div
//           className={`${
//             !isMobile && "md:col-span-1 md:row-span-4"
//           } h-fit no-border`}
//         >
//           <ProductBody />
//         </div>

//         <ProductAboutItem className="no-border" />

//         <div className={`${!isMobile && "md:col-span-2 border-t pt-5"}`}>
//           <JustForU
//             queryKeys={["related-items"]}
//             heading={t("relatedItems")}
//             category="any"
//             brand="any"
//           />
//         </div>

//         <ProductDetails className={`${!isMobile && "md:col-span-2"}`} />
//         <ProductDescriptionSec
//           className={`${!isMobile && "md:col-span-2"} no-border `}
//         />
//       </div>
//     </section>
//   );
// };

// export default ProductContent;

"use client";
import { useMobileCheck } from "@/contexts/MobileCheckContext";
import ProductMedia from "./ProductMedia";
import ProductInfo from "./ProductInfo";
import ProductExtras from "./ProductExtras";
import ProductRelated from "./ProductRelated";

const ProductContent = () => {
  const isMobile = useMobileCheck();

  return (
    <section className="space-y-12 md:space-y-20">
      <div
        className={`grid gap-5 *:not-[.no-border]:border-t *:not-[.no-border]:border-border *:not-[.no-border]:pt-5 ${
          isMobile
            ? "grid-cols-1"
            : "grid-cols-1 md:grid-cols-[minmax(0,1.12fr)_1fr]"
        }`}
      >
        <ProductMedia isMobile={isMobile} />
        <ProductInfo isMobile={isMobile} />
        <ProductRelated isMobile={isMobile} />
        <ProductExtras isMobile={isMobile} />
      </div>
    </section>
  );
};

export default ProductContent;