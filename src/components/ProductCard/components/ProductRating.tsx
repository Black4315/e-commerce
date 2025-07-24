import StarRating from "./StarRating";

const ProductRating = ({ rating, reviewsCount }: { rating: number; reviewsCount: number }) => (
    <div className="flex gap-3">
        <StarRating rating={rating} />
        <span className="semi-text text-inactive text-sm">({reviewsCount})</span>
    </div>
);

export default ProductRating