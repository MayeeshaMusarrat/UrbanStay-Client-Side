import { memo, useState, useRef, useCallback } from "react";
import OptionWithoutUser from "./OptionWithoutUser";
import PortalPopup from "./PortalPopup";
import Navbar from "./Navbar";

const Header = memo(() => {
  const profileContainerRef = useRef(null);
  const [isOptionWithoutUserPopupOpen, setOptionWithoutUserPopupOpen] =
    useState(false);

  const openOptionWithoutUserPopup = useCallback(() => {
    setOptionWithoutUserPopupOpen(true);
  }, []);

  const closeOptionWithoutUserPopup = useCallback(() => {
    setOptionWithoutUserPopupOpen(false);
  }, []);

  return (
    <>
      <div className="self-stretch bg-white shadow-[0px_4px_5px_rgba(0,_0,_0,_0.25)] h-[69px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-[15px] box-border relative gap-[308px]">
        <Navbar />
        <img
          className="w-[97px] absolute my-0 mx-[!important] top-[8px] left-[24px] h-[51px] object-cover z-[1]"
          loading="eager"
          alt=""
          src="/logo@2x.png"
        />
        <div
          className="my-0 mx-[!important] absolute top-[16.4px] right-[31.5px] rounded-58xl-5 bg-white overflow-hidden flex flex-row items-center justify-end py-[3px] px-1 gap-[10px] cursor-pointer z-[2] border-[1px] border-solid border-lightgray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver active:box-border active:cursor-pointer active:border-[1px] active:border-solid active:border-silver"
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
