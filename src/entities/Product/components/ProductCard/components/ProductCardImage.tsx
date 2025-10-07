import { useMobileCheck } from "@/contexts/MobileCheckContext";
import Link from "next/link";
import { useProductContext } from "../../../contexts/ProductContext";
import CustomImage from "@/components/ui/CustomImag";
import { useProductSelection } from "@/entities/Product/contexts/ProductSelectionContext";

const ProductCardImage = () => {
  const isMobile = useMobileCheck();
  const { handle } = useProductContext();
  const { selectedVariant } = useProductSelection();

  const thumbnail = selectedVariant?.images[0];
  return (
    <Link
      href={`/products/${handle}`}
      className={`absolute top-0 left-0 bottom-0 w-full flex flex-col h-full transition-apple duration-200 ${
        !isMobile ? "group-hover/img:brightness-90" : "brightness-[0.97]"
      }`}
    >
      <div className="bg-secondary-1 flex-center h-full w-full">
        <CustomImage
          src={thumbnail?.url || ""}
          alt={thumbnail?.alt || ""}
          width={170}
          height={160}
          className="object-contain max-h-9/12 w-8/12 md:w-9/12"
        />
      </div>
    </Link>
  );
};

export default ProductCardImage;
