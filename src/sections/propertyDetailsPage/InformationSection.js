const InformationSection = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start py-0 px-1.5 box-border gap-[29px] min-h-[429px] max-w-full text-left text-base text-black font-poppins">
      <div className="flex flex-col items-start justify-start gap-[13px] max-w-full text-7xl text-shade-02 font-roboto">
        <h2 className="m-0 relative text-inherit leading-[30px] font-semibold font-inherit mq450:text-2xl mq450:leading-[24px]">
          Lac Brochet | Ski Mont-Tremblant | Spa 4 Seasons
        </h2>
        <div className="flex flex-col items-start justify-start gap-[17px] text-base">
          <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[4px]">
            <div className="relative leading-[20px]">8 guests</div>
            <div className="relative leading-[20px]">· 3 bedrooms</div>
            <div className="relative leading-[20px]">· 4 beds</div>
            <div className="relative text-base-5 leading-[20px]">· 1 bath</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px] text-mid">
            <img
              className="h-[15px] w-4 relative"
              loading="eager"
              alt=""
              src="/divs197t1q2margin.svg"
            />
            <div className="flex flex-row items-start justify-start gap-[5px]">
              <div className="relative leading-[20px] font-semibold">4.90</div>
              <div className="relative text-base leading-[20px] font-semibold">
                ·
              </div>
            </div>
            <div className="rounded flex flex-row items-center justify-center text-base">
              <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                83 reviews
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[87px] flex flex-col items-start justify-start max-w-full mq750:h-auto">
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-dimgray-700" />
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full mq750:flex-wrap">
          <div className="w-[347px] flex flex-row items-center justify-start gap-[16px] max-w-full mq450:flex-wrap">
            <img
              className="h-14 w-14 relative object-contain"
              loading="eager"
              alt=""
              src="/usericon1@2x.png"
            />
            <div className="h-[87px] flex-1 relative capitalize flex items-center min-w-[179px] z-[1]">
              <span>
                <p className="[margin-block-start:0] [margin-block-end:20px]">
                  <span>
                    <span className="font-medium">
                      hosted by mayeesha Musarrat
                    </span>
                  </span>
                </p>
                <p className="m-0 text-smi">
                  <span>
                    <span>Joined on 23 September 2023</span>
                  </span>
                </p>
              </span>
            </div>
          </div>
          <button className="cursor-pointer py-[5px] pr-[7px] pl-[5px] bg-shade-01 rounded-3xs overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-silver-400">
            <img
              className="h-[35px] w-[35px] relative overflow-hidden shrink-0"
              alt=""
              src="/fluentcall16regular.svg"
            />
            <div className="flex flex-col items-start justify-start py-0 px-0">
              <div className="h-[21px] relative text-sm capitalize font-medium font-poppins text-gray-1000 text-center flex items-center justify-center">
                Contact Host
              </div>
            </div>
          </button>
        </div>
        <div className="self-stretch h-px relative box-border z-[2] border-t-[1px] border-solid border-dimgray-800" />
      </div>
      <div className="self-stretch relative lowercase text-justify [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:10] [-webkit-box-orient:vertical]">
        Our beautifully designed, brand new villa, offering a large space with
        fantastic amenities to ensure a comfortable and enjoyable stay. Our
        villa features a spacious working space area/conference room and a
        rooftop with a full mountain view, perfect for catching up on work or
        relaxing with friends and family. Our property is maintained and cleaned
        by professionals, ensuring a pristine and hygienic environment
        throughout your stay. Our large kitchen and dining areas on all floors
        are fully equipped to cater to your meal preparation needs, while our
        modern lighted pool provides a perfect setting to cool off and unwind.
        Our villa's prime location grants easy access to a variety of high-end
        restaurants and cafes, all located less than a mile away, making it a
        perfect base for your next getaway.
      </div>
    </div>
  );
};

export default InformationSection;
