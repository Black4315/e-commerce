import ActionsIconButton from "@/components/ui/ActionsIconButton";
import { cn } from "@/lib/utils";
import { ActionsIconButtonProps } from "@/types/ActionsIconButtonType"

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
        <li className={cn('', className)}>
            <ActionsIconButton {...props} className={cn('max-sm:w-9 max-sm:mx-0.5 max-sm:h-9 rounded-full duration-200', btnClassName)} />
            {children}
        </li>
    )
}

export default ActionNavItem