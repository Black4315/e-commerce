"use client"
import React from 'react'
import Cart1Icon from '@/assets/icons/Cart1';
import WishlistIcon from '@/assets/icons/Wishlist';
import ProfileMenu from './ProfileMenu';
import ActionNavItem from './ActionNavItem';

export default function ActionsNav({ children }: { children?: React.ReactNode }) {

  return (
    <ul className="flex gap-1 items-center">
      <ActionNavItem
        href="/wishlist"
        title="Wishlist"
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

ActionsNav.cart = () =>
(
  <ActionNavItem
    href="/cart"
    title="Cart"
    Icon={Cart1Icon}
    alt="cart"
    width={24}
    height={24}
    iconClassName='max-sm:!w-5'
  />
)

ActionsNav.user = () => (
  <ProfileMenu />
)
