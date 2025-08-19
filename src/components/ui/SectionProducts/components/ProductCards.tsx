"use client";
import { productType } from "@/entities/Product/types/productType";
import ProductCard from "@/entities/Product/components/ProductCard";
import EmblaCarousel from "../../EmblaCarousel";
import { useFlashSalesContext } from "@/features/FlashSalses/context/FlashSalesContext";
import EmptyState from "../../EmptyState";
import Cart1Icon from "@/assets/icons/Cart1";
import { useTranslations } from "next-intl";

type ProductCardsProps = {
  data?: productType[];
  rows?: number;
  emptyState?: {
    icon?: any;
    title?: string;
    description?: string;
  };
  btnsClassname?: string;
};

const ProductCards: React.FC<ProductCardsProps> = ({
  btnsClassname,
  emptyState,
  data,
  rows,
}) => {
  // Not all sections use the FlashSalesProvider,
  // so this context might not always be available.
  //
  // If we try to use it outside the provider, it throws an error.
  // The try-catch prevents the app from crashing in those cases.
  let flashEnd;
  try {
    const context = useFlashSalesContext();
    ({ flashEnd } = context);
  } catch (e) {
    // Optional: set defaults or log error
    flashEnd = null;
  }

  // Empty state
  const t = useTranslations("emptyState");
  if (!data || data.length === 0) {
    return (
      <div className="p-5">
        <EmptyState
          title={emptyState?.title || t("global.title")}
          description={emptyState?.description || t("global.desc")}
          icon={emptyState?.icon || <Cart1Icon className="w-14 h-14" />}
        />
      </div>
    );
  }

  return (
    <EmblaCarousel
      btnClassName={btnsClassname}
      className={`p-5 -m-5 overflow-x-hidden`}
      moreOneRow={!!(rows && rows > 1)}
    >
      <div
        style={{
          display: rows && rows > 1 ? "grid" : "flex",
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
        className={`
                    grid-flow-col
                    auto-cols-auto 
                    gap-[30px] touch-pan-y touch-pinch-zoom `}
      >
        {data?.map((props, i) => (
          <ProductCard
            key={i}
            product={{ ...props }}
            className={flashEnd ? "sale-ended " : ""}
          />
        )) ?? null}
      </div>
    </EmblaCarousel>
  );
};
export default ProductCards;
