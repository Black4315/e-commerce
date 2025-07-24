
import { cn } from "@/lib/utils";

const Badge = ({
    className,
    children
}: {
    className?: string;
    children: React.ReactNode
}) => {
    return (
        <span className={cn(" p-1.5 font-poppins text-xs tracking-wide px-3 text-text-1 rounded bg-secondary-3", className)}>
            {children}
        </span>
    )
}

export default Badge