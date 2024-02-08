const SelectAmenitiesSection = () => {
  return (
    <section className="w-[1396px] flex flex-row items-start justify-start pt-0 px-5 pb-[30px] box-border gap-[22px] shrink-0 max-w-full text-left text-5xl text-black font-poppins lg:flex-wrap mq750:pb-[62px] mq750:box-border">
      <div className="w-[339px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[339px] max-w-full lg:flex-1 mq450:min-w-full">
        <div className="self-stretch h-[204px] relative capitalize inline-block shrink-0">
          <p className="m-0">Amenities</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0 text-base text-darkslategray-400">
            Select the amenities and safety items present in your place. .
          </p>
        </div>
      </div>
      <div className="flex-1 rounded-3xs bg-shade-01 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start py-[37px] px-[33px] box-border gap-[67px] min-w-[647px] min-h-[523px] max-w-full text-base lg:min-h-[auto] mq450:gap-[67px] mq750:pt-6 mq750:pb-6 mq750:box-border mq750:min-w-full mq1050:gap-[67px]">
        <div className="w-[995px] h-[523px] relative rounded-3xs bg-shade-01 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />
        <div className="w-[805px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border gap-[41px] max-w-full mq450:gap-[41px]">
          <div className="h-6 relative capitalize font-medium inline-block z-[1]">
            Essentials
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] text-smi mq750:flex-wrap">
            <div className="h-[113px] w-[138px] flex flex-col items-start justify-start gap-[26px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[10px]">
                <input
                  className="m-0 h-[19px] w-[19px] relative rounded-sm box-border border-[1px] border-solid border-black"
                  type="checkbox"
                />
                <div className="flex-1 relative capitalize">Waterfront</div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[10px]">
                <input
                  className="m-0 h-[19px] w-[19px] relative rounded-sm box-border border-[1px] border-solid border-black"
                  type="checkbox"
                />
                <div className="h-5 flex-1 relative capitalize inline-block">
                  Washer
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                <input
                  className="m-0 h-[19px] w-[19px] relative rounded-sm box-border border-[1px] border-solid border-black"
                  type="checkbox"
                />
                <div className="flex-1 relative capitalize">Dryer</div>
              </div>
            </div>
            <div className="h-[114px] w-[151px] flex flex-col items-start justify-start py-0 pr-[13px] pl-0 box-border">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[26px]">
                <div className="self-stretch flex flex-row items-end justify-start gap-[10px]">
                  <input
                    className="m-0 h-[19px] w-[19px] relative rounded-sm box-border border-[1px] border-solid border-black"
                    type="checkbox"
                  />
                  <div className="flex-1 relative capitalize">Kitchen</div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                  <input
                    className="m-0 h-[19px] w-[19px] relative rounded-sm box-border border-[1px] border-solid border-black"
                    type="checkbox"
                  />
                  <div className="h-5 flex-1 relative capitalize inline-block">
                    Hot tub
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[10px]">
                  <input
                    className="m-0 h-[19px] w-[19px] relative rounded-sm box-border border-[1px] border-solid border-black"
                    type="checkbox"
                  />
                  <div className="h-5 flex-1 relative capitalize inline-block">
                    TV
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[138px] flex flex-col items-start justify-start gap-[26px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[10px]">
                <input
                  className="m-0 h-[19px] w-[19px] relative rounded-sm box-border border-[1px] border-solid border-black"
                  type="checkbox"
                />
                <div className="flex-1 relative capitalize">Parking Spot</div>
              </div>
              <div className="flex flex-row items-end justify-start gap-[10px]">
                <input
                  className="m-0 h-[19px] w-[19px] relative rounded-sm box-border border-[1px] border-solid border-black"
                  type="checkbox"
                />
                <div className="relative capitalize">Air Conditioning</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                <input
                  className="m-0 h-[19px] w-[19px] relative rounded-sm box-border border-[1px] border-solid border-black"
                  type="checkbox"
                />
                <div className="h-5 flex-1 relative capitalize inline-block">
                  Wi-fi
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[523px] flex flex-col items-start justify-start py-0 pr-[3px] pl-0 box-border gap-[32px] max-w-full mq750:gap-[32px]">
          <div className="w-[339px] relative capitalize font-medium inline-block max-w-full z-[1]">
            Safety Items
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full text-smi">
            <div className="w-[466px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
              <div className="flex flex-row items-end justify-start gap-[14px]">
                <input
                  className="m-0 h-[19px] w-[19px] relative rounded-sm box-border z-[1] border-[1px] border-solid border-black"
                  type="checkbox"
                />
                <div className="relative capitalize z-[1]">
                  CCTV Surveillance
                </div>
              </div>
              <div className="flex flex-row items-end justify-start gap-[14px]">
                <input
                  className="m-0 h-[19px] w-[19px] relative rounded-sm box-border z-[1] border-[1px] border-solid border-black"
                  type="checkbox"
                />
                <div className="relative capitalize z-[1]">
                  Fire extinguisher
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[27px]">
                <div className="flex flex-row items-end justify-start gap-[14px]">
                  <input
                    className="m-0 h-[19px] w-[19px] relative rounded-sm box-border z-[1] border-[1px] border-solid border-black"
                    type="checkbox"
                  />
                  <div className="h-5 relative capitalize inline-block z-[1]">
                    Smoke Alarm
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <input
                    className="m-0 h-[19px] w-[19px] relative rounded-sm box-border z-[1] border-[1px] border-solid border-black"
                    type="checkbox"
                  />
                  <div className="relative capitalize z-[1]">
                    Emergency radio
                  </div>
                </div>
              </div>
              <div className="h-[69px] flex flex-col items-start justify-start gap-[28px]">
                <div className="flex-1 flex flex-row items-end justify-start gap-[13px]">
                  <input
                    className="m-0 h-[19px] w-[19px] relative rounded-sm box-border z-[1] border-[1px] border-solid border-black"
                    type="checkbox"
                  />
                  <div className="relative capitalize z-[1]">First Aid Kit</div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <input
                    className="m-0 h-[19px] w-[19px] relative rounded-sm box-border z-[1] border-[1px] border-solid border-black"
                    type="checkbox"
                  />
                  <div className="relative capitalize z-[1]">
                    Carbon Monoxide alarm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectAmenitiesSection;
