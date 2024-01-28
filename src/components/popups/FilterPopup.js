const FilterPopup = () => {
    return (
      <div className="w-[814px] h-[618px] overflow-hidden max-w-full max-h-full text-left text-smi text-shade-02 font-poppins">
        <div className="absolute top-[110px] left-[20px] bg-shade-01 w-[774px] h-[410px]">
          <div className="absolute top-[28px] left-[35px] text-mini leading-[70.19%] font-medium text-black flex items-center w-[488px] h-[34.8px]">
            Price Range
          </div>
          <div className="absolute top-[63px] left-[35px] text-xs leading-[70.19%] font-medium text-dimgray-400 flex items-center w-[550px] h-[26.1px]">
            Filter according to your preferred nightly prices.
          </div>
          <div className="absolute top-[198px] left-[35px] text-mini leading-[70.19%] font-medium text-black flex items-center w-[488px] h-[34.8px]">
            Property Type
          </div>
          <div className="absolute top-[185.5px] left-[-0.5px] box-border w-[759px] h-px border-t-[1px] border-solid border-gainsboro-100" />
          <div className="absolute top-[247.9px] left-[215px] w-[166px] h-32">
            <div className="absolute top-[-0.5px] left-[-0.5px] rounded-xl bg-shade-01 box-border w-[167px] flex flex-row items-start justify-start p-4 cursor-auto border-[1px] border-solid border-neutral-03 hover:box-border hover:cursor-pointer hover:border-[1px] hover:border-solid hover:border-gray-900 active:bg-silver-100">
              <div className="flex flex-col items-start justify-start gap-[40px]">
                <img className="w-8 relative h-8" alt="" />
                <div className="relative font-semibold">Apartment</div>
              </div>
            </div>
            <img
              className="absolute top-[13.5px] left-[16px] w-8 h-[30.9px] object-cover"
              alt=""
              src="/property-type@2x.png"
            />
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[247.9px] left-[35px] w-[166px] h-32">
            <div className="absolute top-[-0.5px] left-[-0.5px] rounded-xl bg-shade-01 box-border w-[167px] flex flex-row items-start justify-start p-4 cursor-auto border-[1px] border-solid border-neutral-03 hover:box-border hover:cursor-pointer hover:border-[1px] hover:border-solid hover:border-gray-900 active:bg-silver-100">
              <div className="flex flex-col items-start justify-start gap-[40px]">
                <img className="w-8 relative h-8" alt="" />
                <div className="relative text-smi font-semibold font-poppins text-shade-02 text-left">
                  House
                </div>
              </div>
            </div>
            <img
              className="absolute top-[16.1px] left-[16px] w-8 h-8"
              alt=""
              src="/property-type.svg"
            />
          </button>
          <div className="absolute top-[245px] left-[395px] w-[166px] h-32">
            <div className="absolute top-[-0.5px] left-[-0.5px] rounded-xl bg-shade-01 box-border w-[167px] flex flex-row items-start justify-start p-4 cursor-auto border-[1px] border-solid border-neutral-03 hover:box-border hover:cursor-pointer hover:border-[1px] hover:border-solid hover:border-gray-900 active:bg-silver-100">
              <div className="flex flex-col items-start justify-start gap-[40px]">
                <img className="w-8 relative h-8" alt="" />
                <div className="relative font-semibold">Guesthouse</div>
              </div>
            </div>
            <img
              className="absolute top-[22.2px] left-[16px] w-8 h-[30.9px]"
              alt=""
              src="/property-type.svg"
            />
          </div>
          <div className="absolute top-[245px] left-[575px] w-[166px] h-32">
            <div className="absolute top-[0px] left-[0px] w-[166px] h-32 hover:cursor-pointer">
              <div className="absolute top-[-0.5px] left-[-0.5px] rounded-xl box-border w-[167px] flex flex-row items-start justify-start p-4 border-[1px] border-solid border-neutral-03 hover:box-border hover:cursor-pointer hover:border-[1px] hover:border-solid hover:border-gray-900 active:bg-silver-100">
                <div className="flex flex-col items-start justify-start gap-[40px]">
                  <img className="w-8 relative h-8" alt="" />
                  <div className="relative font-semibold">Hotel</div>
                </div>
              </div>
            </div>
            <img
              className="absolute top-[20.3px] left-[18px] w-8 h-[30.9px]"
              alt=""
              src="/property-type.svg"
            />
          </div>
          <div className="absolute top-[100px] left-[35px] bg-gainsboro-200 w-[702px] h-[51px]" />
        </div>
        <div className="absolute top-[493px] left-[18px] w-[778px] h-[117px] text-xs text-black">
          <div className="absolute top-[0px] left-[2px] rounded-t-none rounded-b-15xl bg-shade-01 w-[774px] h-[103px]" />
          <button className="cursor-pointer [border:none] p-2.5 bg-darkblue-100 absolute top-[38px] left-[633px] rounded-[9.08px] w-[107px] h-[41px] flex flex-row flex-wrap items-center justify-center box-border hover:bg-blueviolet-200 hover:gap-[10px] hover:cursor-pointer active:bg-midnightblue-500">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-smi capitalize font-bold font-inter text-shade-01 text-center inline-block">
              Filter Places
            </button>
          </button>
          <div className="absolute top-[31px] left-[38px] [text-decoration:underline] leading-[70.19%] font-medium flex items-center w-[395px] h-[55px]">
            Clear selection
          </div>
          <div className="absolute top-[16.5px] left-[1.5px] box-border w-[775px] h-px border-t-[1px] border-solid border-silver-300" />
        </div>
        <div className="absolute top-[28px] left-[20px] rounded-t-15xl rounded-b-none bg-shade-01 w-[774px] h-[83px]" />
        <img
          className="absolute top-[57px] left-[57px] rounded-t-15xl rounded-b-none w-[22px] h-[23px]"
          alt=""
          src="/cross.svg"
        />
        <div className="absolute top-[105.5px] left-[18.5px] box-border w-[776px] h-px border-t-[1px] border-solid border-silver-300" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[65px] left-[calc(50%_-_28px)] text-mini capitalize font-bold font-inter text-black text-center inline-block">
          Filters
        </button>
      </div>
    );
  };
  
  export default FilterPopup;  