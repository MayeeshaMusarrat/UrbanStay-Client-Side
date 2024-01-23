import { useCallback } from "react";

const Navbar = () => {
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

  const onTestimonialContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='pseudoImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactusContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <nav
      className="my-0 mx-[!important] absolute top-[calc(50%_-_12.5px)] left-[calc(50%_-_269px)] flex flex-row items-center justify-center gap-[40px] z-[0] text-left text-2xs text-gray-100 font-lato"
      id="navbar"
    >
      <div className="rounded-mini flex flex-row items-center justify-center py-[5px] px-0 text-slateblue-100">
        <b className="relative tracking-[0.8px] uppercase">HOME</b>
      </div>
      <div
        className="rounded-mini flex flex-row items-center justify-center py-[5px] px-0 cursor-pointer hover:cursor-pointer"
        onClick={onExploreContainerClick}
      >
        <div className="h-[13px] relative tracking-[0.8px] uppercase font-semibold inline-block hover:font-bold hover:font-lato hover:text-2xs hover:text-slateblue-100">
          ExpLORE
        </div>
      </div>
      <div
        className="rounded-mini flex flex-row items-center justify-center py-[5px] px-0 cursor-pointer"
        onClick={onFeaturedContainerClick}
      >
        <div className="w-[77px] relative tracking-[0.8px] uppercase font-semibold flex items-center h-4 shrink-0 hover:font-bold hover:font-lato hover:text-2xs hover:text-slateblue-100">
          FEATURED
        </div>
      </div>
      <div
        className="rounded-mini flex flex-row items-center justify-center py-[5px] px-0 cursor-pointer"
        onClick={onTestimonialContainerClick}
      >
        <div className="relative tracking-[0.8px] uppercase font-semibold hover:font-bold hover:font-lato hover:text-2xs hover:text-slateblue-100">
          TESTIMONIALS
        </div>
      </div>
      <div className="rounded-mini flex flex-row items-center justify-center py-[5px] px-0">
        <div className="relative tracking-[0.8px] uppercase font-semibold hover:font-bold hover:font-lato hover:text-2xs hover:text-slateblue-100 hover:cursor-pointer">
          FAQ
        </div>
      </div>
      <div
        className="rounded-mini flex flex-row items-center justify-center py-[5px] px-0 cursor-pointer"
        onClick={onContactusContainerClick}
      >
        <div className="relative tracking-[0.8px] uppercase font-semibold hover:font-bold hover:font-lato hover:text-2xs hover:text-slateblue-100">
          CONTACT US
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
