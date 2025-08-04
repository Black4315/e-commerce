import React, { useState } from 'react'
import EmblaCarousel from '../../../components/ui/EmblaCarousel'
import Image from 'next/image';
import { useMobileCheck } from '@/hooks/useMobileCheck';
import CustomImage from '@/components/ui/CustomImag';
import { ProductImage } from '@/types/productType';

const ImageViewSlider = ({
    images,
}: {
    images: ProductImage[];
}) => {

    const isMobile = useMobileCheck()

    return (
        isMobile ? <MobileImageSlider {...{ images }} /> : <DeskTopImageSlider {...{ images }} />
    )
}

export default ImageViewSlider


const MobileImageSlider = ({ images }: { images: ProductImage[]; }) => (
    <EmblaCarousel btns={false} options={{ dragFree: false }}>
        <div className='flex gap-4 md:gap-6'>

            {images.slice(0, 5).map(({ url, alt }, i) => (
                <div className='w-9/12 h-55 flex-shrink-0 bg-skeleton flex-center p-2 rounded-xl md:rounded-xl ' key={i}>
                    <CustomImage width={150} height={150} src={url} alt={alt} className='object-contain ' />
                </div>
            ))}

        </div>
    </EmblaCarousel>
)


const DeskTopImageSlider = ({ images }: { images: ProductImage[]; }) => {
    const [current, setcurrent] = useState(0)
    return (
        <div className='flex justify-center max-sm:w-full gap-4 md:gap-6 sm:h-[472px] md:h-[536px]'>
            <div className='flex flex-col gap-4 md:gap-6 overflow-y-hidden scrollbar-thin flex-shrink-0'>
                {images.slice(0, 5).map(({ url, alt }, i) => (
                    <div
                        key={i}
                        className={`${i == current && 'animate_quickSlider'} blur-[1.5px] grayscale-25 w-18 h-22 max-h-22 bg-skeleton flex-center p-3 rounded cursor-pointer transition-apple flex-shrdink-0`}
                        onMouseMove={() => setcurrent(i)}
                    >
                        <Image width={50} height={50} src={url} alt={alt} className='object-contain' />
                    </div>
                ))}
            </div>

            <div className='sm:w-[472px]dd md:w-[536px] w-full h-full bg-skeleton flex-center p-2 rounded-xl cursor-zoom-in'>
                <CustomImage width={200} height={200} src={images[current].url} alt={images[current].alt} className='object-contain' />
            </div>
        </div>
    )
}