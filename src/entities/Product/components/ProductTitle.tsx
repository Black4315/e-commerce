import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const ProductTitle = ({
  title,
  htmlTitle,
  className,
  ...props
}: { title: string; htmlTitle?: string } & ComponentProps<"h3">) => {
  return (
    <h3
      {...props}
      title={htmlTitle}
      className={cn(
        "semi-heading capitalize leading-6 md:leading-8 md:mb-3 font-poppins ",
        className
      )}
    >
      {title}
    </h3>
  );
};

export default ProductTitle;
