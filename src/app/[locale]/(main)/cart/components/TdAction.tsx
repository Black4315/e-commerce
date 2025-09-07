import MoveToWishlist from "@/assets/icons/MoveToWishlist";

import ActionsIconButton from "@/components/ui/ActionsIconButton";
import { cn } from "@/lib/utils";
import { IoMdClose, IoMdShare } from "react-icons/io";
import { CartItem } from "../../../../../features/cart/types/cartType";
import WishList from "@/app/[locale]/(main)/wishlist/page";
import WishListBtn from "@/features/wishlist/components/WishListBtn";

export const TdAction = ({
  deletClick,
  item,
  link,
}: {
  deletClick?: () => void;
  item: CartItem;
  link?: string;
}) => (
  <div className="absolute top-0 -start-9 h-full rounded-s overflow-hidden opacity-0 group-hover:start-0 transition-apple duration-200 group-hover:opacity-100 flex flex-col">
    <TdAction.DeleteButton onClick={deletClick} />
    <TdAction.WishlistButton item={item} />
    {/* <TdAction.ShareButton /> */}
  </div>
);

TdAction.DeleteButton = ({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) => (
  <ActionsIconButton
    aria-label="delete item"
    title="Delete"
    tooltipPlacement="left"
    className={cn("bg-red-500 text-text-1 w-8 h-8 rounded-none", className)}
    onClick={onClick}
  >
    <IoMdClose
      className="text-current w-4.5 h-4.5 cursor-pointer text-xl"
      aria-label="Delete Product from cart"
      role="button"
    />
  </ActionsIconButton>
);

TdAction.WishlistButton = ({
  className,
  item,
}: {
  item: CartItem;
  className?: string;
}) => (
  <WishListBtn item={item} className={cn("w-8 h-8 rounded-none", className)} />
);

TdAction.ShareButton = ({ className }: { className?: string }) => (
  <ActionsIconButton
    title="Share"
    tooltipPlacement="left"
    className={cn("w-8 h-8 rounded-none", className)}
  >
    <IoMdShare
      className="text-current w-4.5 h-4.5 cursor-pointer text-xl"
      aria-label="Delete Product from cart"
      role="button"
    />
  </ActionsIconButton>
);
