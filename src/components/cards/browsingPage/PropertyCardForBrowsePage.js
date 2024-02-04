import { useEffect } from "react";

const PropertyCardForBrowsePage = () => {
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
      className="[text-decoration:none] h-[429px] w-[324px] relative [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-sm text-shade-02 font-body-copy-14pt-regular hover:cursor-pointer font-poppins"
      data-animate-on-scroll
    >
      <img 
        className="absolute top-[0px] left-[0px] rounded-xl w-[324px] h-[308px] object-cover"
        loading="lazy"
        alt="Property"
        src="/pic3@2x.png" 
      />
      <div className="absolute top-[16px] left-[16px] rounded bg-shade-01 hidden flex-row items-start justify-start py-1 px-2">
        <div className="relative font-semibold">Superhost</div>
      </div>
      <img
        className="absolute top-[16px] left-[284px] w-6 h-6 overflow-hidden"
        alt=""
        src="/heart.svg"
      />
      <div className="absolute top-[324px] left-[0px] flex flex-col items-start justify-start gap-[8px] text-neutral-08">
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="relative font-semibold text-shade-02">
            Private room in San Francisco
          </div>
          <div className="relative">{`Private Room & Balcony-Connected...`}</div>
          <div className="relative">Oct 23 - 28</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <div className="w-[37px] relative h-[17px] hidden">
            <div className="absolute top-[0px] left-[0px] w-[37px] h-[17px]">
              <div className="absolute top-[0px] left-[0px] font-semibold">
                $289
              </div>
              <div className="absolute top-[8.5px] left-[-0.5px] bg-neutral-08 box-border w-[38px] h-px border-t-[1px] border-solid border-neutral-08" />
            </div>
          </div>
          <div className="relative text-shade-02">
            <span className="font-semibold">$289</span>
            <span> night</span>
          </div>
          <div className="w-0.5 relative rounded-[50%] bg-neutral-08 h-0.5" />
          <div className="relative">$120 total</div>
        </div>
      </div>
      <div className="absolute top-[324px] left-[235px] flex flex-row items-center justify-end gap-[4px] font-poppins">
        <img
          className="w-4 relative rounded-12xs-5 h-4"
          alt=""
          src="/star-1.svg"
        />
        <div className="relative">4.91</div>
        <div className="relative font-body-copy-14pt-regular">(484)</div>
      </div>
      <img
        className="absolute top-[294px] left-[138px] w-[49px] h-1.5"
        alt=""
        src="/ellipses.svg"
      />
      <div className="absolute top-[16px] left-[16px] rounded bg-shade-01 flex flex-row items-start justify-start py-1 px-2 text-gray-200 ">
        <div className="relative font-semibold">Guesthouse</div>
      </div>
    </div>
  );
};

export default PropertyCardForBrowsePage;