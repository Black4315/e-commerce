const ProductPrice = ({
    discountedPrice,
    originalPrice,
    discountPercent,
}: {
    discountedPrice: number;
    originalPrice: number;
    discountPercent?: number;
}) => {
    return discountPercent ? (
        <span className="flex gap-3">
            <span className="med-text text-secondary-3">
                ${discountedPrice}
            </span>
            <s className="med-text text-inactive">${originalPrice}</s>
        </span>
    ) : (
        <span className="med-text text-secondary-3">${originalPrice}</span>
    );
};

export default ProductPrice