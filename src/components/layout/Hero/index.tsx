import Categorys from "@/features/Categories"
import FlashSales from "@/features/FlashSalses"
import OffersSlider from "@/features/OffersSlider"

const Hero = () => {
  return (
    <div className="screen-max-width">
      <section className="categorys-offers-slider flex pb-18">
        <Categorys />
        <OffersSlider />
      </section>

      <FlashSales />
    </div>

  )
}

export default Hero