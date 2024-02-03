const GetStartedButtonContainer = ({
  onGeStartedBtnClick,
  onGoBackBtnTextClick,
}) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[22px] text-left text-smi text-black font-inter">
      <button
        className="cursor-pointer [border:none] p-2.5 bg-darkblue-100 w-37 rounded-[9.08px] h-[50px] flex flex-row flex-wrap items-center justify-center box-border hover:bg-darkblue-200 hover:gap-[10px] hover:cursor-pointer active:bg-darkblue-500"
        onClick={onGeStartedBtnClick}
      >
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base capitalize font-bold font-inter text-white text-center inline-block">
          Get Started
        </button>
      </button>
      <div className="h-4 flex flex-row flex-wrap items-start justify-start">
        <div className="relative capitalize font-light pr-1">Changed your mind?</div>
        <div
          className="relative capitalize cursor-pointer"
          onClick={onGoBackBtnTextClick}
        >
          <span className="font-light">{" "}</span>
          <span className="font-medium hover:[text-decoration:underline]">
            go back
          </span>
        </div>
      </div>
    </div>
  );
};

export default GetStartedButtonContainer;