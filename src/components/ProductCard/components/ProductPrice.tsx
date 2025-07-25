const ProductPrice = ({
    price,
    originalPrice,
    discountPercent,
}: {
    price: number;
    originalPrice: number;
    discountPercent?: number;
}) => {
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

export default ProductPrice