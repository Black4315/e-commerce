'use client'
import { formatReviewCount } from '@/utils'
import { useTranslations } from 'next-intl'
import React from 'react'

const SoldNumbers = ({ soldNumber }: { soldNumber :number}) => {
    const t = useTranslations('homePage.product')
    return (
        <p className="semi-text text-inactive text-sm">
            <span className="me-2">|</span> 
            <span>{formatReviewCount(soldNumber)}{soldNumber > 1000 ? "+" : ""} {t('sold')}</span> 
        </p>
    )
}

export default SoldNumbers