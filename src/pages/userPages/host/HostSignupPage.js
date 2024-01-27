import { useCallback, useEffect } from "react";
import { TextField, Autocomplete } from "@mui/material";
import StaticInputField from "../../../components/inputFields/StaticInputField";
import UserLocation from "../../../components/inputFields/UserLocation";
import BirthdateInputField from "../../../components/inputFields/BirthdateInputField";
import EmailInputField from "../../../components/inputFields/EmailInputField";
import PasswordAndConfirmPasswordField from "../../../components/inputFields/PasswordAndConfirmPasswordField";
import UploadPictureOfUserField from "../../../components/inputFields/UploadPictureOfUserField";
import BecomeMemberButtonContainer from "../../../components/buttons/BecomeMemberButtonContainer";
import { useNavigate } from "react-router-dom";
import WhiteLogoIcon from "../../../components/logos/WhiteLogoIcon";

const HostSignupPage = () => {
  const navigate = useNavigate();
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

  const onSignInClick = useCallback(() => {
    navigate("/signinpage");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[1346px] overflow-hidden text-center text-xl text-white font-poppins">
      <img
        className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        loading="eager"
        alt=""
        src="/backgroundpic.png"
      />
      <div className="absolute top-[calc(50%_-_537px)] left-[calc(50%_-_566px)] flex flex-col items-center justify-center gap-[22px]">
        <div
          className="w-[1133px] h-8 relative leading-[32px] capitalize font-medium font-inter inline-block [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          data-animate-on-scroll
        >
          Become a member of our community and enjoy the privileges from the comfort of your homes!
        </div>
        <div
          className="h-[967px] rounded-3xs bg-white shadow-[0px_4px_63px_rgba(0,_0,_0,_0.15)] overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start py-10 px-[54px] box-border [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_fade-in] opacity-[0] text-6xl text-darkblue-100"
          data-animate-on-scroll
        >
          <div className="h-[887px] flex flex-col items-center justify-center gap-[55px]">
            <b className="relative tracking-[0.1px] leading-[32px]">
              Sign Up for UrbanStay
            </b>
            <div className="flex flex-col items-center justify-start gap-[27px] text-left text-mid text-text-color">
              <div className="flex flex-col items-start justify-start gap-[28px]">
                <div className="flex flex-row flex-wrap items-start justify-start gap-[7px]">

                  <StaticInputField label="First Name " width={336} />
                  <StaticInputField label="Last Name " width={336} />
                  <StaticInputField label="Phone Number" width={336} />

                </div>
                <UserLocation />
                   
                <div className="flex flex-row flex-wrap items-start justify-start gap-[38px]">
                  <BirthdateInputField />
                  <EmailInputField />
                </div>
                <PasswordAndConfirmPasswordField />
              </div>
              <UploadPictureOfUserField />
            </div>
            <BecomeMemberButtonContainer />
          </div>
        </div>
        <div
          className="w-[1123px] h-[30px] relative text-mid tracking-[0.18px] leading-[25.42px] flex items-center shrink-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
          data-animate-on-scroll
        >
          <span className="w-full">
            <span className="font-medium">{`Already have an account? `}</span>
            <b className="hover:[text-decoration:underline] hover: cursor-pointer" 
            onClick={onSignInClick}
            >Sign In</b>
          </span>
        </div>
      </div>
     <WhiteLogoIcon />
    </div>
  );
};

export default HostSignupPage;