import { useEffect } from "react";
import SearchComponent from "../../components/bars/SearchComponent";

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
      className="self-stretch h-[671px] flex flex-col items-center justify-center relative gap-[10px] text-center text-43xl text-white font-plus-jakarta-sans"
      id="hero"
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_fade-in] opacity-[0] z-[0]"
        loading="eager"
        alt=""
        src="/herosection@3x.png"
        data-animate-on-scroll
      />
      <div className="w-[1530px] h-[656px] my-0 mx-[!important] absolute top-[calc(50%_-_321.5px)] left-[calc(50%_-_765px)] overflow-hidden shrink-0 flex flex-col items-center justify-end py-[74px] px-0 box-border gap-[172px] z-[1]">
        <div
          className="self-stretch flex-1 overflow-hidden max-h-full max-w-full absolute my-0 mx-[!important] top-[431px] right-[-9px] bottom-[-7px] left-[-7px] bg-midnightblue-400 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0] z-[0]"
          data-animate-on-scroll
        />
        <div
          className="self-stretch flex flex-col items-center justify-center [&.animate]:animate-[1s_ease-in-out_0.8s_1_normal_forwards_fade-in] opacity-[0] z-[1]"
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