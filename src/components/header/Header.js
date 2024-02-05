import { memo, useState, useRef, useCallback, useEffect } from "react";
import OptionWithoutUser from "../profileMenuDropdownOptions/userNotLoggedIn/OptionsWithoutUser";
import PortalPopup from "../portals/PortalPopup";
import Navbar from "../navigations/landingPageNavigators/Navbar";
import ProfileMenu from "../profileMenu/ProfileMenu";
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
        className="self-stretch h-[69px] bg-white shadow-[0px_0px_10px_rgba(0,_0,_0,_0.2)] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-[15px] box-border relative gap-[308px] "
        data-animate-on-scroll
      >
      <BlueLogoIcon logoTop={6} logoWidth={97} logoHeight={51} />
      <ProfileMenu />
    </div>
    </>
  );
});

export default Header;