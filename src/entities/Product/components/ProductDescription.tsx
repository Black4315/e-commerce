import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const ProductDescription = ({
  description,
  className,
  ...props
}: { description: string } & ComponentProps<"p">) => {
  return (
    <p {...props} className={cn("reg-text overflow-hidden line-clamp-4 ",className)}>
      {description}
    </p>
  );
};

export default ProductDescription;
