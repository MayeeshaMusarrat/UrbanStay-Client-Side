import { useCallback, useEffect } from "react";

const ServiceSection = () => {
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

  const onLeftWrapperContainerClick = useCallback(() => {
    // Please sync "Sign_in_page" to the project
  }, []);

  const onRightWrapperContainerClick = useCallback(() => {
    // Please sync "Sign_in_page" to the project
  }, []);

  return (
    <section
      className="w-[1536px] h-[688px] flex flex-row flex-wrap items-center justify-center py-[127px] px-[84px] box-border bg-[url('/public/servicesection@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-sm text-white font-roboto"
      id="offer"
    >
      <div className="w-[1342px] flex flex-row flex-wrap items-center justify-center gap-[57px]">
        <div
          className="flex flex-col items-center justify-center gap-[15px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="w-[123px] flex flex-row items-center justify-center relative gap-[10px]">
            <div className="w-[111px] relative rounded-8xs [background:linear-gradient(65.05deg,_#2c2e97,_#4b55c4)] h-7 z-[0]" />
            <div className="w-[111px] absolute my-0 mx-[!important] top-[3.8px] left-[calc(50%_-_55px)] leading-[21px] capitalize font-medium flex items-center justify-center z-[1]">
              New Offer
            </div>
          </div>
          <b className="w-[667px] relative text-11xl tracking-[0.03px] leading-[39px] capitalize flex font-montserrat items-center justify-center h-[39px] shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Experience newer Offers with less hassle
          </b>
        </div>
        <div className="w-[1342px] flex flex-row items-center justify-center gap-[57px] text-left text-5xl font-montserrat">
          <div
            className="flex-1 rounded-3xs bg-gray-700 flex flex-row items-center justify-center p-[50px] gap-[73px] [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_slide-in-left] opacity-[0] cursor-pointer hover:box-border hover:border-[1px] hover:border-solid hover:border-white"
            onClick={onLeftWrapperContainerClick}
            data-animate-on-scroll
          >
            <img
              className="w-[45px] relative h-[45px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/icon@2x.png"
            />
            <div className="w-[436px] relative h-[140.6px]">
              <b className="absolute top-[44.8px] left-[-16px] tracking-[0.72px] leading-[28.8px] flex items-center w-[364px]">
                Looking for a way to rent?
              </b>
              <div className="absolute w-[calc(100%_+_54px)] top-[89.6px] right-[-38px] left-[-16px] flex flex-col items-start justify-start py-0 pr-[34px] pl-0 box-border text-mini">
                <div className="w-[456px] relative leading-[25.5px] flex items-center">
                  <span className="w-full">
                    <p className="m-0">
                      10 new offers every day. 3000+ offers on site, trusted by
                      a
                    </p>
                    <p className="m-0">community of thousands of users.</p>
                  </span>
                </div>
              </div>
              <div className="absolute w-[calc(100%_+_37px)] top-[-0.2px] right-[-21px] left-[-16px] flex flex-col items-start justify-start py-0 pr-[331px] pl-0 box-border text-base">
                <div className="relative tracking-[5px] leading-[28.8px] uppercase font-medium inline-block max-h-[28.799999237060547px] z-[0]">
                  URBANSTAY
                </div>
                <div className="w-[91px] absolute my-0 mx-[!important] h-full top-[0%] bottom-[0%] left-[35px] bg-gray-600 z-[1]" />
              </div>
            </div>
          </div>
          <div
            className="rounded-3xs bg-gray-700 flex flex-row items-center justify-center p-[50px] [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_slide-in-right] opacity-[0] cursor-pointer hover:box-border hover:border-[1px] hover:border-solid hover:border-white"
            onClick={onRightWrapperContainerClick}
            data-animate-on-scroll
          >
            <img
              className="w-[45px] relative h-[45px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/icon@2x.png"
            />
            <div className="w-[486px] relative h-[140.6px]">
              <div className="absolute top-[0px] left-[50px] w-[436px] h-[140.6px]">
                <b className="absolute top-[44.8px] left-[0px] tracking-[0.72px] leading-[28.8px]">
                  Looking for a way to host?
                </b>
                <div className="absolute w-[calc(100%_-_3px)] top-[89.6px] right-[1.5px] left-[1.5px] flex flex-col items-start justify-start py-0 pr-[19px] pl-0 box-border text-mini">
                  <div className="w-[414px] relative leading-[25.5px] flex items-center">
                    UrbanStay provides a trusted community and reliable policies
                    to ensure you can safely host your property.
                  </div>
                </div>
                <div className="absolute w-[calc(100%_+_37px)] top-[0px] right-[-37.5px] left-[0.5px] flex flex-col items-start justify-start py-0 pr-[331px] pl-0 box-border text-base">
                  <div className="relative tracking-[5px] leading-[28.8px] uppercase font-medium inline-block max-h-[28.799999237060547px] z-[0]">
                    URBANSTAY
                  </div>
                  <div className="w-[91px] absolute my-0 mx-[!important] h-full top-[0%] bottom-[0%] left-[35px] bg-gray-600 z-[1]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
