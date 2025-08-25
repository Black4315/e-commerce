import ColorsSelection from "@/entities/Product/components/ColorsSelection";
import SizesSelection from "@/entities/Product/components/SizesSelection";
import { useProductContext } from "@/entities/Product/contexts/ProductContext";
import { useProductSelection } from "@/entities/Product/contexts/ProductSelectionContext";
import { useTranslations } from "next-intl";

const SizesColors = () => {
  const { title, description, soldNumber } = useProductContext();
  const {
    setSelectedSize,
    sizes,
    selectedSize,
    selectedVariant,
    skusWithColors,
    colors,
    setSelectedSku,
    selectedSku,
  } = useProductSelection();
  const t = useTranslations("homePage.product");
    console.log(selectedVariant);

  return (
    <div className="my-6 space-y-6">
      <div className="flex items-center gap-6">
        <h3 className="reg-text md:text-xl text-lg">{t("colors")}:</h3>

        {colors.length ? (
          <ColorsSelection
            skusWithColors={skusWithColors}
            sku={selectedSku}
            setSku={setSelectedSku}
          />
        ) : (
          <i className="med-text italic text-inactive">{t("nocolors")}</i>
        )}
      </div>

      <div className="flex items-center gap-6">
        <h3 className="reg-text md:text-xl text-lg">{t("sizes")}:</h3>

        {sizes.length ? (
          <SizesSelection
            sizes={sizes}
            size={selectedSize}
            setSize={setSelectedSize}
          />
        ) : (
          <i className="med-text italic text-inactive">{t("nosizes")}</i>
        )}
      </div>
    </div>
  );
};

export default SizesColors;
