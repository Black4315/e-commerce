import ImageViewSlider from "@/components/shared/QuickView/components/imageViewSlider";
import QuickViewIcon from "@/assets/icons/QuickView";
import {
  ProductSelectionContextType,
  productType,
} from "@/entities/Product/types/productType";
import { useMobileCheck } from "@/contexts/MobileCheckContext";
import { useTranslations } from "next-intl";
import QuickViewBody from "./components/QuickviewBody";
import { useProductSelection } from "@/entities/Product/contexts/ProductSelectionContext";

export type QuickViewProps = {
  productInfo: {
    product: productType;
    itemSelection: ProductSelectionContextType;
  };
};

const QuickView = () => {
  const productSelection = useProductSelection();

  const { images } = productSelection.selectedVariant;
  const isMobile = useMobileCheck();
  const t = useTranslations("homePage");
  return (
    <div className="h-full flex flex-col items-center ">
      {/* text head */}
      <h2 className="semi-heading tracking-normal mb-4 md:mb-6 font-inter gap-2 flex-center">
        <QuickViewIcon />
        <span>{t("quickView")}</span>
      </h2>

      <div
        className={`flex gap-4 md:gap-6 max-lg:h-full ${
          isMobile
            ? "w-full flex-col "
            : "max-md:w-full max-lg:max-w-158 max-lg:flex-col"
        }`}
      >
        <ImageViewSlider images={images} />
        <QuickViewBody />
      </div>
    </div>
  );
};

export default QuickView;
