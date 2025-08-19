import { formatCount } from "@/utils";
import StarRating from "../../../components/ui/StarRating";
import { useProductContext } from "@/entities/Product/contexts/ProductContext";

const ProductRating = () => {
  const { rating, reviewsCount } = useProductContext();

  return (
    <div className="flex gap-2 items-center">
      <StarRating rating={rating} />
      <span className="semi-text text-inactive text-sm">
        ({formatCount(reviewsCount)})
      </span>
    </div>
  );
};

export default ProductRating;
