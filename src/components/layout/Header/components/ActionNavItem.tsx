import ActionsIconButton, { ActionsIconButtonProps } from "@/components/ui/ActionsIconButton";
import { cn } from "@/lib/utils";

interface ActionNavItem extends ActionsIconButtonProps {
    className?: string;
    children?: React.ReactNode;
    btnClassName?: string;
}

const ActionNavItem = ({
    className,
    btnClassName,
    children,
    ...props
}: ActionNavItem) => {
    return (
        <li className={cn('!relative group max-xs:-mx-1', className)}>
            <ActionsIconButton {...props} className={cn('max-sm:w-9 max-sm:mx-0.5 max-sm:h-9 rounded-full duration-200 ', btnClassName)} />
            {children}
        </li>
    )
}

export default ActionNavItem