const Navbar = () => {
    return (
      <nav
        className="m-0 flex flex-row items-center justify-center gap-[40px] z-[0] text-left text-2xs text-gray-100 font-lato"
        id="navbar"
      >
        <div className="rounded-mini flex flex-row items-center justify-center py-[5px] px-0 text-slateblue">
          <b className="relative tracking-[0.8px] uppercase">Pictures</b>
        </div>
        <div className="rounded-mini flex flex-row items-center justify-center py-[5px] px-0 hover:cursor-pointer">
          <div className="h-[13px] relative tracking-[0.8px] uppercase font-semibold inline-block hover:font-bold hover:font-lato hover:text-2xs hover:text-slateblue">
            Amenities
          </div>
        </div>
        <div className="rounded-mini flex flex-row items-center justify-center py-[5px] px-0">
          <div className="w-[77px] relative tracking-[0.8px] uppercase font-semibold flex items-center h-4 shrink-0 hover:font-bold hover:font-lato hover:text-2xs hover:text-slateblue">
            Calendar
          </div>
        </div>
        <div className="rounded-mini flex flex-row items-center justify-center py-[5px] px-0">
          <div className="relative tracking-[0.8px] uppercase font-semibold hover:font-bold hover:font-lato hover:text-2xs hover:text-slateblue">
            Location
          </div>
        </div>
        <div className="rounded-mini flex flex-row items-center justify-center py-[5px] px-0">
          <div className="relative tracking-[0.8px] uppercase font-semibold hover:font-bold hover:font-lato hover:text-2xs hover:text-slateblue hover:cursor-pointer">
            Reviews
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;  