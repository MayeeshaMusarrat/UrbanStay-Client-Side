import { useCallback, useState } from "react";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const onConfirmPaymentBtnContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='footerCopyrightContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onConfirmPaymentBtnContainer1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='categoriesListItemFrame']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onConfirmPaymentBtnContainer2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onConfirmPaymentBtnContainer3Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='frameLocContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="self-stretch h-[93px] flex flex-row items-start justify-start py-0 pr-2 pl-0 box-border max-w-full text-center text-base text-darkslategray-500 font-inter">
      <div className="self-stretch flex-1 rounded-3xs bg-shade-01 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-col items-start justify-start py-[22px] px-[21px] box-border max-w-full">
        <div className="self-stretch flex-1 overflow-x-hidden flex flex-row items-start justify-between gap-[20px]">
          <button className="cursor-pointer [border:none] p-2.5 bg-darkblue-100 h-[49px] w-[205px] rounded-[9.08px] shrink-0 flex flex-row flex-wrap items-center justify-center box-border whitespace-nowrap hover:gap-[10px]">
            <b className="relative text-base capitalize font-inter text-shade-01 text-center whitespace-nowrap">
              Property Information
            </b>
          </button>
          <div
            className={`self-stretch w-[205px] rounded-[9.08px] shrink-0 flex flex-row flex-wrap items-center justify-center p-2.5 box-border cursor-pointer ${
              hoveredIndex === 0
                ? "bg-darkblue-100 text-white font-bold"
                : "bg-shade-01 text-darkslategray-500"
            }`}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={onConfirmPaymentBtnContainerClick}
          >
            <div className="w-[166px] relative capitalize flex items-center justify-center shrink-0 whitespace-nowrap">
              Amenities
            </div>
          </div>
          <div
            className={`self-stretch w-[205px] rounded-[9.08px] shrink-0 flex flex-row flex-wrap items-center justify-center p-2.5 box-border cursor-pointer hover:gap-[10px] ${
              hoveredIndex === 1
                ? "bg-darkblue-100 text-white font-bold"
                : "bg-shade-01 text-darkslategray-500"
            }`}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={onConfirmPaymentBtnContainer1Click}
          >
            <div className="w-[166px] relative capitalize flex items-center justify-center shrink-0 whitespace-nowrap">
              Property Gallery
            </div>
          </div>
          <div
            className={`self-stretch w-[205px] rounded-[9.08px] shrink-0 flex flex-row flex-wrap items-center justify-center p-2.5 box-border cursor-pointer hover:gap-[10px] ${
              hoveredIndex === 2
                ? "bg-darkblue-100 text-white font-bold"
                : "bg-shade-01 text-darkslategray-500"
            }`}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={onConfirmPaymentBtnContainer2Click}
          >
            <div className="w-[166px] relative capitalize flex items-center justify-center shrink-0 whitespace-nowrap">
              Description
            </div>
          </div>
          <div
            className={`self-stretch w-[205px] rounded-[9.08px] shrink-0 flex flex-row flex-wrap items-center justify-center p-2.5 box-border cursor-pointer hover:gap-[10px] ${
              hoveredIndex === 3
                ? "bg-darkblue-100 text-white font-bold"
                : "bg-shade-01 text-darkslategray-500"
            }`}
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={onConfirmPaymentBtnContainer3Click}
          >
            <div className="w-[166px] relative capitalize flex items-center justify-center shrink-0 whitespace-nowrap">
              Location
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;