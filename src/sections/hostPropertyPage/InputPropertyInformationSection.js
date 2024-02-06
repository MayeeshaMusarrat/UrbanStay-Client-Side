const InputPropertyInformationSection = () => {
    return (
      <div className="self-stretch flex flex-row items-start justify-start gap-[22px] max-w-full text-left text-5xl text-black font-poppins lg:flex-wrap">
        <div className="w-[339px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border min-w-[339px] max-w-full lg:flex-1 mq450:min-w-full">
          <div className="self-stretch h-[204px] relative capitalize inline-block shrink-0">
            <p className="m-0">Property Information</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 text-base text-darkslategray-400">
              Fill up the form with basic information of your property.
            </p>
          </div>
        </div>
        <form className="m-0 flex-1 rounded-3xs bg-shade-01 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[37px] pb-[51px] pr-[42px] pl-9 box-border gap-[34px] min-w-[647px] max-w-full mq750:gap-[34px] mq750:pt-6 mq750:pb-[33px] mq750:box-border mq750:min-w-full mq1050:pr-[21px] mq1050:box-border">
          <div className="w-[995px] h-[749px] relative rounded-3xs bg-shade-01 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-0.5 box-border gap-[10px] max-w-full">
            <div className="w-[339px] relative text-base capitalize font-medium font-poppins text-black text-left inline-block max-w-full z-[1]">
              Property Name
            </div>
            <input
              className="[outline:none] bg-whitesmoke-100 self-stretch h-[50px] relative rounded-8xs box-border overflow-hidden shrink-0 min-w-[250px] z-[1] border-[1px] border-solid border-gainsboro-300"
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[18px] pl-0 box-border min-h-[161px] max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-full">
              <div className="w-[339px] relative text-base capitalize font-medium font-poppins text-black text-left inline-block max-w-full z-[1]">
                Property Type
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap mq750:justify-center">
                <div className="w-[141px] rounded-xl bg-shade-01 box-border flex flex-col items-start justify-start pt-[18px] px-[17px] pb-3 gap-[16px] z-[1] border-[1px] border-solid border-neutral-03 hover:box-border hover:cursor-pointer hover:border-[1px] hover:border-solid hover:border-darkgray-400 focus:bg-gainsboro-200 focus:box-border focus:border-[1px] focus:border-solid focus:border-darkgray-100">
                  <img className="w-8 h-8 relative" alt="" />
                  <input
                    className="w-[41px] [border:none] [outline:none] font-poppins text-smi bg-[transparent] h-5 relative text-shade-02 text-left inline-block"
                    placeholder="House"
                    type="text"
                  />
                </div>
                <button className="cursor-pointer pt-[17px] px-[18px] pb-3 bg-shade-01 w-[141px] rounded-xl box-border flex flex-col items-start justify-start gap-[17px] z-[1] border-[1px] border-solid border-neutral-03 hover:bg-gainsboro-300 hover:box-border hover:cursor-pointer hover:border-[1px] hover:border-solid hover:border-silver-500 focus:bg-gainsboro-200 focus:box-border focus:border-[1px] focus:border-solid focus:border-darkgray-100">
                  <img className="w-8 h-8 relative object-cover" alt="" />
                  <div className="relative text-smi font-poppins text-shade-02 text-left">
                    Apartment
                  </div>
                </button>
                <div className="w-[143px] rounded-xl bg-shade-01 box-border flex flex-col items-start justify-start pt-[17px] pb-3 pr-[45px] pl-[18px] gap-[17px] z-[1] border-[1px] border-solid border-neutral-03 hover:box-border hover:cursor-pointer hover:border-[1px] hover:border-solid hover:border-darkgray-400 focus:bg-gainsboro-200 focus:box-border focus:border-[1px] focus:border-solid focus:border-darkgray-100">
                  <img className="w-8 h-8 relative" alt="" />
                  <input
                    className="w-[calc(100%_-_63px)] [border:none] [outline:none] font-poppins text-smi bg-[transparent] self-stretch h-5 relative text-shade-02 text-left inline-block min-w-[47px]"
                    placeholder="Guesthouse"
                    type="text"
                  />
                </div>
                <div className="w-[141px] rounded-xl bg-shade-01 box-border flex flex-col items-start justify-start pt-[17px] px-[18px] pb-3 gap-[17px] z-[1] border-[1px] border-solid border-neutral-03 hover:box-border hover:cursor-pointer hover:border-[1px] hover:border-solid hover:border-darkgray-400 focus:bg-gainsboro-200 focus:box-border focus:border-[1px] focus:border-solid focus:border-darkgray-100">
                  <img className="w-8 h-8 relative" alt="" />
                  <input
                    className="w-[34px] [border:none] [outline:none] font-poppins text-smi bg-[transparent] h-5 relative text-shade-02 text-left inline-block"
                    placeholder="Hotel"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-8 pl-0 box-border min-h-[99px] max-w-full">
            <div className="flex-1 flex flex-row items-end justify-start gap-[56px] max-w-full z-[1] mq450:gap-[56px] mq1050:flex-wrap">
              <div className="w-[267px] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="w-[159px] flex flex-row items-start justify-start py-0 px-1 box-border">
                    <div className="h-6 flex-1 relative text-base capitalize font-medium font-poppins text-black text-left inline-block">
                      No. of Bedrooms
                    </div>
                  </div>
                  <input
                    className="[outline:none] bg-whitesmoke-100 self-stretch h-[50px] relative rounded-8xs box-border overflow-hidden shrink-0 min-w-[152px] border-[1px] border-solid border-gainsboro-300"
                    type="number"
                  />
                </div>
              </div>
              <div className="w-[253px] flex flex-col items-start justify-start gap-[12px]">
                <div className="w-[151px] h-6 relative text-base capitalize font-medium font-poppins text-black text-left inline-block">
                  No. of Beds
                </div>
                <input
                  className="[outline:none] bg-whitesmoke-100 self-stretch h-[50px] relative rounded-8xs box-border overflow-hidden shrink-0 min-w-[152px] border-[1px] border-solid border-gainsboro-300"
                  type="text"
                />
              </div>
              <div className="w-[253px] flex flex-col items-start justify-start gap-[6px]">
                <div className="w-[151px] h-6 relative text-base capitalize font-medium font-poppins text-black text-left inline-block">
                  No. of Bathrooms
                </div>
                <input
                  className="[outline:none] bg-whitesmoke-100 self-stretch h-[50px] relative rounded-8xs box-border overflow-hidden shrink-0 min-w-[152px] border-[1px] border-solid border-gainsboro-300"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[56px] max-w-full z-[1] mq450:gap-[56px] mq1050:flex-wrap">
              <div className="w-[267px] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border">
                <div className="self-stretch h-[88px] flex flex-col items-start justify-start gap-[14px]">
                  <div className="w-[159px] h-6 flex flex-row items-start justify-start py-0 px-1 box-border">
                    <div className="h-6 w-[151px] relative text-base capitalize font-medium font-poppins text-black text-left inline-block shrink-0">
                      No. of Rooms
                    </div>
                  </div>
                  <input
                    className="[outline:none] bg-whitesmoke-100 w-[253px] h-[50px] relative rounded-8xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-gainsboro-300"
                    type="number"
                  />
                </div>
              </div>
              <div className="w-[253px] flex flex-col items-start justify-start gap-[14px]">
                <div className="w-[151px] h-6 relative text-base capitalize font-medium font-poppins text-black text-left inline-block">
                  No. of guests
                </div>
                <input
                  className="[outline:none] bg-whitesmoke-100 self-stretch h-[50px] relative rounded-8xs box-border overflow-hidden shrink-0 min-w-[152px] border-[1px] border-solid border-gainsboro-300"
                  type="text"
                />
              </div>
              <div className="w-[285px] flex flex-col items-start justify-start gap-[14px]">
                <div className="w-[151px] h-6 relative text-base capitalize font-medium font-poppins text-black text-left inline-block">
                  Area
                </div>
                <input
                  className="[outline:none] bg-whitesmoke-100 self-stretch h-[50px] relative rounded-8xs box-border overflow-hidden shrink-0 min-w-[171px] border-[1px] border-solid border-gainsboro-300"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-0.5 gap-[11px]">
            <div className="relative text-base capitalize font-medium font-poppins text-black text-left z-[1]">
              Availability
            </div>
            <input
              className="[outline:none] bg-whitesmoke-100 self-stretch h-[50px] relative rounded-8xs box-border overflow-hidden shrink-0 min-w-[250px] z-[1] border-[1px] border-solid border-gainsboro-300"
              type="text"
            />
          </div>
        </form>
      </div>
    );
  };
  
  export default InputPropertyInformationSection;  