import NextPrevArrowBtn from "./NextPrevArrowBtn"


export default function CarouselButtons() {

    return (
        <div className="md:ms-auto flex gap-2 max-md:self-center">
            <NextPrevArrowBtn
                typeBtn="prev"
                disabled
                className="emblaCarousel_PrevBtn"
                id="prev"
            />
            <NextPrevArrowBtn
                typeBtn="next"
                disabled
                className="emblaCarousel_nextBtn"
                id="next"
            />
        </div>
    )
}