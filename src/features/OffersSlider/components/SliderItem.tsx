"use client"

import { useIsRTL } from "@/hooks/useIsRTL";
import { SliderItemtype } from "../types/sliderItem"
import { useTranslations } from "next-intl";
import Image from "next/image";
import LogoTitle from "./LogoTitle";
import Link from "next/link";
import IconsarrowrightIcon from "@/assets/icons/iconsarrowright";

const SliderItem = ({ name, image, logo, offerBody, link }: SliderItemtype) => {
    const isRTL = useIsRTL();
    const t = useTranslations('homePage')

    return (
        <div key={name} className='flex p-6 pb-12 sm:pb-14 sm:p-6 md:p-12 box-border h-full justify-between max-md:flex-col'>

            <div className="max-sm:max-h-50 max-sm:w-63 w-75 md:order-2 max-md:self-center ">
                <Image src={image} width={350} height={350} alt={name} className='object-contain w-full' />
            </div>

            <div className='flex flex-col max-w-75 gap-1 sm:gap-4 md:gap-6'>
                <LogoTitle {...{
                    logo,
                    name
                }} />

                {/* heading */}
                <h1 className='heading text-text-1'>
                    {offerBody}
                </h1>
                
                {/* shop now link */}
                <Link href={link} className='flex items-center gap-2 text-text-1 hover:text-hover-button-1 group transition-colors'>
                    <span className='title border-b my-1 border-text-1 group-hover:border-hover-button-1 transition-colors '>
                        {t('shopNowBtn')}
                    </span>
                    <IconsarrowrightIcon className={`w-6 h-6 ${isRTL && 'rotate-180'}`} />
                </Link>

            </div>

        </div>
    )
}

export default SliderItem