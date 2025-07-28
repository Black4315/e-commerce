import Link from "next/link";
import { CategoryType } from "../types/CategoryType";
import DropDownIcon from "@/assets/icons/DropDown";

type CategoryProps = {
    category: CategoryType;
};

const Category = ({ category }: CategoryProps) => {
    return (
        <div className="w-full group hover:text-secondary-3 transition-all">
            <div className="flex justify-between cursor-pointer">
                <h3 className="normal-text">
                    <Link href={category.link}>{category.name}</Link>
                </h3>

                {category.children.length ? <DropDownIcon className={`-rotate-90 relative start-0 group-hover:start-1 transition-all rtl:rotate-90 `}/>:''}
            </div>
        </div>
    );
};

export default Category;
