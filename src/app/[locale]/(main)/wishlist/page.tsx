import JustForU from "@/features/justForU";
import WishListProducts from "../../../../features/wishlist/components/WishListProducts";

const WishList = () => {
  return (
    <div className="screen-max-width margin-spacey">
      <WishListProducts />
      <JustForU category="any" brand="any" />
    </div>
  );
};

export default WishList;
