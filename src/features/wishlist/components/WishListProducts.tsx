"use client";
import ProductCards from "@/components/ui/SectionProducts/components/ProductCards";
import SkeltonProductCard from "@/components/ui/SectionProducts/components/SkeltonProductCards";
import { useWishlist } from "@/features/wishlist/contexts/WishListContext";
import { useHydrated } from "@/hooks/useHydrated";
import MiniSection from "../../../components/ui/MiniSection";
import { useTranslations } from "next-intl";
import WishlistIcon from "@/assets/icons/Wishlist";

const WishListProducts = () => {
  const { hydrated } = useHydrated();
  const { wishlist } = useWishlist();
  const t = useTranslations("");

  return (
    <MiniSection heading={t("wishlist.wishlist") + ` (${wishlist.length})`}>
      <div className="">
        {!hydrated ? (
          <SkeltonProductCard />
        ) : (
          <ProductCards
            btnsClassname="!-top-18.5 max-md:w-fit !end-0"
            data={wishlist}
            emptyState={{
              icon: <WishlistIcon className="w-14 h-14" />,
              title: t("emptyState.wishlist.title"),
              description: t("emptyState.wishlist.desc"),
            }}
          />
        )}
      </div>
    </MiniSection>
  );
};

export default WishListProducts;
