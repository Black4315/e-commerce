"use client"
import React from 'react'
import Cart1Icon from '@/assets/icons/Cart1';
import WishlistIcon from '@/assets/icons/Wishlist';
import ProfileMenu from './ProfileMenu';
import ActionNavItem from './ActionNavItem';
import { useTranslations } from 'next-intl';
import { useCartContext } from '@/contexts/CartContext';
import NotificationBadge from '@/components/ui/notificationBadge';
import { useWishlist } from '@/contexts/WishListContext';

export default function ActionsNav({ children }: { children?: React.ReactNode }) {
  return (
    <ul className="flex gap-1 items-center">
      <ActionsNav.wishList />
      {children}
    </ul>
  )
}


ActionsNav.wishList = () => {
  const t = useTranslations('header.tooltip')
  const {wishlist} = useWishlist()
  return (
    <ActionNavItem
      href="/wishlist"
      title={t('wishlist')}
      Icon={WishlistIcon}
      alt="wishlist"
      width={28}
      height={28}
      className=''
      iconClassName='max-sm:!w-6'
    >
      {wishlist.length ? <NotificationBadge notificationsLen={wishlist.length} /> : ""}
    </ActionNavItem >
  )
}

ActionsNav.cart = () => {
  const t = useTranslations('header.tooltip')
  const { cart } = useCartContext()

  return (
    <ActionNavItem
      href="/cart"
      title={t('cart')}
      Icon={Cart1Icon}
      alt="cart"
      width={24}
      height={24}
      iconClassName='max-sm:!w-5'
    >
      {cart.length ? <NotificationBadge notificationsLen={cart.length} /> : ""}
    </ActionNavItem>
  )
}


ActionsNav.user = () => (
  <ProfileMenu />
)
