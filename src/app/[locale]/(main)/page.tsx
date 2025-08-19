import Hero from '@/components/layout/Hero';
import BestSellings from '@/features/BestSellings';
import BrowseByCategory from '@/features/BrowseByCategory';
import CampaignOffer from '@/features/CampaignOffer';
import FlashSales from '@/features/FlashSalses';
import NewArrival from '@/features/NewArrival';
import OurProducts from '@/features/OurProducts';
import TrustBadges from '@/components/shared/TrustBadges';

export default function HomePage() {
  return (
    <div className="screen-max-width">
      <Hero />
      <FlashSales />
      <BrowseByCategory />
      <BestSellings />
      <CampaignOffer />
      <OurProducts />
      <NewArrival />
      <TrustBadges />
    </div>
  )
}
