import { ProductCardBadges } from "@/entities/Product/components/ProductCard/components/ProductCardBadges";
import CartModalSelSize from "./CartModalSelSize";
import { useProductContext } from "@/entities/Product/contexts/ProductContext";

const CartModalBody = () => {
  const { flash } = useProductContext();
  return (
    <div className="flex flex-col items-start">
      <CartModalSelSize />
      {flash && <ProductCardBadges.limited className="md:text-sm" />}
    </div>
  );
};

export default CartModalBody;
