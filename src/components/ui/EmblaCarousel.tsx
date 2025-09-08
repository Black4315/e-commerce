import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { useMobileCheck } from "@/contexts/MobileCheckContext";
import { useIsRTL } from "@/hooks/useIsRTL";

export type EmblaCarouselHandle = {
  prevBtnDisabled?: boolean;
  nextBtnDisabled?: boolean;
  onPrevButtonClick?: () => void;
  onNextButtonClick?: () => void;
};

type PropType = {
  moreOneRow?: boolean;
  className?: string;
  btnClassName?: string;
  children: ReactNode;
  options?: EmblaOptionsType;
  btns?: boolean;
  dots?: boolean;
};

const EmblaCarousel = forwardRef<EmblaCarouselHandle, PropType>(
  (
    {
      moreOneRow,
      options,
      children,
      className,
      btnClassName,
      btns = true,
      dots,
    },
    ref
  ) => {
    const isMobile = useMobileCheck();
    const isRTL = useIsRTL();

    const [emblaRef, emblaApi] = useEmblaCarousel({
      direction: isRTL ? "rtl" : "ltr",
      watchDrag: isMobile,
      dragFree: true,
      loop: false,
      ...options,
    });
    const [scrollProgress, setScrollProgress] = useState(0);
    const [scrollSnaps, setscrollSnaps] = useState(emblaApi?.scrollSnapList() ?? Array(5));
    const selectedIndex = emblaApi?.selectedScrollSnap() ?? 0;

    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
      const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
      setScrollProgress(progress * 100);
    }, []);

    useEffect(() => {
      if (!emblaApi) return;

      onScroll(emblaApi);
      emblaApi
        .on("reInit", onScroll)
        .on("scroll", onScroll)
        .on("slideFocus", onScroll);

      setscrollSnaps(emblaApi.scrollSnapList());
    }, [emblaApi, onScroll]);

    const click = useCallback(
      (clickCllback: () => void) => {
        //  i did that if there is morethan one rows in embla due to it works with flex box not suppourt grid so i need to click twice to make it slide correctely
        clickCllback();

        moreOneRow && clickCllback();
      },
      [moreOneRow]
    );
    return (
      <div className={`relative ${dots && " mb-9"}`}>
        {btns && (
          <div
            className={cn(
              "md:ms-auto flex w-fit gap-2 max-md:self-center absolute -top-19.5 md:-top-[107px] md:end-0 max-md:justify-center max-md:w-full !z-9 bg-white",
              btnClassName
            )}
          >
            <PrevButton
              onClick={() => click(onPrevButtonClick)}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={() => click(onNextButtonClick)}
              disabled={nextBtnDisabled}
            />
          </div>
        )}

        {dots && (
          <div className="flex gap-2 items-center absolute -bottom-5 rtl:end-1/2 ltr:start-1/2 -translate-x-1/2">
            <DotsProgress
              scrollProgress={scrollProgress}
              scrollSnaps={scrollSnaps}
              max={5}
            />

            {scrollSnaps.length > 5 && (
              <div className="text-xs text-black me-2">
                +{scrollSnaps.length - 5}
              </div>
            )}
          </div>
        )}

        <div className={cn("overflow-x-hidden", className)} ref={emblaRef}>
          {children}
        </div>
      </div>
    );
  }
);
export default EmblaCarousel;

export const DotsProgress = ({
  scrollProgress,
  scrollSnaps,
  max = 7,
}: {
  scrollProgress: number;
  scrollSnaps: number[];
  max?: number;
}) => {
  const total = scrollSnaps.length;
  const cappedMax = Math.max(0, Math.min(max, total));

  // Normalize scrollProgress (0–100%) into dot space (0 to max-1)
  // if ((scrollProgress / 100) * total) = 2 and max = 3 =>>>>>>> progress should be 0.5 by i-1 / n-1 = 0.5
  // i didnt make i-1 here cuz it start from 0
  const progressRatio = Math.min(
    1,
    Math.round((scrollProgress / 100) * (total - 1)) / (cappedMax - 1)
  );
  const activeDot = progressRatio * cappedMax;

  // Adjust progress bar width to fit within dot range
  const adjustedProgress = progressRatio * 100;

  return (
    <div className="min-w-20 gap-2 group bg-black rounded-full z-1 flex justify-between items-center h-0.5 relative">
      {/* Dots */}
      {[...Array(cappedMax)].map((_, i) => (
        <div
          key={i}
          className="block w-2 h-2 ease-linear bg-black rounded-full shrink-0 z-2 transition-all delay-150"
          style={{
            background: i <= activeDot ? "#DB4444" : "black",
          }}
        />
      ))}

      {/* Progress Bar */}
      <div
        className="w-0 ease-linear bg-secondary-3 flex justify-between items-center h-0.5 start-[1px] absolute bottom-0 transition-all"
        style={{ width: `calc(${adjustedProgress}% - 1px)` }}
      />
    </div>
  );
};
