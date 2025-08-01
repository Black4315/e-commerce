import { formatReviewCount } from "@/utils";
import { useOptionalProductContext } from "../context/ProductContext";
import StarRating from "./StarRating";

const ProductRating = (props:{rating?:number; reviewsCount?:number}) => {
    const {
        rating,
        reviewsCount,
    } = useOptionalProductContext()! || props

    return (
        <div className="flex gap-3">
            <StarRating rating={rating} />
            <span className="semi-text text-inactive text-sm">({formatReviewCount(reviewsCount)})</span>
        </div>
    )
};

export default ProductRating