import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid max-w-7xl grid-cols-1 gap-4 lg:gap-[30px] auto-rows-[18rem] md:grid-cols-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    header,
    img,
    href
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    img: string;
    href: string;
}) => {
    const t = useTranslations('homePage')
    return (
        <div
            className={cn(
                `group/bento relative shadow-input row-span-1 flex flex-col justify-between rounded space-y-4 border border-neutral-200 overflow-hidden bg-black p-4 lg:p-8 transition duration-200  ${
                    id == 1 ? 'md:row-span-2 md:col-span-2' :
                    id == 2 ? 'md:col-span-2' : ""
                }`,
                className,
            )}
        >
            {header}

            {/* image */}
            <div className={`absolute mb-0 flex-center md:self-center mdd:w-[500px] ${
                [1, 2].includes(id) ? 'bottom-0 translate-y-0 w-10/12 max-md:w-[300px] max-md:h-[16rem]' : 'w-8/12 top-1/2 -translate-y-1/2 self-center max-md:h-[11rem] '
            } `} >
                <Image src={img} width={500} height={100} alt={'Bento Image'} className="object-contain h-full w-full z-10 " />
                
                {!([1,2].includes(id)) && <div className="bg-[#d9d9d9e6] blur-[100px] w-40 md:w-10/12 aspect-square opacity- absolute self-center top-1/2 -translate-y-1/2" />}
            </div>

            <div className=" relative transition-apple duration-200 group-hover/bento:translate-x-2 h-full flex flex-col justify-end gap-1 md:gap-2">
                <h2 className="semi-heading text-text-1">
                    {title}
                </h2>
                <p className="reg-text text-text-1 text-xs md:text-sm">
                    {description}
                </p>
                <Link href={href} className="med-text capitalize border-b border-text-1 text-text-1 w-fit transition-all hover:text-hover-button-1 hover:border-hover-button-1">
                    {t('shopNowBtn')}
                </Link>
            </div>
        </div>
    );
};
