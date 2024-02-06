import { useEffect } from "react";

const LocationSection = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className="self-stretch h-[671px] flex flex-col items-start justify-start py-0 pr-2 pl-[7px] box-border gap-[34px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-3xl text-black font-roboto mq750:gap-[34px]"
      data-animate-on-scroll
    >
      <div className="w-[308px] flex flex-col items-start justify-start gap-[8px]">
        <h3 className="m-0 self-stretch relative text-inherit tracking-[0.2px] leading-[28px] font-semibold font-inherit mq450:text-lg mq450:leading-[22px]">
          Where You’ll Be
        </h3>
        <div className="flex flex-row items-center justify-start gap-[3px] text-base">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/carbonlocation.svg"
          />
          <div className="relative capitalize">
            Tampaksiring, Bali, Indonesia
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 relative bg-goldenrod" />
    </div>
  );
};

export default LocationSection;
