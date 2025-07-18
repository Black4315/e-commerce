"use client"
import { cn } from "@/lib/utils";
import NextPrevArrowBtn from "./components/NextPrevArrowBtn";
import ProductCards from "./components/ProductCards";
import { productType } from "./types/productType";
import SkeltonProductCard from "./components/SkeltonProductCards";
import ErrorProducts from "./components/ErrorProducts";

type SectionProductsProps = {
    children?: React.ReactNode;
    className?: string;
    prefix?: string;
    heading?: string;
    viewAllLink?: string;
    timerComponent?: React.ReactNode;
    isLoading: boolean;
    isError: boolean;
    products: productType[];
} & React.ComponentProps<'section'>;

const SectionProducts: React.FC<SectionProductsProps> = ({
    children,
    className,
    prefix,
    heading,
    viewAllLink,
    timerComponent,
    isLoading,
    isError,
    products,
    ...props
}) => {
    return (
        <section
            className={cn('flex flex-col gap-8 md:gap-15 mt-18 pb-15 border-b border-border', className)}
            {...props}
        >
            <div className="flex flex-col gap-6">

                <div className="flex gap-4 md:gap-6 items-center">
                    <div className="w-5 h-10 rounded bg-secondary-3" />
                    <span className="reg-text text-secondary-3">{prefix}</span>
                </div>

                <div className="flex lg:items-center gap-6 lg:gap-20 flex-wrap max-lg:flex-col">
                    <h1 className="heading">{heading}</h1>

                    {timerComponent}

                    <div className="lg:ms-auto flex gap-2 max-lg:self-center">
                        <NextPrevArrowBtn type="prev" id="prev" />
                        <NextPrevArrowBtn type="next" id="next" />
                    </div>
                </div>

            </div>

            {/* products slider */}
            {isError ? (
                <ErrorProducts /> 
            ) : isLoading ? (
                <SkeltonProductCard />
            ) : (
                <ProductCards data={products} />
            )}

        </section>
    )
}

export default SectionProducts