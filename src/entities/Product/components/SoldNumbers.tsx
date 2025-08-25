'use client'
import { formatCount } from '@/utils'
import { useTranslations } from 'next-intl'
import React from 'react'

const SoldNumbers = ({ soldNumber }: { soldNumber: number }) => {
    const t = useTranslations('homePage.product')
    return (
        <p className="semi-text text-inactive text-sm">
            <span>{formatCount(soldNumber)}{soldNumber > 1000 ? "+" : ""} {t('sold')}</span>
        </p>
    )
}

export default SoldNumbers