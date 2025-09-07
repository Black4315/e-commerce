import Hero from "@/components/layout/Hero";
import BestSellingsSection from "@/features/BestSellings/components/BestSellingsSection";
import BrowseByCategory from "@/features/BrowseByCategory";
import CampaignOffer from "@/features/CampaignOffer/components/CampaignOffer";
import FlashSales from "@/features/FlashSalses/components/FlashSalesSection";
import NewArrival from "@/features/NewArrival/components/NewArrival";
import OurProductsSection from "@/features/OurProducts/components/OurProductsSection";
import TrustBadges from "@/components/shared/TrustBadges";

export default function HomePage() {
  return (
    <div className="screen-max-width">
      <Hero />
      <FlashSales />
      <BrowseByCategory />
      <BestSellingsSection />
      <CampaignOffer />
      <OurProductsSection />
      <NewArrival />
      <TrustBadges />
    </div>
  );
}
