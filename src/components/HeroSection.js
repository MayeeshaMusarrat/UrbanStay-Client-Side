import { useEffect } from "react";
import SearchComponent from "./SearchComponent";

const HeroSection = () => {
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
    <section
      className="self-stretch h-[659px] flex flex-col items-center justify-center relative gap-[10px] bg-[url('/public/herosection@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-43xl text-white font-plus-jakarta-sans"
      id="hero"
    >
      <div className="w-[1529px] absolute my-0 mx-[!important] top-[439px] left-[1px] bg-midnightblue-400 h-[220px] z-[0]" />
      <div
        className="h-[644px] my-0 mx-[!important] absolute top-[calc(50%_-_321.5px)] left-[calc(50%_-_757px)] overflow-hidden shrink-0 flex flex-col items-center justify-end py-[74px] px-0 box-border gap-[172px] [&.animate]:animate-[1s_ease-out_1s_1_normal_forwards_slide-in-top] opacity-[0] z-[1]"
        data-animate-on-scroll
      >
        <div
          className="self-stretch flex flex-col items-center justify-center [&.animate]:animate-[1s_ease-in-out_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <b className="w-[1513px] relative flex items-center justify-center [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Find the Best Services Available
          </b>
          <b className="w-[1513px] relative flex items-center [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))]">
            <span className="w-full">
              <span>for House</span>
              <span className="text-midnightblue-300">{` `}</span>
              <span>{`Renting & Hosting`}</span>
            </span>
          </b>
        </div>
        <SearchComponent />
      </div>
    </section>
  );
};

export default HeroSection;
