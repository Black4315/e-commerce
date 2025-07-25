import React, { forwardRef, ReactNode, useCallback, useEffect, useImperativeHandle, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'
import { useMobileCheck } from '@/hooks/useMobileCheck'
import { useIsRTL } from '@/hooks/useIsRTL'


export type EmblaCarouselHandle = {
    prevBtnDisabled?: boolean
    nextBtnDisabled?: boolean
    onPrevButtonClick?: () => void
    onNextButtonClick?: () => void
}

type PropType = {
    slides?: number[]
    className?: string;
    btnClassName?:string;
    children: ReactNode
    options?: EmblaOptionsType
}


const EmblaCarousel = forwardRef<EmblaCarouselHandle, PropType>(
    ({ slides, options, children, className, btnClassName }, ref) => {
        const isMobile = useMobileCheck()
        const isRTL = useIsRTL()

        const [emblaRef, emblaApi] = useEmblaCarousel({
            ...options,
            direction: isRTL ? 'rtl' : 'ltr',
            watchDrag: isMobile,
            dragFree: true,
            loop: false,
        })

        const {
            prevBtnDisabled,
            nextBtnDisabled,
            onPrevButtonClick,
            onNextButtonClick
        } = usePrevNextButtons(emblaApi)


        return (
            <div className='relative'>
                <div className={cn("md:ms-auto flex gap-2 max-md:self-center absolute -top-19.5 md:-top-[107px] md:right-0 right-1/2 max-md:translate-x-1/2 !z-10 bg-white",btnClassName)}>
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
                <div className={cn("overflow-x-hidden", className)} ref={emblaRef}>
                    {children}
                </div>
            </div>

        )
    }
)
export default EmblaCarousel
