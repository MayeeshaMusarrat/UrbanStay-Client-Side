import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GetStartedButtonContainer from "../../../components/buttons/GetStartedButtonContainer";
import BlueLogoIcon from "../../../components/logos/BlueLogoIcon";

const GuestWelcome = () => {
  const navigate = useNavigate();

  const onGeStartedBtnClick = useCallback(() => {
    // Please sync "Host_signup_page" to the project
  }, []);

  const onGoBackBtnTextClick = useCallback(() => {
    navigate("/leading-page");
  }, [navigate]);
  
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
 
  return (
    <div className="w-full relative bg-white min-h-screen overflow-hidden text-left text-11xl text-darkblue-100 font-poppins">
   <BlueLogoIcon logoTop={42} logoWidth={120} logoHeight={63} />
    <div className="absolute top-[calc(50%_-_298px)] left-[calc(50%_-_652px)] flex flex-row items-center justify-start gap-[36px]">
      <img
        className="h-[608px] w-[618px] relative rounded-[90px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        alt=""
        src="/renterpic@2x.png"
        data-animate-on-scroll
      />
      <div
        className="flex flex-col items-start justify-start gap-[23px] [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_slide-in-right] opacity-[0]"
        data-animate-on-scroll
      >
        <b className="w-[666px] relative tracking-[0.1px] leading-[55px] inline-block h-[113px] shrink-0">
          Searching for a Stay? You’re at the Right Place!
        </b>
        <div className="w-[652px] relative text-base leading-[34px] inline-block text-black font-inter">
          <p className="m-0">
            <span className="font-medium font-inter text-black">{`At UrbanStay, we believe in creating seamless and enjoyable experiences for our guests. By creating a `}</span>
            <b className="font-inter text-darkblue-100">guest account</b>
            <span className="font-medium">
              , you unlock a world of convenience and personalized services
              tailored just for you.
            </span>
          </p>
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0 font-medium">
            Rest assured, your privacy is our top priority. We adhere to
            strict security measures to safeguard your personal information.
            Read our Privacy Policy to understand how we protect your data.
          </p>
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0 font-medium">
            Join UrbanStay today and embark on a journey where every stay
            feels like home.
          </p>
        </div>
        <GetStartedButtonContainer
          onGeStartedBtnClick={onGeStartedBtnClick}
          onGoBackBtnTextClick={onGoBackBtnTextClick}
        />
      </div>
    </div>
  </div>
 );
};

export default GuestWelcome;