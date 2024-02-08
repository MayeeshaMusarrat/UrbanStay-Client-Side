import { useCallback } from "react";
import OTPIcon from "../logos/OTPIcon";

const OTPForm = () => {
  const onBecomeMemberBtnClick = useCallback(() => {
    // Please sync "Temp_profile" to the project
  }, []);

  return (
    <div className="w-[442px] rounded-3xs bg-shade-01 overflow-hidden shrink-0 flex flex-col items-center justify-start py-6 pr-[49px] pl-12 box-border gap-[6px] max-w-full z-[1] text-center text-xl text-darkblue-100 font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border">
      <div className="flex flex-col items-center justify-start gap-[11px]">
        <OTPIcon />
        <b className="relative tracking-[0.1px] leading-[32px] z-[2] mq450:text-base mq450:leading-[26px]">
          Enter OTP Code
        </b>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full text-2xs text-black">
        <div className="h-[46px] flex-1 relative tracking-[0.1px] leading-[20px] font-light inline-block max-w-full z-[2]">
          A four digit OTP code has been sent to your email address. Kindly
          enter the code to proceed.
        </div>
      </div>
      <div className="w-[323px] flex flex-row items-start justify-between pt-0 px-5 pb-[19px] box-border gap-[20px] max-w-full mq450:flex-wrap mq450:justify-center">
        <input
          className="[outline:none] bg-[transparent] h-[41px] w-10 relative rounded-8xs box-border overflow-hidden shrink-0 z-[2] border-[1px] border-solid border-darkgray-500"
          type="text"
        />
        <input
          className="[outline:none] bg-[transparent] h-[41px] w-10 relative rounded-8xs box-border overflow-hidden shrink-0 z-[2] border-[1px] border-solid border-darkgray-500"
          type="text"
        />
        <input
          className="[outline:none] bg-[transparent] h-[41px] w-10 relative rounded-8xs box-border overflow-hidden shrink-0 z-[2] border-[1px] border-solid border-darkgray-500"
          type="text"
        />
        <input
          className="[outline:none] bg-[transparent] h-[41px] w-10 relative rounded-8xs box-border overflow-hidden shrink-0 z-[2] border-[1px] border-solid border-darkgray-500"
          type="text"
        />
      </div>
      <button
        className="cursor-pointer [border:none] p-2 bg-darkblue-100 w-[283px] rounded-[9.08px] flex flex-row items-center justify-center box-border whitespace-nowrap z-[2] hover:bg-mediumslateblue hover:cursor-pointer active:bg-midnightblue-500"
        onClick={onBecomeMemberBtnClick}
      >
        <div className="relative text-base tracking-[0.18px] leading-[25.42px] font-semibold font-poppins text-shade-01 text-center">
          Verify OTP
        </div>
      </button>
    </div>
  );
};

export default OTPForm;
