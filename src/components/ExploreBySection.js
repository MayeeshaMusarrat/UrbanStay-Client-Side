import { useEffect } from "react";

const ExploreBySection = () => {
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
      className="w-[1544px] bg-midnightblue-200 h-[398px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 pr-[50px] pl-0 box-border relative text-left text-21xl text-white font-lato"
      id="explore"
      data-scroll-to="exploreBySection"
    >
      <img
        className="max-w-full overflow-hidden max-h-full object-cover z-[0]"
        alt=""
        src="/decor1@2x.png"
      />
      <div className="flex flex-row items-center justify-center gap-[38px] z-[1]">
        <div
          className="flex flex-col items-start justify-center gap-[15px] [&.animate]:animate-[1s_ease-out_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="w-[262px] relative leading-[45px] font-black flex items-center h-[111px] shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Explore By Property Type
          </div>
          <div className="w-[263px] relative h-[21px]">
            <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[7.73px]">
              <div className="w-4 relative rounded-11xl bg-slateblue-100 h-1.5" />
              <div className="w-[46px] relative rounded-11xl bg-slateblue-100 h-1.5" />
            </div>
          </div>
          <b className="w-[276px] relative text-base leading-[25px] flex items-center h-[63px] shrink-0">
            UrbanStay offers 3000+ property listings for you to choose!
          </b>
        </div>
        <div
          className="overflow-x-auto flex flex-row items-center justify-center gap-[45px] [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_slide-in-right] opacity-[0] text-center text-5xl text-midnightblue-300"
          data-animate-on-scroll
        >
          <div className="w-56 relative rounded-3xs [background:linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_#fff] h-[264px] shrink-0">
            <img
              className="absolute top-[22px] left-[35px] w-[154px] h-[127px] object-cover"
              alt=""
              src="/workspaceicon-1@2x.png"
            />
            <b className="absolute top-[165px] left-[0px] leading-[50px] flex items-center justify-center w-56 h-[51px]">
              Offices
            </b>
          </div>
          <div className="w-56 relative rounded-3xs [background:linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_#fff] h-[264px] shrink-0">
            <img
              className="absolute top-[33px] left-[47px] w-[129px] h-[116px] object-cover"
              alt=""
              src="/houseicon-1@2x.png"
            />
            <b className="absolute top-[165px] left-[0px] leading-[50px] flex items-center justify-center w-56 h-[51px]">
              Houses
            </b>
          </div>
          <div className="w-56 relative rounded-3xs [background:linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_#fff] h-[264px] shrink-0">
            <img
              className="absolute top-[calc(50%_-_109px)] left-[calc(50%_-_63px)] w-[136px] h-[133px] object-cover"
              alt=""
              src="/apartmenticon-1@2x.png"
            />
            <b className="absolute top-[calc(50%_+_33px)] left-[calc(50%_-_112px)] leading-[50px] flex items-center justify-center w-56 h-[51px]">
              Apartments
            </b>
          </div>
          <div className="w-56 relative rounded-3xs [background:linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_#fff] h-[264px] shrink-0">
            <img
              className="absolute top-[calc(50%_-_107px)] left-[calc(50%_-_62px)] w-32 h-[124px] object-cover"
              alt=""
              src="/guesthouseicon-1@2x.png"
            />
            <b className="absolute top-[167px] left-[0px] leading-[50px] flex items-center justify-center w-56 h-[51px]">
              Guesthouses
            </b>
          </div>
        </div>
      </div>
      <img
        className="w-14 absolute my-0 mx-[!important] top-[0px] left-[1478px] h-[319px] object-cover z-[2]"
        alt=""
        src="/decorright@2x.png"
      />
    </section>
  );
};

export default ExploreBySection;
