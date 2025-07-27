import BestSellings from "@/features/BestSellings"
import BrowseByCategory from "@/features/BrowseByCategory"
import CampaignOffer from "@/features/CampaignOffer"
import Categorys from "@/features/Categories"
import FlashSales from "@/features/FlashSalses"
import NewArrival from "@/features/NewArrival"
import OffersSlider from "@/features/OffersSlider"
import OurProducts from "@/features/OurProducts"
import StickyBtns from "@/features/StickyBtns"
import TrustBadges from "@/features/TrustBadges"

const Hero = () => {
  return (
    <div className="screen-max-width">
      <section className="categorys-offers-slider flex pb-10 md:pb-18">
        <Categorys />
        <OffersSlider />
      </section>

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

export default Hero