import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const ProductTitle = ({
  title,
  className,
  ...props
}: { title: string } & ComponentProps<"h3">) => {
  return (
    <h3
      {...props}
      className={cn(
        "semi-heading capitalize leading-6 md:leading-8 md:mb-3 font-poppins ellipsis",
        className
      )}
    >
      {title}
    </h3>
  );
};

export default ProductTitle;
