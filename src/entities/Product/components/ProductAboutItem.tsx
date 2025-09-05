"use client";
import { useTranslations } from "next-intl";
import { useProductContext } from "../contexts/ProductContext";
import { ComponentProps } from "react";

const ProductAboutItem = (props: ComponentProps<"div">) => {
  const { aboutItem } = useProductContext();
  const t = useTranslations("homePage.product");
  return (
    aboutItem?.length && (
      <div aria-label="about-Product section" {...props}>
        <h1 className="semi-text text-lg md:text-xl mb-1">{t("aboutItem")}</h1>
        <ul className="mt-4">
          {aboutItem.map((item, i) => (
            <li
              key={i}
              className="med-text list-disc ms-4.5"
              aria-label="product About Item list"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default ProductAboutItem;
