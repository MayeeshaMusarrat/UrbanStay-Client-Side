import { useCallback } from "react";

const BecomeMemberButtonContainer = () => {
  const onBecomeMemberBtnClick = useCallback(() => {
    // Please sync "Temp_profile" to the project
  }, []);

  return (
    <button
      className="cursor-pointer [border:none] py-[21px] px-[119px] bg-darkblue-100 w-[1017px] rounded-[9.08px] flex flex-row flex-wrap items-center justify-center box-border hover:bg-darkblue-200 hover:cursor-pointer active:bg-darkblue-500"
      id="member"
      onClick={onBecomeMemberBtnClick}
    >
      <div className="relative text-2xl-8 tracking-[0.18px] leading-[25.42px] font-medium font-inter text-white text-left">
        Become a Member
      </div>
    </button>
  );
};

export default BecomeMemberButtonContainer;