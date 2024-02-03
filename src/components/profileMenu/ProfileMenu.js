import { memo, useState, useRef, useCallback } from "react";
import OptionWithoutUser from "../profileMenuDropdownOptions/userNotLoggedIn/OptionsWithoutUser";
import OptionsOfGuest from '../profileMenuDropdownOptions/guestLoggedIn/OptionsOfGuest';
import OptionsOfHost from '../profileMenuDropdownOptions/hostLoggedIn/OptionsOfHost';
import PortalPopup from "../portals/PortalPopup";

const ProfileMenu = memo(() => {
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
      <div
        className="absolute top-[16.4px] right-[31.5px] rounded-58xl-5 bg-shade-01 overflow-hidden flex flex-row items-center justify-end py-[3px] px-1 gap-[10px] cursor-pointer border-[1px] border-solid border-lightgray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-200 active:box-border active:cursor-pointer active:border-[1px] active:border-solid"
        ref={profileContainerRef}
        onClick={openOptionWithoutUserPopup}
      >
        <div className="h-[17px] flex flex-col items-start justify-center py-0 pr-0 pl-[5px] box-border gap-[5px]">
          <div className="w-[21.3px] relative box-border h-0.5 border-t-[2px] border-solid border-dimgray-100" />
          <div className="w-[21.3px] relative box-border h-0.5 border-t-[2px] border-solid border-dimgray-100" />
          <div className="w-[21.3px] relative box-border h-0.5 border-t-[2px] border-solid border-dimgray-100" />
        </div>
        <img
          className="w-[30.2px] relative h-[30.2px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/mask@2x.png"
        />
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

export default ProfileMenu;