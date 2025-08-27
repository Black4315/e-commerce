import Button from "@/components/ui/Button";
import { CustomTooltip } from "@/components/ui/CustomTooltip";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";

export interface ActionsIconButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  href?: string;
  title: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  alt?: string;
  width?: number;
  height?: number;
  iconClassName?: string;
  children?: React.ReactNode;
  tooltipPlacement?: React.ComponentProps<typeof Tooltip>["placement"];
}

export default function ActionsIconButton({
  href,
  title,
  Icon,
  alt,
  width,
  height,
  iconClassName,
  children,
  tooltipPlacement = "bottom",
  ...props
}: ActionsIconButtonProps) {
  const iconEl = Icon ? (
    <Icon
      className={iconClassName}
      style={{
        width,
        height,
        stroke: "currentColor",
      }}
    />
  ) : null;

  const content = href ? <Link href={href}>{iconEl}</Link> : iconEl;

  return (
    <CustomTooltip title={title} placement={tooltipPlacement}>
      <Button {...props}>
        {content}
        {children}
      </Button>
    </CustomTooltip>
  );
}
