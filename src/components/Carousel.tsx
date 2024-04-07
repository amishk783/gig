import React from "react";
import { Card } from "./Card";
import { EmblaOptionsType } from "embla-carousel";
// import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

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

  //   const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //     useDotButton(emblaApi);


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

      <div className="embla__controls">
        {/* <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Carousel;
