"use client";
import { productType } from "@/components/ProductCard/types/productType";
import ProductCard from "@/components/ProductCard";
import EmblaCarousel, { EmblaCarouselHandle } from "../../ui/EmblaCarousel";
import { useFlashSalesContext } from "@/features/FlashSalses/context/FlashSalesContext";

type ProductCardsProps = {
    data?: productType[];
    rows?: number;
}

const ProductCards: React.FC<ProductCardsProps> = ({ data,rows }) => {

    // Not all sections use the FlashSalesProvider,
    // so this context might not always be available.
    //
    // If we try to use it outside the provider, it throws an error.
    // The try-catch prevents the app from crashing in those cases.
    let flashEnd;
    try {
        const context = useFlashSalesContext(); 
        ({ flashEnd } = context);  
    } catch (e) {
        // Optional: set defaults or log error
        flashEnd = null;
    }

    return (
        <EmblaCarousel className={`p-5 -m-5 overflow-x-hidden`}>
            <div className={`
            ${rows && rows > 1 ? `grid grid-rows-${rows}`:'flex'} 
            grid-flow-col 
            auto-cols-auto 
            gap-[30px] touch-pan-y touch-pinch-zoom `}>
                {data?.map((props) => (
                    <ProductCard key={props.id} {...props} className={flashEnd ? 'sale-ended':''} />
                )) ?? null}
            </div>
        </EmblaCarousel>
    )
};
export default ProductCards;
