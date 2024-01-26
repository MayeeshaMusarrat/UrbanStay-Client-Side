import { memo, useState, useRef, useCallback, useEffect } from "react";
import OptionWithoutUser from "../dropdownOptions/userNotLoggedIn/OptionsWithoutUser";
import PortalPopup from "../portals/PortalPopup";
import Navbar from "../navigations/landingPageNavigators/Navbar";
import BlueLogoIcon from "../logos/BlueLogoIcon";


const Header = memo(() => {
  const profileContainerRef = useRef(null);
  const [isOptionWithoutUserPopupOpen, setOptionWithoutUserPopupOpen] =
    useState(false);
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

  const openOptionWithoutUserPopup = useCallback(() => {
    setOptionWithoutUserPopupOpen(true);
  }, []);

  const closeOptionWithoutUserPopup = useCallback(() => {
    setOptionWithoutUserPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className="self-stretch h-[69px] bg-white shadow-[0px_4px_5px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-[15px] box-border relative gap-[308px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
        data-animate-on-scroll
      >
        <Navbar />
        <BlueLogoIcon logoTop={6} logoWidth={97} logoHeight={51} />
        <div
          className="my-0 mx-[!important] absolute top-[16.4px] right-[31.5px] rounded-58xl-5 bg-white overflow-hidden flex flex-row items-center justify-end py-[3px] px-1 gap-[10px] cursor-pointer z-[2] border-[1px] border-solid border-lightgray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgray active:box-border"
          ref={profileContainerRef}
          onClick={openOptionWithoutUserPopup}
        >
          <div className="h-[17px] flex flex-col items-start justify-center py-0 pr-0 pl-[5px] box-border gap-[5px]">
            <div className="w-[21.3px] relative box-border h-0.5 border-t-[2px] border-solid border-dimgray-200" />
            <div className="w-[21.3px] relative box-border h-0.5 border-t-[2px] border-solid border-dimgray-200" />
            <div className="w-[21.3px] relative box-border h-0.5 border-t-[2px] border-solid border-dimgray-200" />
          </div>
          <img
            className="w-[30.2px] relative h-[30.2px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/mask@2x.png"
          />
        </div>
      </div>
      {isOptionWithoutUserPopupOpen && (
        <PortalPopup
          placement="Bottom right"
          bottom={-10}
          relativeLayerRef={profileContainerRef}
          onOutsideClick={closeOptionWithoutUserPopup}
        >
          <OptionWithoutUser onClose={closeOptionWithoutUserPopup} />
        </PortalPopup>
      )}
    </>
  );
});

export default Header;