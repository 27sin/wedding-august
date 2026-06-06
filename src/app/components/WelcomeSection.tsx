import { useEffect, useRef, useState } from "react";
import coupleLeft from "../../assets/welcome/couple-left.png";
import coupleRight from "../../assets/welcome/couple-right.png";

const FINISH_BELOW_CENTER = 200;
const IMAGE_MOVEMENT = 100;

type WelcomeSectionProps = {
  variant: "desktop" | "mobile";
};

export default function WelcomeSection({ variant }: WelcomeSectionProps) {
  const isDesktop = variant === "desktop";
  const imagesRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(IMAGE_MOVEMENT);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setOffset(0);
      return;
    }

    const updateOffset = () => {
      const container = imagesRef.current;
      if (!container) return;

      const { top, height } = container.getBoundingClientRect();
      const containerCenter = top + height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distanceFromCenter = containerCenter - viewportCenter;

      const progress = Math.min(
        1,
        Math.max(
          0,
          (FINISH_BELOW_CENTER + IMAGE_MOVEMENT - distanceFromCenter) /
            IMAGE_MOVEMENT,
        ),
      );
      setOffset(IMAGE_MOVEMENT * (1 - progress));
    };

    updateOffset();
    window.addEventListener("scroll", updateOffset, { passive: true });
    window.addEventListener("resize", updateOffset);

    return () => {
      window.removeEventListener("scroll", updateOffset);
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <section className="px-4 py-20">
      <div
        className={`mx-auto w-full overflow-hidden bg-white ${
          isDesktop ? "max-w-[900px] rounded-[32px]" : "max-w-full rounded-2xl"
        } border border-[rgba(82,88,52,0.32)]`}
      >
        <div className="flex flex-col items-center pt-10">
          <div className={`w-full ${isDesktop ? "max-w-3xl" : "px-3"}`}>
            <h2 className="text-center font-['Playfair_Display'] text-[36px] font-medium leading-10 text-[#525834]">
              Дорогие друзья!
            </h2>

            <div className="pt-8 text-center font-['Open_Sans'] text-lg leading-[29px] text-[#4b4d4d]">
              {isDesktop ? (
                <>
                  <p className="mb-2">
                    С огромной радостью и трепетом в сердцах мы приглашаем вас присоединиться
                    <br />
                    к значимому для нас событию — дню нашей свадьбы!
                  </p>
                  <p>
                    Этот день станет началом новой главы в нашей совместной истории,
                    <br />
                    мы будем безмерно счастливы, если вы разделите с нами эти радостные моменты.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-2">
                    С огромной радостью и трепетом
                    <br />
                    в сердцах мы приглашаем вас присоединиться к значимому
                    <br />
                    для нас событию —
                    <br />
                    дню нашей свадьбы!
                  </p>
                  <p>
                    Этот день станет началом новой главы в нашей совместной истории,
                    <br />
                    мы будем безмерно счастливы, если вы разделите с нами эти радостные моменты.
                  </p>
                </>
              )}
            </div>
          </div>

          <div
            ref={imagesRef}
            className={`relative w-full ${
              isDesktop ? "h-[532px]" : "h-[282px]"
            }`}
          >
            <img
              src={coupleLeft}
              alt=""
              className={`absolute top-8 z-10 object-cover ${
                isDesktop
                  ? "left-[calc(50%-114px)] size-[500px]"
                  : "left-[calc(50%-57px)] size-[250px]"
              }`}
              style={{
                transform: `translate(calc(-50% - ${offset}px), 0)`,
              }}
            />
            <img
              src={coupleRight}
              alt=""
              className={`absolute top-8 object-cover ${
                isDesktop
                  ? "left-[calc(50%+114px)] size-[500px]"
                  : "left-[calc(50%+57px)] size-[250px]"
              }`}
              style={{
                transform: `translate(calc(-50% + ${offset}px), 0)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
