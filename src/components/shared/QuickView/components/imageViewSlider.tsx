import React, { useState } from "react";
import EmblaCarousel from "../../../ui/EmblaCarousel";
import Image from "next/image";
import { useMobileCheck } from "@/contexts/MobileCheckContext";
import CustomImage from "@/components/ui/CustomImag";
import { ProductImage } from "@/entities/Product/types/productType";

const ImageViewSlider = ({
  images,
  maxImageNumber,
}: {
  images: ProductImage[];
  maxImageNumber?: number;
}) => {
  const isMobile = useMobileCheck();

  return isMobile ? (
    <MobileImageSlider {...{ images }} />
  ) : (
    <DeskTopImageSlider {...{ images }} maxImageNumber={maxImageNumber} />
  );
};

export default ImageViewSlider;

const MobileImageSlider = ({ images }: { images: ProductImage[] }) => (
  <EmblaCarousel btns={false} options={{ dragFree: false }}>
    <div className="flex gap-3 md:gap-4">
      {images.map(({ url, alt }, i) => (
        <div
          className="w-9/12 max-w-150 h-55 shrink-0 bg-skeleton flex-center p-2 rounded-xl md:rounded-xl "
          key={i}
        >
          <CustomImage
            width={150}
            height={150}
            src={url}
            alt={alt}
            className="object-contain w-9/12 h-full"
          />
        </div>
      ))}
    </div>
  </EmblaCarousel>
);

const DeskTopImageSlider = ({
  images,
  maxImageNumber,
}: {
  images: ProductImage[];
  maxImageNumber?: number;
}) => {
  const [current, setcurrent] = useState(0);

  return (
    <div className="flex max-sm:w-full gap-3 md:gap-4 h-[484px] md:h-[496px]">
      <div className="flex flex-col gap-3 md:gap-4 scrollbar-thin flex-shrink-0 rtl:[direction:ltr] ltr:[direction:rtl] pe-1">
        {images.slice(0, maxImageNumber ?? 4).map(({ url, alt }, i) => (
          <div
            key={i}
            className={`${
              i == current && "animate_quickSlider"
            } blur-[1.5px] grayscale-25 w-31 h-28 aspect-square bg-skeleton flex-center p-3 rounded-xl cursor-pointer transition-apple flex-shrdink-0`}
            onMouseMove={() => setcurrent(i)}
          >
            <Image
              width={50}
              height={50}
              src={url}
              alt={alt}
              className="object-contain w-9/12"
            />
          </div>
        ))}
      </div>

      <div className="md:w-[448px] w-full h-full bg-skeleton flex-center p-2 rounded-xl cursor-zoom-in">
        <CustomImage
          width={200}
          height={200}
          src={images[current].url}
          alt={images[current].alt}
          className="object-contain w-9/12"
        />
      </div>
    </div>
  );
};
