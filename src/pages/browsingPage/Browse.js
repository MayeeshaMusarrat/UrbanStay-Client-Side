import { useState, useRef, useCallback } from "react";
import OptionWithoutUser from "../../components/dropdownOptions/userNotLoggedIn/OptionsWithoutUser";
import PortalPopup from "../../components/portals/PortalPopup";
import SearchComponent from "../../components/bars/SearchComponent";
import FilterAndSortBar from "../../components/bars/FilterAndSortBar";
import PropertyCardForBrowsePage from "../../components/cards/PropertyCardForBrowsePage";
import Footer from "../../components/footer/Footer";

const Browse = () => {
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
      <div className="w-full relative bg-shade-01 overflow-hidden flex flex-col items-center justify-center">
        <div className="self-stretch h-[69px] bg-shade-01 shadow-[0px_4px_5px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-[15px] box-border relative gap-[308px] z-[0]">
          <img
            className="w-[97px] absolute my-0 mx-[!important] top-[8px] left-[24px] h-[51px] object-cover z-[0]"
            loading="eager"
            alt=""
            src="/logo@2x.png"
          />
          <div
            className="my-0 mx-[!important] absolute top-[16.4px] right-[31.5px] rounded-58xl-5 bg-shade-01 overflow-hidden flex flex-row items-center justify-end py-[3px] px-1 gap-[10px] cursor-pointer z-[1] border-[1px] border-solid border-lightgray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-200 active:box-border active:cursor-pointer active:border-[1px] active:border-solid active:border-silver-200"
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
        <div className="self-stretch h-[122px] relative bg-midnightblue-200 z-[1]" />
        <SearchComponent />
        <div className="w-[1530px] flex flex-col items-center justify-center pt-10 px-0 pb-[50px] box-border gap-[30px] z-[3]">
          <FilterAndSortBar />
          <div className="w-[1349px] box-border h-[1050px] overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start p-2.5 border-[1px] border-solid border-black">
            <PropertyCardForBrowsePage />
          </div>
        </div>
        <Footer />
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
};

export default Browse;