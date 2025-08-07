import { useProductContext } from "@/contexts/product/ProductContext";
import { useProductSelection } from "@/contexts/product/ProductSelectionContext";

const ProductCardPrice = () => {
    const { discountPercent } = useProductContext()
    const productSelection = useProductSelection()

    const { price, originalPrice } = productSelection.selectedVariant;

    return discountPercent ? (
        <span className="flex gap-3">
            <span className="med-text text-secondary-3">
                ${price}
            </span>
            <s className="med-text text-inactive">${originalPrice}</s>
        </span>
    ) : (
        <span className="med-text text-secondary-3">${originalPrice}</span>
    );
};

export default ProductCardPrice