import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LeadingPage = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState(""); // State to track user selection

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onContinueButtonClick = useCallback(() => {
    if (userType === "host") {
      navigate("/host-welcome");
    } else if (userType === "guest") {
      navigate("/guest-welcome");
    } else {
      console.error("Invalid user type");
    }
  }, [navigate, userType]);

  const onRadioChange = (event) => {
    setUserType(event.target.value);
  };

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[750px] overflow-hidden flex flex-row items-center justify-center py-[29px] px-6 box-border text-center text-6xl text-darkblue font-poppins">
      <div className="w-[1355px] h-[644px] flex flex-row flex-wrap items-end justify-center gap-[52px] z-[0]">
        <img
          className="h-[561px] w-[604px] relative object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
          loading="eager"
          alt=""
          src="/leadingpagePic@2x.png"
          data-animate-on-scroll
        />
        <div
          className="flex-1 overflow-hidden flex flex-col items-center justify-start py-[15px] px-4 gap-[36px] [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_slide-in-right] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="flex flex-col items-start justify-start gap-[33px]">
            <b className="w-[666px] relative tracking-[0.1px] leading-[40px] inline-block h-[79px] shrink-0">
              We are extremely grateful to you for wanting to join our vast
              community!
            </b>
            <div className="w-[667px] relative text-base leading-[23px] font-medium font-inter text-black inline-block">
              <span className="capitalize">You</span>
              <span className="lowercase">
                {` can get to the process of renting and hosting a place of your preference in a minute! `}
              </span>
              <span className="capitalize">{`Allow `}</span>
              <span className="lowercase">
                {`us to guide you through our service for optimal experience. `}
              </span>
            </div>
            <b className="w-[666px] relative tracking-[0.1px] leading-[40px] inline-block h-[38px] shrink-0">{`Let’s Get Started! `}</b>
            <div className="w-[667px] relative text-base leading-[23px] font-medium font-inter text-black inline-block">
              <span className="capitalize">Kindly</span>
              <span className="lowercase">{` select one of the options below to jumpstart your journey with `}</span>
              <span className="capitalize">{`UrbanStay. `}</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[33px] text-left text-base text-black">
            <div className="w-[636px] relative box-border h-px border-t-[1px] border-solid border-lightgray-300" />
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <input
                className="cursor-pointer m-0 w-[21px] relative bg-gainsboro h-[21px]"
                type="radio"
                name="user-type"
                value="host"
                checked={userType === "host"}
                onChange={onRadioChange}
              />
              <div className="w-[566px] relative leading-[23px] font-medium inline-block shrink-0">
                <span className="capitalize">{`I `}</span>
                <span className="lowercase">want to rent out my place</span>
              </div>
            </div>
            <div className="w-[636px] relative box-border h-px border-t-[1px] border-solid border-lightgray-300" />
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <input
                className="cursor-pointer m-0 w-[21px] relative bg-gainsboro h-[21px]"
                type="radio"
                name="user-type"
                value="guest"
                checked={userType === "guest"}
                onChange={onRadioChange}
              />
              <div className="w-[566px] relative leading-[23px] font-medium inline-block shrink-0">
                <span className="capitalize">{`I `}</span>
                <span className="lowercase">
                  {`want to Browse for places to stay`}
                </span>
              </div>
            </div>
            <div className="w-[636px] relative box-border h-px border-t-[1px] border-solid border-lightgray-300" />
          </div>
          <button
          className={`[border:none] py-[15px] px-[18px] bg-darkblue rounded-[9.08px] flex flex-row items-center justify-center hover:gap-[10px] ${
            userType === "" ? "opacity-50 cursor-not-allowed" : "hover:cursor-pointer hover:bg-blueviolet "
          }`}
          onClick={onContinueButtonClick}
          disabled={userType === ""}
        >
          <button className={`[border:none] p-0 bg-[transparent] relative text-xl capitalize font-bold font-inter text-white text-center inline-block ${
            userType === "" ? "cursor-not-allowed" : "hover:cursor-pointer"
        }`}>
            Continue
          </button>
        </button>
        </div>
      </div>
      <img
        className="w-[120px] absolute my-0 mx-[!important] top-[42px] left-[28px] h-[63px] object-cover cursor-pointer z-[1]"
        loading="eager"
        alt=""
        src="/logo1@2x.png"
        onClick={onLogoImageClick}
      />
    </div>
  );
};

export default LeadingPage;