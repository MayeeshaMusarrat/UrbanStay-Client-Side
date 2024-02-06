import { useCallback } from "react";

const PropertyPriceCard = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Confirm_reservation" to the project
  }, []);

  return (
    <div className="self-stretch rounded-xl bg-gray-1500 shadow-[0px_6px_16px_rgba(0,_0,_0,_0.12)] box-border flex flex-col items-center justify-start pt-[22px] pb-[21px] pr-3.5 pl-[18px] gap-[24px_16px] max-w-full text-left text-3xl text-shade-02 font-roboto border-[1px] border-solid border-neutral-03">
      <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start py-0 px-0">
            <div className="h-[52px] relative leading-[26px] font-semibold flex items-center whitespace-nowrap mq450:text-lg mq450:leading-[21px]">
              $108 
            </div>
          </div>
          <div className="h-11 relative text-base leading-[20px] inline-block">
            night
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 box-border gap-[13px] max-w-full text-3xs">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-center justify-center max-w-full">
              <div className="flex-1 rounded-t-lg rounded-b-none box-border flex flex-row items-center justify-start pt-0 px-3 pb-px gap-[77px] max-w-full border-[1px] border-solid border-neutral-06 mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <div className="relative leading-[12px] uppercase font-extrabold z-[1]">
                    Check-in
                  </div>
                  <div className="relative text-sm-8 leading-[18px] text-black z-[1]">
                    10/20/2023
                  </div>
                </div>
                <div className="overflow-hidden flex flex-col items-center justify-start py-3 pr-3 pl-[13px] gap-[2px] z-[1] border-l-[0.8px] border-solid border-neutral-06">
                  <div className="flex flex-row items-start justify-start py-0 pr-3 pl-0">
                    <div className="relative leading-[12px] uppercase font-extrabold">
                      Checkout
                    </div>
                  </div>
                  <div className="relative text-smi leading-[18px] text-black">
                    11/7/2023
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center max-w-full">
              <div className="flex-1 rounded-t-none rounded-b-lg box-border flex flex-col items-start justify-start pt-3 px-3 pb-[13px] gap-[2px] max-w-full border-[1px] border-solid border-neutral-06">
                <div className="relative leading-[12px] uppercase font-extrabold z-[1]">
                  Guests
                </div>
                <div className="relative text-sm leading-[18px] z-[1]">
                  2 guests
                </div>
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] py-3.5 pr-[23px] pl-5 bg-[transparent] self-stretch rounded-lg [background:linear-gradient(90deg,_#2c2e97,_#371dae_50%,_#2c2e97)] flex flex-row items-center justify-center relative gap-[10px]"
            onClick={onButtonClick}
          >
            <img
              className="h-full w-full absolute my-0 mx-[!important] top-[0.4px] right-[0.5px] bottom-[-0.4px] left-[-0.5px] max-w-full overflow-hidden max-h-full"
              alt=""
            />
            <div className="relative text-base leading-[20px] font-semibold font-roboto text-shade-01 text-center z-[1]">
              Reserve
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[13px] text-base">
        <div className="relative text-sm leading-[18px] text-center">
          You won't be charged yet
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-between py-0 pr-px pl-0 gap-[20px] text-base-6 mq450:flex-wrap mq450:justify-center">
            <div className="relative leading-[20px]">$180 x 18 nights</div>
            <div className="relative text-base leading-[20px] whitespace-nowrap">
              $3,237
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between py-0 pr-px pl-0 gap-[20px] mq450:flex-wrap">
            <div className="relative leading-[20px]">Cleaning fee</div>
            <div className="relative text-base-1 leading-[20px] text-right whitespace-nowrap">
              $176
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between py-0 pr-px pl-0 gap-[20px] mq450:flex-wrap">
            <div className="relative leading-[20px]">Service fee</div>
            <div className="w-[42px] relative leading-[20px] text-right flex items-center shrink-0 whitespace-nowrap">
              $344
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-3 px-0 gap-[5px] border-t-[0.8px] border-solid border-darkgray-300 mq450:flex-wrap">
          <div className="relative leading-[20px] font-semibold whitespace-pre-wrap">{`Total  `}</div>
          <input
            className="w-[50px] [border:none] [outline:none] font-semibold font-roboto text-base bg-[transparent] h-5 relative leading-[20px] text-shade-02 text-left flex items-center whitespace-nowrap"
            placeholder="$2,462"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyPriceCard;
