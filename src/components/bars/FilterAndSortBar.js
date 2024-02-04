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

/* 
  const [selectedSortOption, setSelectedSortOption] = useState('default');
  useEffect(() => {

    const sortAndRenderCards = () => {
      let sortedData = [...propertyData];

      if (selectedSortOption === 'High to low price') {
        sortedData.sort((a, b) => b.price - a.price);
      }
      else if (selectedSortOption === 'Low to high price') {
        sortedData.sort((a, b) => a.price - b.price);
      }
      else if (selectedSortOption === 'Large to small area') {
        sortedData.sort((a, b) => b.area - a.area);
      }
      else if (selectedSortOption === 'Small to large area') {
        sortedData.sort((a, b) => a.area - b.area);
      }

      setPropertyData(sortedData);
    };

    sortAndRenderCards();
  }, [selectedSortOption]);
  */


  return (
    <>
      <div
        className="w-[1422px] h-[60px] left-[-5px] relative rounded-3xs bg-shade-01 shadow-[0px_0px_20px_rgba(0,_0,_0,_0.15)] overflow-hidden shrink-0 text-left text-base text-darkslategray-100 font-poppins"
        data-animate-on-scroll
      >
        <div className="absolute top-[-10px] left-[30px] w-[1362px] flex flex-row items-center justify-start gap-[10px]">
          <div className="w-[442px] relative font-semibold flex items-center h-20 shrink-0 z-[0]">
            Showing 647 Places
          </div>
          <div className="my-0 mx-[!important] absolute top-[-0.5px] right-[0px] flex flex-row items-center justify-start gap-[22px] z-[1] text-right text-sm font-lato">
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row items-center justify-start gap-[0px]">
                <div className="w-[73px] relative font-semibold flex items-center h-20 shrink-0">
                  Sort By
                </div>


                <FormControl
                  className="relative"
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
                      m: 1,
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
                    "& .MuiInput-input": { m: 0, p: 0},
                    "& .MuiInputBase-input": {
                      
                      textAlign: "right",
                      p: "0 !important",
                    },
                  }}
                >
                  <Select
                   // onChange={(e) => setSelectedSortOption(e.target.value)} 
                    id="sort-select"
                    color="info"
                    size="small"
                  >
                <MenuItem value="High to low price">High to low price</MenuItem>
                <MenuItem value="Low to high price">Low to high price</MenuItem>
                <MenuItem value="Large to small area">Large to small area</MenuItem>
                <MenuItem value="Small to large area">Small to large area</MenuItem>
              </Select>
              <FormHelperText />
              </FormControl>



              </div>
            </div>
            <button
              className="cursor-pointer py-[7px] px-[9px] bg-shade-01 rounded-8xs box-border h-[33px] overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-darkgray-100 hover:box-border hover:cursor-pointer hover:border-[1px] hover:border-solid hover:border-dimgray-400"
              onClick={openFilterPopup}
            >
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="w-[17px] relative h-5"
                  alt=""
                  src="/vector.svg"
                />
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-2xs capitalize font-medium font-poppins text-darkslategray-100 text-left inline-block">
                  Filters
                </button>
              </div>
            </button>
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