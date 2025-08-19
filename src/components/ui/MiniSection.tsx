import Button2 from "@/components/ui/Button2";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const MiniSection = ({
  className,
  redbadge,
  heading,
  children,
  btnEndLine,
  btnProps,
  btnAbove,
  ...props
}: {
  redbadge?: boolean;
  heading: string;
  btnEndLine?: string;
  btnAbove?: string;
  btnProps?: ComponentProps<"button">;
} & ComponentProps<"section">) => {
  return (
    <section className={cn("", className)} {...props}>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 w-full justify-between items-center">
        <div className="flex gap-4 md:gap-6 items-center">
          {redbadge && <div className="w-5 h-10 rounded bg-secondary-3" />}
          <h3 className="font-normal text-xl font-poppins leading-6 capitalize">
            {" "}
            {heading}{" "}
          </h3>
        </div>

        <div className="flex justify-end">
          {btnEndLine && (
            <Button2
              className={cn("med-text", btnProps?.className)}
              {...btnProps}
            >
              {btnEndLine}
            </Button2>
          )}
        </div>
      </div>
      <div className="mt-10 md:mt-15">{children}</div>

      <div className="flex justify-center mt-10 md:mt-15">
        {btnAbove && (
          <Button2
            className={cn("med-text", btnProps?.className)}
            {...btnProps}
          >
            {btnAbove}
          </Button2>
        )}
      </div>
    </section>
  );
};

export default MiniSection;
