import { useCallback, useEffect } from "react";

const Footer = () => {
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

  const onListingsTextClick = useCallback(() => {
    // Please sync "Browse" to the project
  }, []);

  const onRegisterTextClick = useCallback(() => {
    // Please sync "Leading_page" to the project
  }, []);

  const onLoginTextClick = useCallback(() => {
    // Please sync "Sign_in_page" to the project
  }, []);

  return (
    <footer
      className="self-stretch flex-1 bg-gray-400 flex flex-col items-center justify-center pt-[15px] px-[124px] pb-0 gap-[31px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0] text-left text-5xl text-white font-plus-jakarta-sans"
      id="footer"
      data-scroll-to="footer"
      data-animate-on-scroll
    >
      <div className="flex-1 flex flex-row items-end justify-center gap-[31px]">
        <div className="h-[382px] overflow-hidden flex flex-col items-start justify-center pt-0 px-[45px] pb-0.5 box-border gap-[49px]">
          <div className="w-[359px] h-[179px] overflow-hidden shrink-0 flex flex-row flex-wrap items-end justify-start p-3 box-border gap-[5px]">
            <div className="relative leading-[28.8px] font-semibold">
              Get Our App
            </div>
            <div className="w-[335px] relative text-base leading-[24px] text-whitesmoke flex items-center shrink-0">
              Download the app and book your property
            </div>
            <img
              className="w-[168px] relative h-[60px] object-cover"
              alt=""
              src="/googlepaypng@2x.png"
            />
            <img
              className="w-[162px] relative h-[60px] object-cover"
              alt=""
              src="/appstorepng@2x.png"
            />
          </div>
          <div className="w-[300px] h-[104px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-2.5 px-[5px] box-border gap-[14px]">
            <div className="relative leading-[28.8px] capitalize font-semibold">
              Connect with us
            </div>
            <div className="flex flex-row items-center justify-center gap-[10px]">
              <img
                className="w-10 relative h-[41px] object-cover"
                alt=""
                src="/item--link-4-1@2x.png"
              />
              <img
                className="w-10 relative h-[41px] object-cover"
                alt=""
                src="/item--link-3-1@2x.png"
              />
              <img
                className="w-10 relative h-[41px] object-cover"
                alt=""
                src="/item--link-2-1@2x.png"
              />
              <img
                className="w-10 relative h-[41px] object-cover"
                alt=""
                src="/item--link-1-1@2x.png"
              />
              <img
                className="w-10 relative h-[41px] object-cover"
                alt=""
                src="/item--link-1@2x.png"
              />
              <img
                className="w-10 relative h-[41px] object-cover"
                alt=""
                src="/frame-2021-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="h-[312px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-[49px] box-border gap-[50px]">
          <div className="w-[170px] h-[306px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-1 px-2.5 box-border">
            <div className="w-[130px] relative font-semibold flex items-center h-[55px] shrink-0">
              Categories
            </div>
            <div className="flex-1 overflow-hidden flex flex-col items-start justify-center py-[9px] px-[22px] gap-[20px] text-base text-whitesmoke">
              <div className="relative leading-[24px]">Apartments</div>
              <div className="relative leading-[24px]">Home</div>
              <div className="relative leading-[24px]">Office</div>
              <div className="relative leading-[24px]">Villas</div>
              <div className="relative leading-[24px]">Flat</div>
            </div>
          </div>
          <div className="self-stretch w-48 overflow-hidden shrink-0 flex flex-col items-center justify-start py-[15px] px-2.5 box-border gap-[9px] text-center">
            <div className="w-[130px] relative leading-[28.8px] font-semibold flex items-center justify-center h-[38px] shrink-0">
              Locations
            </div>
            <div className="w-[157px] flex-1 overflow-hidden flex flex-col items-start justify-start py-3 px-[22px] box-border gap-[20px] text-left text-base text-whitesmoke">
              <div className="relative leading-[24px]">United States</div>
              <div className="relative leading-[24px]">Canada</div>
              <div className="relative leading-[24px]">India</div>
              <div className="relative leading-[24px]">UK</div>
              <div className="relative leading-[24px]">Australia</div>
            </div>
          </div>
          <div className="self-stretch w-[161px] flex flex-col items-center justify-center py-0 px-2.5 box-border gap-[9px]">
            <div className="relative leading-[28.8px] font-semibold">
              Explore
            </div>
            <div className="h-56 overflow-hidden shrink-0 flex flex-col items-center justify-start py-3.5 px-9 box-border gap-[20px] text-base text-whitesmoke">
              <div
                className="relative leading-[24px] cursor-pointer"
                onClick={onListingsTextClick}
              >
                Listings
              </div>
              <div
                className="relative leading-[24px] cursor-pointer"
                onClick={onRegisterTextClick}
              >
                Register
              </div>
              <div
                className="relative leading-[24px] cursor-pointer"
                onClick={onLoginTextClick}
              >
                Login
              </div>
              <div className="relative leading-[24px]">Blogs</div>
              <div className="relative leading-[24px]">Hosts</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1529px] bg-gray-500 h-16 flex flex-row items-center justify-center pt-[15px] px-0 pb-0 box-border text-center text-sm">
        <div className="w-[1518px] relative leading-[21px] font-medium inline-block h-[31px] shrink-0">
          Copyright 2024 - All right reserved UrbanStay
        </div>
      </div>
    </footer>
  );
};

export default Footer;