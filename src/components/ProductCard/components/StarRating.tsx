import StarIcon from "@/assets/icons/StarIcon";

const StarRating = ({ rating }: {rating:number}) => {
    const getFill = (index: number) => {
        if (rating >= index + 1) return '#FFAD33';
        if (rating > index && rating < index + 1) return 'url(#half-star)';
        return '#808080';
    };

    const stars = Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} fillColor={getFill(index)} className="w-4.5 h-5" />
    ));

    return <div className="flex space-x-1">{stars}</div>;
};

export default StarRating