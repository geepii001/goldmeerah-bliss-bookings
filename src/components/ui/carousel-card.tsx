'use client'
import { useState, useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { AutoplayOptionsType } from 'embla-carousel-autoplay'
// First install the package using: npm install embla-carousel-autoplay
import Autoplay from 'embla-carousel-autoplay'

// Define the type for card data
interface CardData {
  id: number;
  imgUrl: string;
  content: string;
}

interface CardProps {
  data: CardData[];
  showCarousel?: boolean;
  cardsPerView?: number;
}

const Card = ({ data, showCarousel = true, cardsPerView = 3 }: CardProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, setScrollSnaps, onSelect]);

  if (!showCarousel) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((card) => (
          <div key={card.id} className="bg-card rounded-lg shadow-lg overflow-hidden">
            <img src={card.imgUrl} alt={card.content} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-card-foreground text-center">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.map((card) => (
            <div className="embla__slide" key={card.id}>
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <img src={card.imgUrl} alt={card.content} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <p className="text-card-foreground text-center">{card.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots mt-4 flex justify-center">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`embla__dot w-3 h-3 mx-1 rounded-full bg-primary ${index === selectedIndex ? "opacity-100" : "opacity-30"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;