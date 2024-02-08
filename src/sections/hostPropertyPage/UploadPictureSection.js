const UploadPictureSection = () => {
  return (
    <div className="w-[1356px] flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[22px] max-w-full text-left text-5xl text-black font-poppins lg:flex-wrap">
      <div className="h-[204px] w-[339px] relative capitalize inline-block shrink-0 min-w-[339px] max-w-full lg:flex-1 mq450:min-w-full">
        <p className="m-0">property Gallery</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0 text-base text-darkslategray-400">
          Upload 5 pictures of your property.
        </p>
      </div>
      <div className="flex-1 rounded-3xs bg-shade-01 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-end py-[26px] pr-[52px] pl-[45px] box-border gap-[35px] min-w-[647px] min-h-[382px] max-w-full text-xs text-gray-1200 lg:min-h-[auto] mq450:pt-5 mq450:pb-5 mq450:box-border mq750:gap-[35px] mq750:min-w-full mq1050:pr-[26px] mq1050:box-border">
        <div className="w-[995px] h-[382px] relative rounded-3xs bg-shade-01 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />
        <img
          className="w-[139px] h-[139px] relative rounded-3xs overflow-hidden shrink-0 z-[1]"
          loading="eager"
          alt=""
          src="/frame-2195.svg"
        />
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border gap-[26px] max-w-full">
          <div className="self-stretch flex flex-row items-end justify-start gap-[28px] max-w-full mq1050:flex-wrap">
            <input 
            className="h-[52px] flex-1 relative rounded-8xs bg-whitesmoke-100 box-border overflow-hidden min-w-[502px] max-w-full z-[1] border-[1px] border-solid border-gainsboro-300 mq750:min-w-full" 
            readOnly
            />
            <button className="cursor-pointer [border:none] p-[15px] bg-darkblue-100 w-[105px] rounded-[9.08px] flex flex-row flex-wrap items-center justify-center box-border z-[1] hover:bg-mediumslateblue hover:gap-[10px_0px]">
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