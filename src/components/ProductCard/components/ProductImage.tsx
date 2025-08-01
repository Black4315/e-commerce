import { useMobileCheck } from "@/hooks/useMobileCheck";
import Image from "next/image";
import Link from "next/link";
import { useProductContext } from "../context/ProductContext";
import CustomImage from "@/components/ui/CustomImag";

const ProductImage = () => {
    const isMobile = useMobileCheck()
    const { id, title, image } = useProductContext()

    return (
        <Link
            href={`/product/${id}`}
            className={`absolute top-0 left-0 bottom-0 w-full flex flex-col h-full transition-apple duration-200 ${!isMobile ? 'group-hover:brightness-90':'brightness-[0.97]'}`}
        >
            <div className="bg-secondary-1 flex-center h-full w-full">
                <CustomImage
                    src={image}
                    alt={title}
                    width={170}
                    height={160}
                    className="object-contain max-h-9/12 w-8/12 md:w-9/12"
                />
            </div>
        </Link>
    )
};

export default ProductImage