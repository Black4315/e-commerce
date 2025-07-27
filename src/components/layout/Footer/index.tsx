"use client"
import React, { useEffect, useRef, useState } from 'react'
import CopyRight from './components/CopyRight'
import Link from "next/link"
import GetOffer from './components/GetOffer'
import FooterElementList from './components/FooterElementList'
import { useTranslations } from 'next-intl'
import { downloads, socialMedia } from '@/constants/constanst'
import Image from 'next/image'
import { useMobileCheck } from '@/hooks/useMobileCheck'
import { cn } from '@/lib/utils'
import StickyBtns from '@/features/StickyBtns'

const Footer = () => {
    const t = useTranslations('footer')
    const isMobile = useMobileCheck()

    const footerRef = useRef(null);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setHide(entry.isIntersecting);
            },
            { threshold: 0 }
        );

        if (footerRef.current) observer.observe(footerRef.current);

        return () => {
            if (footerRef.current) observer.unobserve(footerRef.current);
        };
    }, []);

    return (
        <>
            <StickyBtns hide={hide}/>
            <footer className="footer bg-black text-text-1 py-5 common-padding flex flex-col font-poppins" ref={footerRef}>
                <div className={cn(`screen-max-width w-full flex justify-between items-start max-lg:flex-col max-lg:gap-10 py-5 md:py-16`,
                    isMobile && `flex-col gap-10 py-5`
                )}>

                    <div className='flex flex-col gap-5 sm:gap-6 '>
                        <h1>
                            <Link href={'/'} className='logo text-text-1 '>Exclusive</Link>
                        </h1>

                        <h2>
                            <Link href={'/subscribe'} className='footer-subtitle' >{t('sub')}</Link>
                        </h2>
                        <GetOffer />
                    </div>

                    <FooterElementList className={`${!isMobile && 'w-44'}`} header={t('support.title')} body={t.raw('support.list')} />

                    <FooterElementList className={`${isMobile && '-my-3'}`} header={t('account.title')} body={t.raw('account.list')} />

                    <FooterElementList header={t('quickLinks.title')} body={t.raw('quickLinks.list')} />


                    <div className={'flex flex-col gap-5 sm:gap-6 mt-2'}>
                        <h2 className='footer-subtitle'>{t('download.header')}</h2>
                        <p className='text-text-3 text-sm'>{t('download.text')}</p>
                        <div className='flex gap-2'>
                            <Image src={'/assets/images/Qr Code.png'} width={80} height={80} alt='Qr Code' />
                            <div className="flex flex-col gap-1">
                                {downloads.map(({ img, alt, link }, i) => (
                                    <Link href={link} key={i}>
                                        <Image src={img} width={110} height={40} alt={alt} />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <ul className='flex gap-6 justify-center'>
                            {socialMedia.map(({ Icon, link }, i) => (
                                <li key={i} className='hover:text-hover-button-1'>
                                    <Link href={link}><Icon className='w-5 h-5 sm:w-6 sm:h-6' /></Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <CopyRight />
            </footer>
        </>
    )
}

export default Footer