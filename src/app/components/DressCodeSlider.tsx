import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { Dialog, DialogContent } from "./ui/dialog";

type DressCodeSliderProps = {
  images: { src: string; alt: string }[];
};

export default function DressCodeSlider({ images }: DressCodeSliderProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    update();
    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const showPrevInLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const showNextInLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") showPrevInLightbox();
      if (event.key === "ArrowRight") showNextInLightbox();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, images.length]);

  return (
    <>
      <div className="mx-auto w-full max-w-3xl">
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
          <CarouselContent className="-ml-0">
            {images.map((image, index) => (
              <CarouselItem key={index} className="basis-full pl-0">
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="block w-full cursor-zoom-in overflow-hidden rounded-lg bg-white shadow-lg"
                  aria-label={`Открыть ${image.alt} в полный экран`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="mx-auto max-h-[min(70vh,640px)] w-full object-contain"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            variant="outline"
            className="left-2 size-10 border-[#525834] bg-white/90 text-[#525834] hover:bg-[#525834] hover:text-white"
          />
          <CarouselNext
            variant="outline"
            className="right-2 size-10 border-[#525834] bg-white/90 text-[#525834] hover:bg-[#525834] hover:text-white"
          />
        </Carousel>

        {count > 1 && (
          <div className="mt-4 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Слайд ${index + 1}`}
                aria-current={index === current ? "true" : undefined}
                onClick={() => api?.scrollTo(index)}
                className={`size-2 rounded-full transition-colors ${
                  index === current ? "bg-[#525834]" : "bg-[#525834]/30 hover:bg-[#525834]/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent
          className="flex max-h-[96vh] max-w-[96vw] items-center justify-center border-0 bg-black/95 p-0 shadow-none sm:max-w-[96vw] [&>button.ring-offset-background]:hidden"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-3 right-3 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Закрыть"
          >
            <X className="size-6" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrevInLightbox}
                className="absolute left-3 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft className="size-7" />
              </button>
              <button
                type="button"
                onClick={showNextInLightbox}
                className="absolute right-3 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                aria-label="Следующее фото"
              >
                <ChevronRight className="size-7" />
              </button>
            </>
          )}

          <img
            src={images[lightboxIndex]?.src}
            alt={images[lightboxIndex]?.alt}
            className="max-h-[92vh] max-w-[92vw] object-contain"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
