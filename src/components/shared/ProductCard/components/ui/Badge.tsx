
import { cn } from "@/lib/utils";

const Badge = ({
    className,
    children
}: {
    className?: string;
    children: React.ReactNode
}) => {
    return (
        <span className={cn("w-fit p-1.5 font-poppins text-xs tracking-wide px-3 box-content text-text-1 rounded bg-secondary-3", className)}>
            {children}
        </span>
    )
}

export default Badge