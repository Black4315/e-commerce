import ActionsIconButton, {
  ActionsIconButtonProps,
} from "@/components/ui/ActionsIconButton";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface ActionNavItem extends ActionsIconButtonProps {
  className?: string;
  children?: React.ReactNode;
  btnClassName?: string;
  selected?:boolean;
}

const ActionNavItem = ({
  className,
  btnClassName,
  children,
  selected,
  ...props
}: ActionNavItem) => {
  const pathName = usePathname();
  const [inItsPage, setinItsPage] = useState(false);
  useEffect(
    () => setinItsPage(pathName.includes(props.href ?? "")),
    [pathName]
  );

  return (
    <li
      data-selected={selected || inItsPage}
      className={cn("!relative group max-xs:-mx-1", className)}
    >
      <ActionsIconButton
        {...props}
        className={cn(
          "max-sm:w-9 max-sm:mx-0.5 max-sm:h-9 rounded-full duration-200 ",
          btnClassName,
          selected || inItsPage ? "bg-secondary-3 text-text-1" : ""
        )}
      />
      {children}
    </li>
  );
};

export default ActionNavItem;
