import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GetStartedButtonContainer from "../../../components/buttons/GetStartedButtonContainer";
import BlueLogoIcon from "../../../components/logos/BlueLogoIcon";

const HostWelcome = () => {
  const navigate = useNavigate();

  const onGeStartedBtnClick = useCallback(() => {
    navigate('/host-signup-page');
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

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white overflow-hidden text-left text-11xl text-darkblue-100 font-poppins">
      <div className="absolute top-[calc(50%_-_290px)] left-[calc(50%_-_710px)] flex flex-row items-center justify-center gap-[37px]">
        <img
          className="h-[658px] w-[697px] relative object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/hostpic@2x.png"
          data-animate-on-scroll
        />
        <div
          className="flex flex-col items-center justify-center pt-0 px-0 pb-[50px] [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_slide-in-right] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="flex flex-col items-start justify-center gap-[50px]">
            <b className="relative tracking-[0.1px] leading-[40px]">
              Great Choice to be a Host!
            </b>
            <div className="w-[643px] relative text-base leading-[34px] inline-block text-black font-inter">
              <p className="m-0 font-medium">
                Welcome to UrbanStay – where hosting meets convenience! Join our
                community of hosts and unlock the potential of your property.
                Whether you have a spare room, a cozy apartment, or a unique
                vacation home, UrbanStay makes it easy for you to earn extra
                income by sharing your space with travelers from around the
                world.
              </p>
              <p className="m-0 font-medium">&nbsp;</p>
              <p className="m-0">
                <span className="font-medium">{`Click the "Get Started" button to create a `}</span>
                <b className="font-inter text-darkblue-100">{`host account `}</b>
                <span className="font-medium font-inter text-black">
                  and open your doors to a world of possibilities.
                </span>
              </p>
            </div>
            <GetStartedButtonContainer
              onGeStartedBtnClick={onGeStartedBtnClick}
              onGoBackBtnTextClick={onGoBackBtnTextClick}
            />
          </div>
        </div>
      </div>
      <BlueLogoIcon logoTop={42} logoWidth={120} logoHeight={63} />
    </div>
  );
};

export default HostWelcome;