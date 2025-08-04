
import { cn } from "@/lib/utils";
import {
    SelectCustom,
    SelectTrigger,
    SelectValue,
} from "./select";
import { Select } from "@radix-ui/themes";

type Props = {
    defaultValue: string;
    label: string;
    className?: string;
    onSelectChange?: (any:any) => void;
    children: React.ReactNode;
};

const SwitcherSelect = ({ defaultValue, label, className, onSelectChange, children }: Props) => {
    return (
        <SelectCustom defaultValue={defaultValue} onValueChange={onSelectChange}>
            <SelectTrigger
                className={cn('min-w-[80px] max-md:text-xs max-w-fit hover:bg-white/5 transition-all rounded-[2px] select-none flex gap-1 cursor-pointer h-8 border-none bg-transparent focus:ring-0 focus:ring-offset-0', className)}
                aria-label={label}
            >
                <SelectValue />
            </SelectTrigger>
            <Select.Content className="max-md:text-xs">
                {children}
            </Select.Content>
        </SelectCustom>
    )
}

export default SwitcherSelect