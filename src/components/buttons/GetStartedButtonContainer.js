const GetStartedButtonContainer = ({
    onGeStartedBtnClick,
    onGoBackBtnTextClick,
  }) => {
    return (
      <div className="flex flex-col items-start justify-start gap-[22px] text-left text-smi text-black font-inter">
        <button
          className="cursor-pointer [border:none] p-2.5 bg-darkblue w-40 rounded-[9.08px] h-[55px] flex flex-row flex-wrap items-center justify-center box-border hover:bg-blueviolet hover:gap-[10px] hover:cursor-pointer"
          onClick={onGeStartedBtnClick}
        >
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xl capitalize font-bold font-inter text-white text-center inline-block">
            Get Started
          </button>
        </button>
        <div className="h-4 flex flex-row flex-wrap items-start justify-start">
          <div className="relative capitalize font-light">Changed your mind?</div>
          <div
            className="relative capitalize cursor-pointer"
            onClick={onGoBackBtnTextClick}
          >
            <span className="font-light">{` `}</span>
            <span className="[text-decoration:underline] font-medium">
              go back
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default GetStartedButtonContainer;  