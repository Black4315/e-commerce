"use client";

import { Size } from "@/entities/Product/types/productType";
import { useTranslations } from "next-intl";
import { SelectItem } from "@/components/ui/select";
import SwitcherSelect from "../../../components/ui/SwitcherSelect";

const SizesSelection = ({
  sizes,
  size,
  setSize,
  dropDown,
}: {
  sizes: Size[];
  size: Size;
  setSize: (size: Size | any) => void;
  dropDown?: boolean;
}) => {
  const t = useTranslations("homePage.product");

  return dropDown ? <SizesSwitcher {...{ sizes, size, setSize }} /> : "";
};

export default SizesSelection;

export const SizesSwitcher = ({
  sizes,
  size,
  setSize,
}: {
  sizes: Size[];
  size: Size;
  setSize: (size: Size | any) => void;
}) => {
  const t = useTranslations("homePage.product");

  const next = (nextSize: string) => sizes.find((s) => s.size == nextSize);
  const onSelectChange = (nextSize: string) => setSize(next(nextSize));
  const uniqueSizes = [
    ...new Map(sizes.map((item) => [item.size, item])).values(),
  ];

  const qty = size.quantity;
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-neutral-500 capitalize">{t("sizes")}:</span>
      <SwitcherSelect
        defaultValue={size.size}
        label={"Select a Size"}
        onSelectChange={onSelectChange}
      >
        {uniqueSizes.map((size, i) => (
          <SelectItem
            key={i}
            value={size.size}
            disabled={size.quantity <= 0}
            title={size.quantity <= 0 ? t("outStock") : ""}
          >
            {size.size.toLocaleUpperCase()}
          </SelectItem>
        ))}
      </SwitcherSelect>
      <span
        className={`sm-text md:text-xs ${
          qty < 5 ? "text-danger-600" : qty < 10 && "text-warning-600"
        }`}
      >
        {qty} unit{qty > 1 ? "s" : ""} remains
      </span>
    </div>
  );
};
