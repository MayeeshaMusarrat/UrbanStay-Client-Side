import { useCallback } from "react";
import { useNavigate } from 'react-router-dom';

const OptionWithoutUser = ({ onClose }) => {
  const navigate = useNavigate();
  const onSignInBtnClick = useCallback(() => {
    navigate("/signinpage");
  }, []);
  const onSignUpBtnClick = useCallback(() => {
    navigate("/leading-page");
  }, []);

  return (
    <div className="w-[329px] relative overflow-hidden flex flex-col items-start justify-start py-3.5 px-2.5 box-border gap-[10px] max-w-full max-h-full">
      <div className="w-[311px] relative rounded-3xs bg-white shadow-[0px_0px_20px_rgba(0,_0,_0,_0.05)] h-[107px] z-[0]" />
      <button
        className="cursor-pointer [border:none] p-2.5 bg-[transparent] w-[311px] my-0 mx-[!important] absolute bottom-[68px] left-[10px] h-[35px] flex flex-row flex-wrap items-center justify-center box-border z-[1] hover:bg-lightgray-200 hover:gap-[10px]"
        id="signin"
        onClick={onSignInBtnClick}
      >
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[259px] relative text-base capitalize font-bold font-inter text-black whitespace-pre-wrap text-left flex items-center h-[19px] shrink-0">
          {" "}
          Sign In
        </button>
      </button>
      <button
        className="cursor-pointer [border:none] p-2.5 bg-[transparent] w-[311px] my-0 mx-[!important] absolute bottom-[33px] left-[10px] h-[35px] flex flex-row flex-wrap items-center justify-center box-border z-[2] hover:bg-lightgray-200 hover:gap-[10px]"
        id="signUp"
      >
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[262px] relative text-base capitalize font-inter text-black whitespace-pre-wrap text-left flex items-center shrink-0"
        onClick = {onSignUpBtnClick}
        >
        {" "}
        Sign Up
        </button>
      </button>
    </div>
  );
};

export default OptionWithoutUser;
