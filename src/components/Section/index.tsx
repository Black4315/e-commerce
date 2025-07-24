import { cn } from "@/lib/utils"
import CarouselButtons from "./components/CarouselBtns";

type SectioProps = {
    children?: React.ReactNode;
    className?: string;
    label?: string | React.ReactNode;
    heading?: string;
    timerComponent?: React.ReactNode;
    isbtns:boolean;
} & React.ComponentProps<'section'> ;

const Section = ({
    children,
    className,
    label,
    heading,
    timerComponent,
    isbtns,
    ...props
}: SectioProps) => {

    return (
        <section
            className={cn('flex flex-col gap-8 mt-10 pb-10 md:gap-15 md:mt-18 md:pb-18 border-b border-border relative', className)}
            {...props}
        >
            <div className="flex flex-col gap-6">

                <div className="flex gap-4 md:gap-6 items-center">
                    {label && <div className="w-5 h-10 rounded bg-secondary-3" />}
                    <span className="semi-text text-secondary-3">{label}</span>
                </div>

                <div className="flex md:items-center gap-6 lg:gap-20 flex-wrap max-md:flex-col">
                    <h1 className="heading">{heading}</h1>

                    {timerComponent}

                    {isbtns && <CarouselButtons />}
                </div>

            </div>

            {children}
        </section>
    )
}

export default Section