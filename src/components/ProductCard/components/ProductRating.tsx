import { useProductContext } from "../context/ProductContext";
import StarRating from "./StarRating";

const ProductRating = () => {
    const {
        rating,
        reviewsCount,
    } = useProductContext()

    return (
        <div className="flex gap-3">
            <StarRating rating={rating} />
            <span className="semi-text text-inactive text-sm">({reviewsCount})</span>
        </div>
    )
};

export default ProductRating