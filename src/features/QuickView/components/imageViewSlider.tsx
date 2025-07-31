import React, { useState } from 'react'
import EmblaCarousel from '../../../components/ui/EmblaCarousel'
import Image from 'next/image';
import { useMobileCheck } from '@/hooks/useMobileCheck';
import CustomImage from '@/components/ui/CustomImag';

const ImageViewSlider = ({
    images,
    alt
}: {
    images: string[];
    alt: string
}) => {

    const isMobile = useMobileCheck()

    return (
        isMobile ? <MobileImageSlider {...{ images, alt }} /> : <DeskTopImageSlider {...{ images, alt }} />
    )
}

export default ImageViewSlider


const MobileImageSlider = ({ images, alt }: { images: string[]; alt: string }) => (
    <EmblaCarousel btns={false} options={{ dragFree: false }}>
        <div className='flex gap-4 md:gap-6'>
            {images.slice(0, 5).map((item, i) => (
                <div className='w-9/12 h-55 flex-shrink-0 bg-skeleton flex-center p-2 rounded-xl md:rounded-xl ' key={i}>
                    <CustomImage width={150} height={150} src={item} alt={alt} className='object-contain ' />
                </div>
            ))}
        </div>
    </EmblaCarousel>
)


const DeskTopImageSlider = ({ images, alt }: { images: string[]; alt: string }) => {
    const [current, setcurrent] = useState(0)
    return (
        <div className='flex justify-center max-sm:w-full gap-4 md:gap-6 sm:h-[472px] md:h-[536px]'>
            <div className='flex flex-col gap-4 md:gap-6 overflow-y-hidden scrollbar-thin flex-shrink-0'>
                {images.slice(0, 5).map((item, i) => (
                    <div
                        key={i}
                        className={`${i == current && 'animate_quickSlider'} blur-[1.5px] grayscale-25 w-18 h-22 max-h-22 bg-skeleton flex-center p-3 rounded cursor-pointer transition-apple flex-shrdink-0`}
                        onMouseMove={() => setcurrent(i)}
                    >
                        <Image width={50} height={50} src={item} alt={alt} className='object-contain' />
                    </div>
                ))}
            </div>

            <div className='sm:w-[472px]dd md:w-[536px] w-full h-full bg-skeleton flex-center p-2 rounded-xl cursor-zoom-in'>
                <CustomImage width={200} height={200} src={images[current]} alt={alt} className='object-contain' />
            </div>
        </div>
    )
}