import IconShopIcon from "@/assets/icons/IconShop";
import StatCard from "./StatCard";
import IconSaleIcon from "@/assets/icons/IconSale";
import IconShoppingbagIcon from "@/assets/icons/IconShoppingbag";
import IconMoneybagIcon from "@/assets/icons/IconMoneybag";
import { useTranslations } from "next-intl";

const StatsSection = () => {
  const stats = useTranslations("about").raw("stats") as string[];
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
      <StatCard icon={<IconShopIcon />} value="10.5k" description={stats[0]} />
      <StatCard
        icon={<IconSaleIcon />}
        value="33k"
        description={stats[1]}
        isHighlighted={true}
      />
      <StatCard
        icon={<IconShoppingbagIcon />}
        value="45.5k"
        description={stats[2]}
      />
      <StatCard
        icon={<IconMoneybagIcon />}
        value="25k"
        description={stats[3]}
      />
    </section>
  );
};

export default StatsSection;
