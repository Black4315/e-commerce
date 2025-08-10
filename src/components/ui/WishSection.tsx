import Button2 from "@/components/ui/Button2";
import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

const WishSection = ({
    className,
    redbadge,
    heading,
    children,
    btn,
    btnProps,
    ...props
}: {
    redbadge?: boolean
    heading: string;
    btn?: string;
    btnProps?: ComponentProps<'button'>
} & ComponentProps<'section'>) => {
    return (
        <section className={cn('', className)} {...props}>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 w-full justify-between items-center">
                <div className="flex gap-4 md:gap-6 items-center">
                    {redbadge && <div className="w-5 h-10 rounded bg-secondary-3" />}
                    <h3 className="font-normal text-lg md:text-xl leading-5 md:leading-6 capitalize"> {heading} </h3>
                </div>

                <div className="flex justify-end">

                    {btn && <Button2 {...btnProps}>{btn}</Button2>}
                </div>
            </div>
            <div className="mt-10 md:mt-15">
                {children}
            </div>
        </section>
    )
}

export default WishSection