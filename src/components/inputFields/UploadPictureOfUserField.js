const UploadPictureOfUserField = () => {
    return (
      <div className="w-[1013px] flex flex-row flex-wrap items-center justify-start gap-[22px] text-left text-lg text-black font-poppins">
        <div className="relative capitalize font-semibold">Upload Your Photo</div>
        <div className="w-[1004px] relative h-[102px] text-center text-base">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-orangered-200 box-border w-[1004px] h-[102px] border-[1px] border-dashed border-darkblue-100" />
          <div className="absolute top-[33px] left-[296px] w-[408px] h-11">
            <div className="absolute top-[0px] left-[0px] inline-block w-[408px]">
              <span className="font-medium">{`Drag your images here, or `}</span>
              <b className="text-royalblue">browse</b>
            </div>
            <div className="absolute top-[26px] left-[83.4px] text-xs font-medium text-gray-900 whitespace-pre-wrap inline-block w-[242.7px]">
              Supported: JPG, JPEG, PNG
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UploadPictureOfUserField;  