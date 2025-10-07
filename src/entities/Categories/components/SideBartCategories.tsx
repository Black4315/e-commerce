"use client";
import { useTranslations } from "next-intl";
import { CategoryMobile } from "./Category";
import { CategoryChild, CategoryType } from "../types/CategoryType";
import useDropDown from "../hooks/useDropDown";
import { Dispatch, useEffect } from "react";

import ProgLink from "@/utils/ProgLink";

const SideBartCategories = ({
  onClick,
  getActiveItems,
}: {
  onClick: () => void;
  getActiveItems?: Dispatch<React.SetStateAction<CategoryChild[] | null>>;
}) => {
  const t = useTranslations("homePage");
  // const { data: categorys, isLoading, isError } = useFetchCats(locale)
  const categorys = t.raw("categories") as CategoryType[];

  // dropdown implentation this custom hook from logic to make dropdown apear
  const { active, setActive, activeItems } = useDropDown(categorys);

  const handelClick = (category: CategoryType) => {
    onClick();
    if (!category.children.length) {
      setActive(null);
      return;
    }

    setActive(category.link);
  };

  useEffect(() => {
    if (getActiveItems) getActiveItems(activeItems);
  }, [active]);

  return (
    <nav className="flex flex-col items-start p-0 gap-4 mt-12">
      <span className="reg-text font-semibold text-inactive nav-el">
        Categories
      </span>

      {categorys.map((category, i) => (
        <CategoryMobile
          key={i}
          category={category}
          onClick={() => handelClick(category)}
        />
      ))}
    </nav>
  );
};

export default SideBartCategories;

export const SideBartCategoryItems = ({
  items,
}: {
  items: CategoryChild[] | null;
}) => {
  return items ? (
    <ul className="space-y-4 dropdown-panel w-55 text-black ">
      {items?.map(({ link, label, name }, i) => (
        <li
          key={i}
          className="will-animate nav-el med-text md:text-sm semi-text text-lg "
        >
          {label ? (
            <span className="semi-text text-base w-full flex text-neutral-500 mb-2 pb-2 border-b border-neutral-400">
              {name}
            </span>
          ) : (
            link && <ProgLink href={link} className="active:text-secondary-3 transition-all nav-link">{name}</ProgLink>
          )}
        </li>
      ))}
    </ul>
  ) : (
    ""
  );
}