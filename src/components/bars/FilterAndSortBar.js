import { useState, useCallback, useEffect } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import FilterPopup from "../popups/FilterPopup";
import PortalPopup from "../portals/PortalPopup";

const FilterAndSortBar = () => {
  const [isFilterPopupOpen, setFilterPopupOpen] = useState(false);
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

  const openFilterPopup = useCallback(() => {
    setFilterPopupOpen(true);
  }, []);

  const closeFilterPopup = useCallback(() => {
    setFilterPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className="rounded-3xs bg-shade-01 shadow-[0px_0px_20px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-col items-center justify-center py-0 px-[30px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-lg text-darkslategray-100 font-lato"
        data-animate-on-scroll
      >
        <div className="self-stretch flex flex-row items-start justify-start gap-[314px]">
          <div className="w-[442px] relative font-semibold flex items-center h-20 shrink-0">
            Showing 647 Places
          </div>
          <div className="flex flex-row items-center justify-start gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="w-[73px] relative font-semibold flex items-center h-20 shrink-0">
                Sort By
              </div>
              <FormControl
                className="w-[298px] relative"
                variant="outlined"
                sx={{
                  borderRadius: "0px 0px 0px 0px",
                  width: "298px",
                  height: "33.1px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "33.1px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "33.1px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "33.1px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "33.1px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="info" />
                <Select color="info" size="small" disableUnderline displayEmpty>
                  <MenuItem value="High to low price">
                    High to low price
                  </MenuItem>
                  <MenuItem value="Low to high price">
                    Low to high price
                  </MenuItem>
                  <MenuItem value="Large to small area">
                    Large to small area
                  </MenuItem>
                  <MenuItem value="Small to large area">
                    Small to large area
                  </MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div
              className="overflow-hidden flex flex-col items-center justify-start py-[7px] px-[9px] relative gap-[10px] cursor-pointer"
              onClick={openFilterPopup}
            >
              <div className="w-[116px] relative rounded-3xs bg-shade-01 box-border h-[45px] opacity-[0.3] z-[0] border-[1px] border-solid border-gray-1300" />
              <div className="w-[90px] absolute my-0 mx-[!important] top-[15px] right-[26px] h-[33px] z-[1]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[7px] right-[0px] text-sm capitalize font-bold font-inter text-darkslategray-100 text-center flex items-center justify-center w-[57px] h-[17px]">
                  Filters
                </button>
                <img
                  className="absolute top-[0px] right-[57px] w-[33px] h-[33px] overflow-hidden"
                  alt=""
                  src="/mifilter.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFilterPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilterPopup}
        >
          <FilterPopup onClose={closeFilterPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default FilterAndSortBar;