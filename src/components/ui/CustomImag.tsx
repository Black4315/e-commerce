'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import clsx from 'clsx'; // helps with conditional class merging
import LogoIcon from '@/assets/icons/Logo';
import { Logo } from '@/assets';

type CustomImageProps = ImageProps;

export default function CustomImage({ src, alt, ...props }: CustomImageProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (<>

        {(isLoading) && (
            <div className="relative w-full h-full anim-fadeInOut overflow-hidden bg-skeleton flex-center">
                <LogoIcon className='text-[#0003] w-32 h-32' />
            </div>)}

        <Image
            src={src || Logo}
            alt={alt || 'Fallback image'}
            {...props}
            onLoad={() => setIsLoading(false)}
            className={clsx(
                props.className,
                'transition-apple duration-200',
                isLoading ? 'opacity-0 absolute' : 'opacity-100 relative',
                !src && 'object-contain !w-32 !h-32'
            )}
        />
    </>
    )
}