import Categorys from "@/entities/Categories";
import OffersSlider from "@/features/OffersSlider/components/OffersSlider";

const Hero = () => {
  return (
    <section className="categorys-offers-slider flex pb-10 md:pb-18 relative">
      <div className="hidden md:block">
        <Categorys />
      </div>
      <OffersSlider />
    </section>
  );
};

export default Hero;
