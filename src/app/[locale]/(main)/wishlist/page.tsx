import JustForU from "@/entities/justForU";
import WishListProducts from "@/features/wishlist/components/WishListProducts";
import { useTranslations } from "next-intl";

const WishList = () => {
  const t = useTranslations("homePage");

  return (
    <div className="screen-max-width margin-spacey">
      <WishListProducts />

      {/* TODO: get the acutal category and barnd from backend to get exact just for u */}
      <JustForU
        queryKeys={["just-for-u"]}
        heading={t("justForU")}
        category="any"
        brand="any"
      />
    </div>
  );
};

export default WishList;
