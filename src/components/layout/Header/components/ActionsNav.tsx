"use client";
import React from "react";
import Cart1Icon from "@/assets/icons/Cart1";
import WishlistIcon from "@/assets/icons/Wishlist";
import ProfileMenu from "./ProfileMenu";
import ActionNavItem from "./ActionNavItem";
import { useTranslations } from "next-intl";
import { useCartContext } from "@/features/cart/contexts/CartContext";
import NotificationBadge from "@/components/ui/notificationBadge";
import { useWishlist } from "@/features/wishlist/contexts/WishListContext";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/contexts/UserContext";
import { pages } from "@/constants/pages";

export default function ActionsNav({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <ul className="flex max-xs:gap-[0px] gap-1 items-center">
      <ActionsNav.wishList />
      {children}
    </ul>
  );
}

ActionsNav.wishList = ({
  tooltip = true,
  iconClassName,
}: {
  tooltip?: boolean;
  iconClassName?: string;
}) => {
  const t = useTranslations("header.tooltip");
  const { wishlist } = useWishlist();
  const router = useRouter();
  const { isLoggedIn } = useUserContext();

  return (
    <ActionNavItem
      href={pages.wishlist}
      title={tooltip ? t("wishlist") : ""}
      Icon={WishlistIcon}
      alt="wishlist"
      width={28}
      height={28}
      className=""
      onClick={() => {
        if (!isLoggedIn) {
          router.push(pages.signup);
          return;
        }
      }}
      iconClassName={`max-sm:!w-6 ${iconClassName}`}
    >
      {wishlist.length ? (
        <NotificationBadge notificationsLen={wishlist.length} />
      ) : (
        ""
      )}
    </ActionNavItem>
  );
};

ActionsNav.cart = ({
  tooltip = true,
  iconClassName,
}: {
  tooltip?: boolean;
  iconClassName?: string;
}) => {
  const t = useTranslations("header.tooltip");
  const { cart } = useCartContext();

  const totalQuantity = cart.reduce(
    (total, item) => total + (item.quantity ?? 0),
    0
  );
  return (
    <ActionNavItem
      href={pages.cart}
      title={tooltip ? t("cart") : ""}
      Icon={Cart1Icon}
      alt="cart"
      width={24}
      height={24}
      iconClassName={`max-sm:!w-6 ${iconClassName}`}
    >
      {totalQuantity ? (
        <NotificationBadge notificationsLen={totalQuantity} />
      ) : (
        ""
      )}
    </ActionNavItem>
  );
};

ActionsNav.user = () => <ProfileMenu />;
