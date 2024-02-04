const ReviewDetailsPopup = ({ onClose }) => {
    return (
      <div className="w-[1167px] relative rounded-3xs h-[631px] overflow-y-auto max-w-full max-h-full overflow-auto text-left text-sm text-black font-poppins">
        <img
          className="absolute top-[58px] left-[38px] rounded-[30px] w-[1069px] h-[515px]"
          alt=""
          src="/rectangle-108.svg"
        />
        <div className="absolute top-[58px] left-[38px] w-[1069px] h-[81px]">
          <div className="absolute top-[0px] left-[5px] rounded-15xl bg-white w-[1064px] h-20" />
          <img
            className="absolute top-[32px] left-[38px] rounded-15xl w-[22px] h-[21px] cursor-pointer"
            alt=""
            src="/cross.svg"
            onClick={onClose}
          />
          <div className="absolute top-[80.5px] left-[-0.5px] box-border w-[1070px] h-px border-t-[1px] border-solid border-silver-300" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[33px] left-[calc(50%_-_80.5px)] text-mid capitalize font-medium font-inter text-black text-center inline-block">
            Review Details
          </button>
        </div>
        <div
          className="absolute top-[169px] left-[86px] bg-gainsboro-200 w-[465px] h-[344px]"
          id="pi"
        />
        <div className="absolute top-[285px] left-[584px] capitalize inline-block w-[484px] h-[228px]">{`As soon as we arrived we were greeted by the villa staff so beautifully, as they put some flowers on our necks and welcoming drinks. Our stay was amazing we felt at peace. Also Agus and his wife made us wonderful welcoming dinner every bite was delicious. Thank you for the wonderful stay. `}</div>
        <div className="absolute top-[calc(50%_-_146.5px)] left-[calc(50%_+_0.5px)] flex flex-row items-center justify-center gap-[15px]">
          <img
            className="w-[70px] relative h-[71px] object-cover"
            alt=""
            src="/usericon@2x.png"
          />
          <div className="flex flex-row items-start justify-start relative gap-[14px]">
            <div className="w-[236px] relative capitalize inline-block h-[79px] shrink-0 z-[0]">
              <p className="[margin-block-start:0] [margin-block-end:10px] font-medium">
                mayeesha Musarrat
              </p>
            </div>
            <div className="w-[188px] absolute my-0 mx-[!important] top-[25px] left-[0px] bg-yellow h-5 overflow-hidden shrink-0 z-[1]" />
            <div className="w-[125px] absolute my-0 mx-[!important] top-[25px] left-[0px] text-smi capitalize inline-block z-[2]">
              <p className="[margin-block-start:0] [margin-block-end:10px]">
                &nbsp;
              </p>
              <p className="m-0 font-light">23 September 2023</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ReviewDetailsPopup;