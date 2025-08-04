'use client';

import Button from '@/components/ui/Button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
    const t = useTranslations('Errors');

    return (
        // <div className='min-h-screen flex-center'>

            <div className="py-40 flex flex-col items-center justify-center text-center px-4">
                <h1 className="font-medium leading-[1.2] tracking-wide text-black text-[clamp(2rem,10vw,7rem)]">
                    {t('404Title')}
                </h1>

                <p className="text-black font-inter mt-4 md:mt-8 reg-text">
                    {t('404Description')}
                </p>

                <Link href="/" className="mt-10 md:mt-20">
                    <Button className="bg-secondary-3 w-fit text-text-1 py-3 px-6 md:py-6 md:px-12 med-text">
                        {t('goHome')}
                    </Button>
                </Link>
            </div>

        // </div>
    );
}

