import Categorys from "@/features/Categories"
import OffersSlider from "@/features/OffersSlider"

const Hero = () => {
  return (
    <section className="categorys-offers-slider flex pb-10 md:pb-18 relative">
      <Categorys />
      <OffersSlider />
    </section>
  )
}

export default Hero