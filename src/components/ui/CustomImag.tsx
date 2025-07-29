'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import clsx from 'clsx'; // helps with conditional class merging
import { LOGO_NAME } from '@/constants';

type CustomImageProps = ImageProps;

export default function CustomImage(props: CustomImageProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (<>

        {isLoading && (
            <div className="relative w-full h-full overflow-hidden">
                <svg className="absolute inset-0 w-full h-full bg-skeleton z-10 anim-fadeInOut " viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    <text
                        x="50"
                        width={10}
                        y="50"
                        textAnchor="middle"
                        dominantBaseline="middle"

                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: '700',
                            fill: '#0003',
                            fontSize: '8px',
                            textTransform: 'uppercase',
                        }}
                    >
                        {LOGO_NAME}

                    </text>
                </svg>
            </div>)}

        <Image
            {...props}
            onLoadingComplete={() =>setIsLoading(false)}
            className={clsx(
                props.className,
                'transition-apple duration-200',
                isLoading ? 'opacity-0 absolute' : 'opacity-100 relative'
            )}
        />
    </>
    )
}