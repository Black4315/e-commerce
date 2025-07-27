import React, { useState } from 'react'
import EmblaCarousel from '../../ui/EmblaCarousel'
import Image from 'next/image';
import { useMobileCheck } from '@/hooks/useMobileCheck';

const ImageViewSlider = ({
    images,
    alt
}: {
    images: string[];
    alt: string
}) => {
    const [current, setcurrent] = useState(0)

    const isMobile = useMobileCheck()

    console.log(images)
    return (
        isMobile ?
            <EmblaCarousel btns={false} >
                <div className='flex h-150'>
                    {images.map((item, i) => (
                        <div className='w-11/12 flex-shrink-0 ' key={i}>
                            <Image width={200} height={200} src={item} alt={alt} className='object-cover' />
                        </div>
                    ))}
                </div>
            </EmblaCarousel>

            : <div className='flex justify-center gap-4 md:gap-8 min-w-[536px] max-h-[80%]'>
                <div className='flex flex-col gap-4 md:gap-6 overflow-y-auto scrollbar-thin'>
                    {images.map((item, i) => (
                        <div
                            key={i}
                            className={`${i == current && 'border-border border'} w-18 h-22 bg-secondary-1 flex-center p-2 rounded cursor-pointer hover:bg-[#e1e1e1] transition-all flex-shrink-0`}
                            onMouseEnter={() => setcurrent(i)}
                        >
                            <Image width={200} height={200} src={item} alt={alt} className='object-contain' />
                        </div>
                    ))}
                </div>

                <div className='w-[500px] h-full bg-secondary-1 flex-center p-2 rounded-xl cursor-zoom-in'>
                    <Image width={200} height={200} src={images[current]} alt={alt} className='object-contain' />
                </div>
            </div>
    )
}

export default ImageViewSlider