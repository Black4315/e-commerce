import Button from "@/components/ui/Button";
import { CustomTooltip } from "@/components/ui/CustomTooltip";
import { ActionsIconButtonProps } from "@/types/ActionsIconButtonType";
import Link from "next/link";



export default function ActionsIconButton({
  href,
  title,
  Icon,
  alt,
  width,
  height,
  iconClassName,
  children,
  tooltipPlacement = 'bottom',
  ...props }: ActionsIconButtonProps) {
  return (
    <CustomTooltip title={title} placement={tooltipPlacement}>
      <Button {...props}>
        <Link href={href}>
          <Icon className={iconClassName} style={{
            width: width,
            height: height,
            stroke: 'currentColor',
          }} />
        </Link>
      </Button>
    </CustomTooltip>
  );
}