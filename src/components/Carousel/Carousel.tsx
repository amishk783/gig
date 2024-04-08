import React from "react";
import { Card } from "../Card";
import { EmblaOptionsType } from "embla-carousel";
import { EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./CaraouselDotButton";

import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: {
    title?: string;
    subTitle: string;
    price: string;
    color: string;
  }[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi!);

  return (
    <section className="max-w-[48rem] m-auto">
      <div className=" overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y ml-[0.5rem] mr-[0.5rem] gap-2">
          {slides.map((tataplayDetail) => (
            <div
              className=" min-w-0 flex-grow-0 flex-shrink-0 w-[90%]"
              key={tataplayDetail.title}
            >
              <Card
                key={tataplayDetail.title}
                title={tataplayDetail.title}
                color={tataplayDetail.color}
                subTitle={tataplayDetail.subTitle}
                price={tataplayDetail.price}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pt-5 gap-2">
        <div className="flex flex-wrap justify-center items-center mr-[0.5rem] gap-5">
          {scrollSnaps.map((_, index: number) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"bg-transparent touch-manipulation inline-flex cursor-pointer w-4 h-4 items-center justify-center rounded-full border-2".concat(
                index === selectedIndex ? " bg-white border-red-500 ring-2 ring-yellow-50 drop-shadow-2xl" : " border-red-100"
              )}
            ></DotButton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
