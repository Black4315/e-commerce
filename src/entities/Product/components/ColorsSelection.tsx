const ColorsSelection = ({
  skusWithColors,
  sku:slectedSku,
  setSku,
}: {
  skusWithColors: {sku:string,color:string}[];
  sku: string;
  setSku: (color: string | any) => void;
}) => {
  return (
    <div className="space-y-2">
      <ul className="flex gap-4 items-center flex-wrap">
        {skusWithColors.map(({ sku, color }, i) => (
          <li key={i}>
            <div
              key={i}
              onClick={()=> setSku(sku)}
              className={`w-5 h-5 rounded-full border border-black/60 relative rounded-border ${
                sku == slectedSku && "after:opacity-100 after:border-black after:border-2"
              }`}
              style={{ background: color }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorsSelection;
