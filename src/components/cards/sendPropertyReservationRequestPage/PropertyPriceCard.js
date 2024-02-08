const PropertyPriceCard = () => {
    return (
      <div className="w-[473px] rounded-xl bg-shade-01 shadow-[0px_6px_16px_rgba(0,_0,_0,_0.12)] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 pr-[11px] pl-[19px] gap-[17px] min-w-[473px] max-w-full z-[1] text-left text-base text-shade-02 font-poppins border-[1px] border-solid border-neutral-03 mq1100:min-w-full mq450:pt-5 mq450:pb-5 mq450:box-border mq1275:flex-1">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[0px] gap-[12px] text-xs text-neutral-07 mq750:flex-wrap">
          <img
            className="h-[106px] w-[124px] relative rounded-xl object-cover mq750:flex-1"
            loading="eager"
            alt=""
            src="/property-1.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[50px] min-w-[200px] mq450:gap-[50px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative">Entire cabin</div>
              <div className="relative text-sm text-shade-02">
                Glacier Pines Cabin (New Hot Tub Installed!)
              </div>
            </div>
            <div className="flex flex-row items-center justify-start text-sm text-shade-02">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="flex flex-row items-center justify-end gap-[4px]">
                  <img
                    className="h-4 w-4 relative rounded-12xs-5"
                    loading="eager"
                    alt=""
                    src="/star-1.svg"
                  />
                  <div className="h-[21px] relative inline-block">4.66</div>
                </div>
                <div className="relative text-neutral-08">(110 reviews)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[429px] h-[9px] flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border max-w-full">
          <div className="h-px flex-1 relative box-border max-w-full border-t-[1px] border-solid border-neutral-03" />
        </div>
        <h3 className="m-0 h-[33px] relative text-3xl font-semibold font-inherit inline-block mq450:text-lg">
          Price details
        </h3>
        <div className="w-[428px] flex flex-row items-start justify-between pt-0 px-0 pb-2 box-border gap-[20px] max-w-full mq450:flex-wrap">
          <div className="relative [text-decoration:underline]">
            500 x 5 nights
          </div>
          <div className="relative whitespace-nowrap">$2,500</div>
        </div>
        <div className="w-[429px] flex flex-col items-start justify-start pt-0 px-0 pb-[11px] box-border gap-[18px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
            <div className="relative [text-decoration:underline]">
              Cleaning fee
            </div>
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <div className="relative whitespace-nowrap">$200</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative [text-decoration:underline]">
              Service fee
            </div>
            <div className="relative whitespace-nowrap">$0</div>
          </div>
        </div>
        <div className="w-[429px] h-[7px] flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full">
          <div className="h-px flex-1 relative box-border max-w-full border-t-[1px] border-solid border-neutral-03" />
        </div>
        <div className="w-[426px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
          <div className="relative font-medium">Total (USD)</div>
          <div className="relative font-semibold whitespace-nowrap">$2,400</div>
        </div>
      </div>
    );
  };
  
  export default PropertyPriceCard;  