"use client";
import fetchApi from "@/lib/fetchApi";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { useFetchCats } from "./hooks/useFetchCats";
import Category from "./components/Category";
import { CategoryType } from "./types/CategoryType";
import useDropDown from "./hooks/useDropDown";
import DropdownPanel from "./components/CategoryDropdown/DropdownPanel";

const Categorys = () => {
  const t = useTranslations("homePage");
  // const { data: categorys, isLoading, isError } = useFetchCats(locale)
  const categorys = t.raw("categories") as CategoryType[];

  // dropdown implentation this custom hook from logic to make dropdown apear
  const { active, setActive, activeItems } = useDropDown(categorys);

  // check if there is no items for this category like fashion has sometimes (Shirts)
  const onhoverCat = (category: CategoryType) => {
    if (!category.children.length) {
      setActive(null);
      return;
    }

    setActive(category.link);
  };

  return (
    <div
      onMouseLeave={() => setActive(null)}
      className="pt-10 pe-4 h-fit border-e border-border hidden lg:block"
    >
      <div className="flex flex-col items-start p-0 gap-4 w-[217px] ">
        {categorys.map((category, i) => (
          <Category
            key={i}
            category={category}
            onHover={() => onhoverCat(category)}
          />
        ))}
      </div>
      <DropdownPanel items={activeItems} isActive={!!active} />
    </div>
  );
};

export default Categorys;
