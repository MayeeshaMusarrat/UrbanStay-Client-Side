import { useCallback } from "react";

const PropertyPriceCard = () => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "Confirm_reservation" to the project
  }, []);

  return (
    <div className="absolute top-[17px] left-[28px] h-[532px] flex flex-row items-start justify-start gap-[10px] text-left text-base text-gray-200 font-roboto">
      <div className="flex flex-row items-center justify-start z-[0]">
        <div className="w-[363px] rounded-xl bg-gray-700 shadow-[0px_6px_16px_rgba(0,_0,_0,_0.12)] box-border flex flex-row flex-wrap items-center justify-center py-5 px-4 gap-[16px_203px] border-[1px] border-solid border-gainsboro-100">
          <div className="w-[322.7px] relative h-[226px] text-3xl">
            <div className="absolute top-[2.4px] left-[0.2px] w-[89.7px] h-[45.8px]">
              <div className="absolute top-[0px] left-[0px] w-[53.9px] h-[45.8px]">
                <div className="absolute top-[0px] left-[0px] leading-[26px] font-semibold flex items-center w-[53.9px]">
                  $108 
                </div>
              </div>
              <div className="absolute top-[5.3px] left-[53.7px] text-base leading-[20px] flex items-center w-9 h-[17.6px]">
                night
              </div>
            </div>
            <div className="absolute top-[47px] left-[0px] w-[322.7px] h-32 text-sm-8 text-black">
              <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-lg bg-white h-28">
                <div className="absolute top-[0px] left-[0px] w-[322.7px] h-28">
                  <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-14">
                    <div className="absolute top-[0px] left-[calc(50%_-_161.35px)] w-[322.7px] h-14">
                      <div className="absolute top-[0px] left-[0px] w-[161px] h-14 overflow-hidden">
                        <div className="absolute w-full top-[0px] right-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-start pt-[26px] pb-2.5 pr-[74.96000671386719px] pl-3 box-border min-h-[56px]">
                          <div className="relative leading-[18px]">
                            10/20/2023
                          </div>
                        </div>
                        <div className="absolute w-[calc(100%_-_24px)] top-[12px] right-[12px] left-[12px] overflow-hidden flex flex-col items-start justify-start py-0 pr-[90.96000671386719px] pl-0 box-border max-w-[160.9600067138672px] text-3xs text-gray-200">
                          <div className="relative leading-[12px] uppercase font-extrabold">
                            Check-in
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-[0px] left-[161px] box-border w-[161.8px] h-14 overflow-hidden text-smi border-l-[0.8px] border-solid border-darkgray-100">
                        <div className="absolute w-[calc(100%_-_0.8px)] top-[0px] right-[0px] left-[0.8px] overflow-hidden flex flex-col items-start justify-start pt-[26px] pb-2.5 pr-[85.96000671386719px] pl-3 box-border min-h-[56px]">
                          <div className="relative leading-[18px]">
                            11/7/2023
                          </div>
                        </div>
                        <div className="absolute w-[calc(100%_-_24.8px)] top-[12px] right-[12px] left-[12.8px] overflow-hidden flex flex-col items-start justify-start py-0 pr-[84.96000671386719px] pl-0 box-border max-w-[161.75999450683594px] text-3xs text-gray-200">
                          <div className="relative leading-[12px] uppercase font-extrabold">
                            Checkout
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute h-[calc(100%_+_1px)] w-full top-[0px] right-[0px] bottom-[-1px] left-[0px] rounded-t-lg rounded-b-none box-border border-[1px] border-solid border-darkgray-100" />
                  </div>
                  <div className="absolute w-full top-[56px] right-[0px] left-[0px] h-14 text-sm text-gray-200">
                    <div className="absolute top-[0px] left-[calc(50%_-_161.35px)] w-[322.7px] h-14">
                      <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden">
                        <div className="absolute w-full top-[0px] right-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-start pt-[26px] pb-2.5 pr-9 pl-3 box-border min-h-[56px]">
                          <div className="flex flex-col items-start justify-start py-0 pr-[220.73001098632812px] pl-0">
                            <div className="relative leading-[18px]">
                              2 guests
                            </div>
                          </div>
                        </div>
                        <div className="absolute w-[calc(100%_-_24px)] top-[12px] right-[12px] left-[12px] overflow-hidden flex flex-col items-start justify-start py-0 pr-[260.7300109863281px] pl-0 box-border max-w-[322.7300109863281px] text-3xs">
                          <div className="relative leading-[12px] uppercase font-extrabold">
                            Guests
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute h-[calc(100%_+_1px)] w-full top-[0px] right-[0px] bottom-[-1px] left-[0px] rounded-t-none rounded-b-lg box-border border-[1px] border-solid border-darkgray-100" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute w-full top-[178px] right-[0px] left-[0px] rounded-lg [background:linear-gradient(90deg,_#2c2e97,_#371dae_50%,_#2c2e97)] h-12 cursor-pointer text-center text-base text-white"
              onClick={onButtonContainerClick}
            >
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
              />
              <div className="absolute w-[calc(100%_-_48px)] top-[14px] right-[24px] left-[24px] h-5">
                <div className="absolute top-[0px] left-[calc(50%_-_29.35px)] leading-[20px] font-semibold">
                  Reserve
                </div>
              </div>
            </div>
          </div>
          <div className="w-[322.7px] relative h-[26px] text-center text-sm">
            <div className="absolute top-[8px] left-[calc(50%_-_77.35px)] leading-[18px]">
              You won't be charged yet
            </div>
          </div>
          <div className="w-[322.8px] relative h-5 text-base-6">
            <div className="absolute top-[0px] left-[0px] leading-[20px]">
              $180 x 18 nights
            </div>
            <div className="absolute top-[0px] left-[273.8px] text-base leading-[20px]">
              $3,237
            </div>
          </div>
          <div className="relative leading-[20px]">Cleaning fee</div>
          <div className="relative text-base-1 leading-[20px]">$176</div>
          <div className="relative leading-[20px]">Service fee</div>
          <div className="relative leading-[20px]">$344</div>
          <div className="w-[331px] relative box-border h-[57px] border-t-[0.8px] border-solid border-darkgray-200">
            <div className="absolute w-[calc(100%_-_136.4px)] top-[24.8px] right-[136.4px] left-[0px] h-5">
              <div className="absolute w-[calc(100%_-_152.5px)] top-[0px] right-[152.5px] left-[0px] h-5">
                <div className="absolute top-[0px] left-[0px] leading-[20px] font-semibold whitespace-pre-wrap">{`Total  `}</div>
              </div>
              <div className="absolute h-full top-[0px] bottom-[0px] left-[42.1px] w-[50.5px]">
                <div className="absolute top-[0px] left-[0px] leading-[20px] font-semibold">
                  $2,462
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[calc(100%_+_0.3px)] absolute my-0 mx-[!important] right-[-0.3px] bottom-[0.2px] left-[0px] h-[21.8px] z-[1] text-center text-sm text-dimgray-100">
        <div className="absolute top-[0px] left-[calc(50%_-_73.25px)] rounded flex flex-row items-start justify-start">
          <div className="flex flex-row items-center justify-start py-0 pr-[1.69000244140625px] pl-0 gap-[1.89px]">
            <div className="flex flex-col items-start justify-start py-0 pr-4 pl-0">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0"
                alt=""
                src="/frame.svg"
              />
            </div>
            <div className="relative leading-[18px] font-semibold">
              Report this listing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPriceCard;