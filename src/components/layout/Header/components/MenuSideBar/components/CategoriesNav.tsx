import SideBartCategories, { SideBartCategoryItems } from "@/entities/Categories/components/SideBartCategories";
import ReturnBtn from "./returnBtn";
import { Dispatch, useEffect, useState } from "react";
import { CategoryChild } from "@/entities/Categories/types/CategoryType";

const CategoriesNav = ({
  setshowAnotherContent,
}: {
  setshowAnotherContent: Dispatch<React.SetStateAction<any>>;
}) => {
  const [open, setopen] = useState(false);
  const [categoryAvtiveItems, setcategoryAvtiveItems] = useState<
    CategoryChild[] | null
  >(null);

  useEffect(() => {
    if (open && categoryAvtiveItems && categoryAvtiveItems.length > 0) {
      setshowAnotherContent(
        <>
          <div className="mb-14">
            <ReturnBtn onClick={() => setshowAnotherContent(null)} />
          </div>
          <SideBartCategoryItems items={categoryAvtiveItems} />
        </>
      );
    }
  }, [categoryAvtiveItems, setshowAnotherContent, open]);

  return (
    <SideBartCategories
      onClick={() => setopen(true)}
      getActiveItems={setcategoryAvtiveItems}
    />
  );
};

export default CategoriesNav