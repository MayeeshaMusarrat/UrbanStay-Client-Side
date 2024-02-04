import { useEffect } from "react";
import CalendarInPropertyDetailsPage from "./CalendarInPropertyDetailsPage";

const CalendarSection = () => {
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
      className="absolute top-[calc(50%_-_634px)] left-[calc(50%_-_692px)] flex flex-col items-start justify-start gap-[10px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-3xl text-gray-200 font-roboto"
      data-animate-on-scroll
    >
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <div className="w-[653.3px] flex flex-col items-start justify-start py-0 pr-[447.32000732421875px] pl-0 box-border">
          <div className="relative leading-[26px] font-semibold inline-block max-w-[653.3200073242188px]">
            18 nights in Amherst
          </div>
        </div>
        <div className="w-[653.3px] relative h-9 overflow-hidden shrink-0 text-sm text-dimgray-100">
          <div className="absolute top-[-0.8px] left-[0px] leading-[18px]">
            Oct 20, 2023 - Nov 7, 2023
          </div>
        </div>
      </div>
      <CalendarInPropertyDetailsPage />
    </div>
  );
};

export default CalendarSection;