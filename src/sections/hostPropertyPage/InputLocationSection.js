const InputLocationSection = () => {
    return (
      <div
        className="w-[1356px] flex flex-row items-start justify-start gap-[22px] max-w-full text-left text-5xl text-black font-poppins lg:flex-wrap"
        data-scroll-to="frameLocContainer"
      >
        <div className="h-[204px] w-[339px] relative capitalize inline-block shrink-0 min-w-[339px] max-w-full lg:flex-1 mq450:min-w-full">
          <p className="m-0">Location</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0 text-base text-darkslategray-400">
            Help the renters find your home!
          </p>
        </div>
        <div className="flex-1 rounded-3xs bg-shade-01 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[37px] pb-[52px] pr-[46px] pl-9 box-border gap-[56px] min-w-[647px] max-w-full text-base mq750:gap-[56px] mq750:pt-6 mq750:pb-[34px] mq750:box-border mq750:min-w-full mq1050:pr-[23px] mq1050:box-border">
          <div className="w-[995px] h-[760px] relative rounded-3xs bg-shade-01 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-px box-border gap-[35px] max-w-full mq450:gap-[35px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[31px] z-[1] mq450:gap-[31px] mq1050:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[212px]">
                <div className="relative capitalize font-medium">Country</div>
                <div className="self-stretch h-[50px] relative rounded-8xs bg-whitesmoke-100 box-border overflow-hidden shrink-0 min-w-[170px] border-[1px] border-solid border-gainsboro-300" />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[212px]">
                <div className="w-[233px] h-6 relative capitalize font-medium inline-block">
                  State
                </div>
                <div className="self-stretch h-[50px] relative rounded-8xs bg-whitesmoke-100 box-border overflow-hidden shrink-0 border-[1px] border-solid border-gainsboro-300" />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[212px]">
                <div className="w-[233px] relative capitalize font-medium inline-block">
                  Zipcode
                </div>
                <input
                  className="[outline:none] bg-whitesmoke-100 self-stretch h-[50px] relative rounded-8xs box-border overflow-hidden shrink-0 min-w-[170px] border-[1px] border-solid border-gainsboro-300"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
              <div className="w-[339px] h-6 relative capitalize font-medium inline-block max-w-full z-[1]">
                Address Line
              </div>
              <input
                className="[outline:none] bg-whitesmoke-100 self-stretch h-[50px] relative rounded-8xs box-border overflow-hidden shrink-0 min-w-[250px] z-[1] border-[1px] border-solid border-gainsboro-300"
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch h-[404px] relative bg-gainsboro-200 z-[1]" />
        </div>
      </div>
    );
  };
  
  export default InputLocationSection;