import { useEffect } from "react";

const FeaturedSection = () => {
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
      className="w-[1538px] overflow-hidden flex flex-col items-center justify-start py-[86px] px-[121px] box-border gap-[50px] bg-[url('/public/featuredsection@3x.png')] bg-cover bg-no-repeat bg-[top] [&.animate]:animate-[1s_ease-out_0s_1_normal_forwards_slide-in-bottom] opacity-[0] text-center text-sm text-shade-01 font-roboto"
      id="featured"
      data-scroll-to="featuredSection"
      data-animate-on-scroll
    >
      <div
        className="flex flex-col items-center justify-center gap-[16px] [&.animate]:animate-[1s_ease_1s_1_normal_forwards_slide-in-bottom] opacity-[0]"
        data-animate-on-scroll
      >
        <div className="w-[52.4px] relative rounded-8xs [background:linear-gradient(64.3deg,_#2c2e97,_#4b55c4)] h-7">
          <div className="absolute top-[4px] left-[calc(50%_-_11.3px)] leading-[21px] capitalize font-medium">
            Our
          </div>
        </div>
        <b className="relative text-11xl tracking-[0.03px] leading-[39px] capitalize font-montserrat">
          Featured Property
        </b>
        <div className="w-20 relative box-border h-0.5 overflow-hidden shrink-0 border-t-[0.8px] border-solid border-shade-01" />
      </div>
      <div className="self-stretch relative h-[606px] text-left text-darkgray-200 font-montserrat">
        <div
          className="absolute top-[calc(50%_-_166px)] left-[calc(50%_-_625px)] rounded-xl bg-shade-01 shadow-[6.7px_7.4px_12.5px_rgba(0,_128,_255,_0.07)] w-[496px] overflow-hidden flex flex-row items-center justify-center py-[27px] px-[30px] box-border [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_slide-in-right] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="flex flex-col items-start justify-start gap-[22px]">
            <div className="relative tracking-[5px] leading-[21px] uppercase font-medium font-roboto">
              GULSHAN
            </div>
            <div className="w-[311px] flex flex-row items-center justify-start text-2xl text-slateblue-100">
              <b className="relative tracking-[0.63px] leading-[25.25px]">
                Spring Way
              </b>
              <div className="flex flex-col items-start justify-start pt-[1.600000023841858px] pb-[3.6399998664855957px] pr-[0.0800018310546875px] pl-[15px] text-3xs text-shade-01 font-roboto">
                <div className="rounded-4xs bg-darkslategray-200 flex flex-row items-start justify-start pt-[5px] px-[15px] pb-[3px]">
                  <div className="relative tracking-[0.63px] leading-[12px] uppercase font-medium">
                    Open house
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center text-mid text-black">
              <div className="relative leading-[20.4px] font-medium">
                BDT 1,50,000
              </div>
            </div>
            <div className="w-[406px] relative h-[100px] text-smi text-gray-200 font-roboto">
              <i className="absolute top-[11px] left-[0px] leading-[14px] inline-block font-light w-[360px] h-[102px]">
                Nestled in one of Dhaka's most prestigious neighborhoods, this
                palatial mansion boasts an impressive façade with intricate
                architectural details, making a statement of grandeur from the
                moment you arrive. As you step inside, you are greeted by a
                grand foyer adorned with sparkling chandeliers and marble
                floors, setting the tone for the extravagance that lies within.
              </i>
            </div>
            <div className="w-[416px] relative h-[21px] text-darkslategray-200">
              <div className="absolute top-[1.6px] left-[0px] w-[84.2px] h-[18px]">
                <div className="absolute top-[2px] left-[0px] overflow-hidden flex flex-row items-center justify-center max-w-[84.16000366210938px]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/doublebedsvg.svg"
                  />
                </div>
                <div className="absolute top-[0px] left-[23px] leading-[16.8px] font-medium">
                  Bed : 5
                </div>
              </div>
              <div className="absolute top-[1.6px] left-[84.2px] box-border w-[101px] h-[18px] border-l-[0.8px] border-solid border-gray-800">
                <div className="absolute top-[2px] left-[15.8px] overflow-hidden flex flex-row items-center justify-center max-w-[100.98999786376953px]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/bathroomsvg.svg"
                  />
                </div>
                <div className="absolute top-[0px] left-[38.8px] leading-[16.8px] font-medium">
                  Baths :
                </div>
              </div>
              <div className="absolute top-[2px] left-[185px] box-border w-[175px] h-[18px] border-l-[0.8px] border-solid border-gray-800">
                <div className="absolute top-[2px] left-[15.8px] overflow-hidden flex flex-row items-center justify-center max-w-[124.83999633789062px]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/squarerulertoolsvg.svg"
                  />
                </div>
                <div className="absolute top-[0px] left-[38.8px] leading-[16.8px] font-medium">
                  Sq Ft : 5000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-[calc(50%_-_295px)] left-[calc(50%_-_204px)] rounded-mini w-[828px] h-[624px] flex flex-row items-start justify-center py-10 px-0 box-border bg-[url('/public/image@3x.png')] bg-cover bg-no-repeat bg-[top] [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_slide-in-bottom] opacity-[0] text-right text-base-5 text-slateblue-100 font-roboto"
          data-animate-on-scroll
        >
          <div className="w-[229px] my-0 mx-[!important] absolute top-[40px] left-[586px] flex flex-col items-end justify-center py-0 pr-2.5 pl-0 box-border gap-[141px] z-[0]">
            <div className="rounded-8xs bg-shade-01 flex flex-row items-center justify-center py-1.5 px-4">
              <b className="relative leading-[23.28px] capitalize">Featured</b>
            </div>
            <div className="bg-midnightblue-100 flex flex-row items-center justify-center py-[7px] px-[5px] text-center text-3xl text-shade-01 font-montserrat">
              <div className="relative tracking-[5px] leading-[26.4px] capitalize font-semibold">
                FAMILY HOME
              </div>
            </div>
            <div className="w-[231px] relative h-[151px]">
              <div className="absolute right-[0px] bottom-[15px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-slateblue-100 w-[100px] h-[87px]" />
              <img
                className="absolute right-[2px] bottom-[0px] w-[228px] h-[151px] object-cover"
                alt=""
                src="/homesignature@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;