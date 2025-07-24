"use client"
import React from 'react'
import Cart1Icon from '@/assets/icons/Cart1';
import WishlistIcon from '@/assets/icons/Wishlist';
import ProfileMenu from './ProfileMenu';
import ActionNavItem from './ActionNavItem';
import { useTranslations } from 'next-intl';

export default function ActionsNav({ children }: { children?: React.ReactNode }) {
  const t = useTranslations('header.tooltip')
  return (
    <ul className="flex gap-1 items-center">
      <ActionNavItem
        href="/wishlist"
        title={t('wishlist')}
        Icon={WishlistIcon}
        alt="wishlist"
        width={28}
        height={28}
        className=''
        iconClassName='max-sm:!w-6'
      />
      {children}
    </ul>
  )
}

ActionsNav.cart = () => {
  const t = useTranslations('header.tooltip')
  return (
    <ActionNavItem
      href="/cart"
      title={t('cart')}
      Icon={Cart1Icon}
      alt="cart"
      width={24}
      height={24}
      iconClassName='max-sm:!w-5'
    />
  )
}
ActionsNav.user = () => (
  <ProfileMenu />
)
