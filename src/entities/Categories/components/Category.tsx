import Link from "next/link";
import { CategoryType } from "../types/CategoryType";
import DropDownIcon from "@/assets/icons/DropDown";
import { cn } from "@/lib/utils";

type CategoryProps = {
  category: CategoryType;
  onHover?: () => void;
};

const Category = ({ category, onHover }: CategoryProps) => {
  return (
    <div
      onMouseEnter={onHover}
      className="w-full group hover:text-secondary-3 transition-all"
    >
      <div className="flex justify-between cursor-pointer">
        <h3 className="normal-text">
          <Link href={category.link}>{category.name}</Link>
        </h3>

        {category.children.length ? (
          <DropDownIcon
            className={`-rotate-90 relative start-0 group-hover:start-1 transition-all rtl:rotate-90 `}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Category;

export const CategoryMobile = ({
  category,
  onClick,
}: {
  category: CategoryType;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={
        "w-full group text-black hover:text-secondary-3 transition-all"
      }
    >
      <div className="flex justify-between cursor-pointer">
        <h3 className="semi-text text-lg nav-el">
          {category.name}
        </h3>

        {category.children.length ? (
          <DropDownIcon
            className={`-rotate-90 relative start-0 transition-all rtl:rotate-90 `}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
