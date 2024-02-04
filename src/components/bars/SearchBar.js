import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Calendar from "../calendars/searchBarCalendar/Calendar";
import PortalDrawer from "../portals/PortalDrawer";

const SearchBar = () => {
  const navigate = useNavigate();
  const [isCalendarOpen, setCalendarOpen] = useState(false);
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

  const openCalendar = useCallback(() => {
    setCalendarOpen(true);
  }, []);

  const closeCalendar = useCallback(() => {
    setCalendarOpen(false);
  }, []);

  const onSearchButtonClick = useCallback(() => {
    navigate("/browse");
  }, []);

  return (
    <>
      <div
        className="flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_1s_1_normal_forwards_slide-in-bottom] opacity-[0] z-[2]"
        data-animate-on-scroll
      >
        <div className="w-[1349px] h-14 relative">
          <div className="absolute top-[0px] left-[0px] rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-shade-01 w-[1294px] h-14 overflow-hidden">
            <TextField
              className="absolute top-[0px] left-[1012px]"
              color="info"
              placeholder="2 Rooms, 1 Guest"
              fullWidth={true}
              sx={{ width: 282 }}
              variant="outlined"
              multiline
            />
            <div
              className="absolute top-[calc(50%_-_28px)] left-[calc(50%_-_223px)] bg-shade-01 box-border w-[588px] h-14 overflow-hidden cursor-pointer border-[1px] border-solid border-black"
              onClick={openCalendar}
            />
            <TextField
              className="[border:none] bg-[transparent] absolute top-[calc(50%_-_28px)] left-[calc(50%_-_647px)]"
              color="info"
              size="medium"
              placeholder="Enter Destination"
              fullWidth={true}
              variant="outlined"
              type="text"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
          </div>
          <img
            className="absolute top-[0px] left-[1293px] rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none w-14 h-14 overflow-hidden hover:bg-slateblue-200 hover:cursor-pointer"
            alt=""
            src="/searchbutton.svg"
            onClick = {onSearchButtonClick}
          />
        </div>
      </div>
      {isCalendarOpen && (
        <PortalDrawer placement="Top" onOutsideClick={closeCalendar}>
          <Calendar onClose={closeCalendar} />
        </PortalDrawer>
      )}
    </>
  );
};

export default SearchBar;