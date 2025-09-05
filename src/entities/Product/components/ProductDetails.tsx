"use client";
import { useTranslations } from "next-intl";
import { useProductContext } from "../contexts/ProductContext";
import { ComponentProps } from "react";

const ProductDetails = (props: ComponentProps<"div">) => {
  const { productDetails } = useProductContext();
  const t = useTranslations("homePage.product");
  return (
    productDetails?.length && (
      <div aria-label="Product details section" {...props}>
        <h1 className="semi-text text-lg md:text-xl mb-1">
          {t("productDetails")}
        </h1>
        <ul className="mt-4">
          {productDetails.map((item, i) => (
            <li
              key={i}
              className="med-text ms-4.5"
              aria-label="product details Item list"
            >
              <p className="med-text" aria-label="detail item">
                <span className="semi-text">{item[0]} : </span>
                {item[1]}
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default ProductDetails;
