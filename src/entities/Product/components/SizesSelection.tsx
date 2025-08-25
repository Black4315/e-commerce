"use client";

import { Size } from "@/entities/Product/types/productType";
import { useTranslations } from "next-intl";
import { SelectItem } from "@/components/ui/select";
import SwitcherSelect from "@/components/ui/SwitcherSelect";
import Button2 from "@/components/ui/Button2";

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
  return dropDown ? (
    <SizesSwitcherDropDown {...{ sizes, size, setSize }} />
  ) : (
    <SizesSwitcher {...{ sizes, size, setSize }} />
  );
};

export default SizesSelection;

export const SizesSwitcherDropDown = ({
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
    <div className="flex items-center gap-2">
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
        {qty > 50 ? "few" : qty} unit{qty > 1 ? "s" : ""} remains
      </span>
    </div>
  );
};

export const SizesSwitcher = ({
  sizes,
  size:selctedSize,
  setSize,
}: {
  sizes: Size[];
  size: Size;
  setSize: (size: Size | any) => void;
}) => {
  const t = useTranslations("homePage.product");

  return (
    <ul className="flex gap-6 items-center flex-wrap">
      {sizes.map((size, i) => (
        <li key={i}>
          <Button2
            onClick={() => setSize(size)}
            disabled={size.quantity <= 0}
            title={size.quantity <= 0 ? t("outStock") : ""}
            className={`${
              size.size == selctedSize.size ? "action-btn-select" : ""
            } w-8 h-8 !p-0`}
          >
            {size.size}
          </Button2>
        </li>
      ))}
    </ul>
  );
}