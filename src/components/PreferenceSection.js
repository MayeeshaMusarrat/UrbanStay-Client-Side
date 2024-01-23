import { useEffect } from "react";

const PreferenceSection = () => {
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
      className="self-stretch h-[1182px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[75px] px-11 box-border gap-[55px] text-center text-sm text-white font-roboto"
      id="preference"
    >
      <div
        className="h-[101px] flex flex-col items-center justify-center py-0 px-[340px] box-border gap-[16px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        data-animate-on-scroll
      >
        <div className="rounded-8xs [background:linear-gradient(65.05deg,_#2c2e97,_#4b55c4)] flex flex-row items-center justify-center py-[3px] px-[21px]">
          <div className="relative leading-[21px] capitalize font-medium">
            Preference
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row flex-wrap items-center justify-center text-11xl text-darkslategray font-montserrat">
          <b className="relative tracking-[0.03px] leading-[39px] capitalize">
            Select Suitable Properties that Fit your taste!
          </b>
        </div>
        <div className="w-20 relative box-border h-0.5 overflow-hidden shrink-0 border-t-[0.8px] border-solid border-midnightblue-100" />
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
        <div
          className="self-stretch h-[400px] flex flex-row flex-wrap items-center justify-center gap-[24px] [&.animate]:animate-[1s_ease-out_0.5s_1_normal_forwards_slide-in-bottom] opacity-[0]"
          data-animate-on-scroll
        >
          <img
            className="rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/pic1@2x.png"
          />
          <img
            className="rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/pic2@2x.png"
          />
          <img
            className="rounded-3xs max-w-full overflow-hidden max-h-full object-cover hover:animate-[1s_ease-in-out_0s_1_normal_forwards_shadow-inset-center] hover:opacity-[1]"
            alt=""
            src="/pic3@2x.png"
          />
        </div>
        <div
          className="self-stretch h-[400px] flex flex-row flex-wrap items-center justify-center gap-[24px] [&.animate]:animate-[1s_ease_0.75s_1_normal_forwards_slide-in-bottom] opacity-[0]"
          data-animate-on-scroll
        >
          <img
            className="rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/pic4@2x.png"
          />
          <img
            className="rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/pic5@2x.png"
          />
          <img
            className="rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/pic6@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default PreferenceSection;
