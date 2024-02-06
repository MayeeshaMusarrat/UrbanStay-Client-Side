import { useCallback } from "react";

const Navbar1 = () => {
  const onExploreContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='exploreBySection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFeaturedContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='featuredSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-[514px] flex flex-row items-center justify-between py-0 px-5 box-border gap-[20px] max-w-full text-left text-2xs text-gray-100 font-lato">
      <div className="rounded-mini flex flex-row items-center justify-center py-[5px] px-0 text-slateblue-100">
        <b className="relative tracking-[0.8px] uppercase">Pictures</b>
      </div>
      <div
        className="rounded-mini flex flex-row items-center justify-center py-[5px] px-0 cursor-pointer hover:cursor-pointer"
        onClick={onExploreContainerClick}
      >
        <div className="relative tracking-[0.8px] uppercase font-semibold hover:font-bold hover:font-lato hover:text-2xs hover:text-slateblue-100">
          Amenities
        </div>
      </div>
      <div
        className="w-[77px] rounded-mini flex flex-row items-center justify-center py-[5px] px-0 box-border cursor-pointer"
        onClick={onFeaturedContainerClick}
      >
        <div className="flex-1 relative tracking-[0.8px] uppercase font-semibold hover:font-bold hover:font-lato hover:text-2xs hover:text-slateblue-100">
          Calendar
        </div>
      </div>
      <div className="rounded-mini flex flex-row items-center justify-center py-[5px] px-0">
        <div className="relative tracking-[0.8px] uppercase font-semibold hover:font-bold hover:font-lato hover:text-2xs hover:text-slateblue-100">
          Location
        </div>
      </div>
      <div className="rounded-mini flex flex-row items-center justify-center py-[5px] px-0">
        <div className="relative tracking-[0.8px] uppercase font-semibold hover:font-bold hover:font-lato hover:text-2xs hover:text-slateblue-100 hover:cursor-pointer">
          Reviews
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
