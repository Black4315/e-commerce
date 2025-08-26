const ColorsSelection = ({
  skusWithColors,
  quanity: qty,
  sku: slectedSku,
  setSku,
}: {
  skusWithColors: { sku: string; color: string }[];
  quanity: number;
  sku: string;
  setSku: (color: string | any) => void;
}) => {
  return (
    <div className="flex items-center gap-4">
      <ul className="flex gap-4 items-center flex-wrap">
        {skusWithColors.map(({ sku, color }, i) => (
          <li key={i}>
            <div
              key={i}
              onClick={() => setSku(sku)}
              className={`w-5 h-5 rounded-full border border-black/60 relative rounded-border ${
                sku == slectedSku &&
                "after:opacity-100 after:border-black after:border-2"
              }`}
              style={{ background: color }}
            />
          </li>
        ))}
      </ul>
      <span
        className={`sm-text text-[10px] md:text-xs whitespace-nowrap ${
          qty < 5
            ? "text-danger-600"
            : qty <= 10
            ? "text-warning-600"
            : qty > 10 && "text-success-500"
        }`}
      >
        {qty > 50 ? "few" : qty} unit{qty > 1 ? "s" : ""} remains
      </span>
    </div>
  );
};

export default ColorsSelection;
