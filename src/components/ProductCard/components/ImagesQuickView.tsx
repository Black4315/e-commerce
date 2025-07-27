import ImageViewSlider from "@/components/ProductCard/components/imageViewSlider"
import AddToCart from "./AddToCart"

const ImagesQuickView = ({
    images,
    title,
    price,
    descountPercent,
    originalPrice,
    quickViewText
}: {
    images: string[]
    title: string
    price?: number
    descountPercent?: number
    originalPrice?: number;
    quickViewText: string;
}) => (
    <div className="h-full flex flex-col justify-between">
        <h2 className="text-xl font-bold mb-6 md:mb-8">{quickViewText}</h2>
        <ImageViewSlider images={images} alt={title} />
        <p className="mb-4 text-gray-700  mt-6 md:mt-8" >{title}</p>
        {/* <AddToCart /> */}
    </div>
)


export default ImagesQuickView