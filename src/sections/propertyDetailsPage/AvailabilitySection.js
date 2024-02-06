import { useEffect } from "react";
import Calendar1 from "./Calendar1";

const AvailabilitySection = () => {
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
      className="self-stretch h-[511px] flex flex-col items-start justify-start py-0 px-[7px] box-border gap-[9px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] max-w-full text-left text-3xl text-shade-02 font-roboto"
      data-animate-on-scroll
    >
      <h3 className="m-0 relative text-inherit leading-[26px] font-semibold font-inherit inline-block max-w-[653.3200073242188px] mq750:max-w-full mq450:text-lg mq450:leading-[21px]">
        18 nights in Amherst
      </h3>
      <div className="w-[653.3px] overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-[19px] box-border max-w-full text-sm text-dimgray-100">
        <div className="h-[17px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
          <div className="relative leading-[18px]">
            Oct 20, 2023 - Nov 7, 2023
          </div>
        </div>
      </div>
      <Calendar1 />
    </div>
  );
};

export default AvailabilitySection;
