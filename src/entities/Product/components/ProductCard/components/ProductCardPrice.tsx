import { useProductContext } from "@/entities/Product/contexts/ProductContext";
import { useProductSelection } from "@/entities/Product/contexts/ProductSelectionContext";
import Price from "../../Price";

const ProductCardPrice = () => {
  const { discountPercent } = useProductContext();
  const productSelection = useProductSelection();

  const { price, originalPrice, currency } = productSelection.selectedVariant;

  return discountPercent ? (
    <span className="flex gap-3">
      <span className="med-text text-secondary-3">
        <Price currency={currency} price={price} />
      </span>
      <s className="med-text text-inactive">
        <Price currency={currency} price={originalPrice} />
      </s>
    </span>
  ) : (
    <span className="med-text text-secondary-3">
      <Price currency={currency} price={originalPrice} />
    </span>
  );
};

export default ProductCardPrice;
