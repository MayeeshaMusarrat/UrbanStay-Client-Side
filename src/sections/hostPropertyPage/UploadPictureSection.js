const UploadPictureSection = () => {
    return (
      <div className="w-[1356px] flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border max-w-full text-left text-5xl text-black font-poppins">
        <div
          className="flex-1 flex flex-row items-start justify-start gap-[22px] max-w-full lg:flex-wrap"
          data-scroll-to="categoriesListItemFrame"
        >
          <div className="h-[204px] w-[339px] relative capitalize inline-block shrink-0 min-w-[339px] max-w-full lg:flex-1 mq450:min-w-full">
            <p className="m-0">property Gallery</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 text-base text-darkslategray-400">
              Upload 5 pictures of your property.
            </p>
          </div>
          <div className="flex-1 rounded-3xs bg-shade-01 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start pt-[47px] pb-[26px] pr-14 pl-[34px] box-border gap-[27px] min-w-[647px] max-w-full text-xs text-gray-1200 mq450:pt-[31px] mq450:pb-5 mq450:box-border mq750:min-w-full mq1050:pr-7 mq1050:box-border">
            <div className="w-[995px] h-[382px] relative rounded-3xs bg-shade-01 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />
            <div className="w-[151px] rounded-3xs bg-gainsboro-200 flex flex-row items-start justify-end pt-2.5 px-3 pb-[117px] box-border z-[1]">
              <div className="h-[139px] w-[151px] relative rounded-3xs bg-gainsboro-200 hidden" />
              <img
                className="h-3 w-[11px] relative z-[2]"
                loading="eager"
                alt=""
              />
            </div>
            <div className="self-stretch flex flex-row items-end justify-start gap-[28px] max-w-full mq1050:flex-wrap">
              <div className="h-[52px] flex-1 relative rounded-8xs bg-whitesmoke-100 box-border overflow-hidden min-w-[502px] max-w-full z-[1] border-[1px] border-solid border-gainsboro-300 mq750:min-w-full" />
              <button className="cursor-pointer [border:none] p-2.5 bg-darkblue-100 h-[49px] w-[105px] rounded-[9.08px] flex flex-row flex-wrap items-center justify-center box-border z-[1] hover:bg-mediumslateblue hover:gap-[10px]">
                <b className="relative text-base capitalize font-inter text-shade-01 text-center">
                  Upload
                </b>
              </button>
            </div>
            <div className="self-stretch h-[63px] relative capitalize font-light inline-block shrink-0 z-[1]">
              <ul className="m-0 font-inherit text-inherit pl-4">
                <li className="mb-0">
                  The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the
                  main picture first
                </li>
                <li>Maximum number of files upload will be 5 files.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UploadPictureSection;  