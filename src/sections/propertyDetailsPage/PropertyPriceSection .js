import PropertyPriceCard from "./PropertyPriceCard";

const PropertyPriceSection = () => {
  return (
    <div className="h-[2113px] w-[453px] relative min-w-[453px] max-w-full z-[1] text-center text-sm text-shade-02 font-roboto mq750:min-w-full mq450:h-auto mq450:min-h-[2113] mq1250:flex-1">
      <img
        className="absolute top-[0.5px] left-[316.2px] w-4 h-4"
        loading="eager"
        alt=""
        src="/frame.svg"
      />
      <div className="absolute top-[-0.5px] left-[340.4px] leading-[18px] font-semibold flex items-center justify-center">
        Share
      </div>
      <img
        className="absolute top-[0.5px] left-[397.4px] w-4 h-4"
        alt=""
        src="/frame1.svg"
      />
      <div className="absolute top-[-0.5px] left-[421.5px] leading-[18px] font-semibold flex items-center justify-center">
        Save
      </div>
      <div className="w-[453px] box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-8 pb-[1490px] pr-[45px] pl-[47px] gap-[11px] max-w-full text-left text-3xl border-[1px] border-solid border-black">
        <PropertyPriceCard />
        <div className="rounded flex flex-row items-center justify-start py-0 px-0 gap-[18px] text-center text-sm text-dimgray-100">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0"
            alt=""
            src="/frame2.svg"
          />
          <div className="relative leading-[18px] font-semibold">
            Report this listing
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPriceSection;
