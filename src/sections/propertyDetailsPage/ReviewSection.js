import { useState, useCallback, useEffect } from "react";
import ReviewDetails from "./ReviewDetails";
import PortalPopup from "./PortalPopup";
import RatingPieChart from "./RatingPieChart";
import RatingBarChart from "barChart";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  const [isReviewDetailsPopupOpen, setReviewDetailsPopupOpen] = useState(false);
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

  const openReviewDetailsPopup = useCallback(() => {
    setReviewDetailsPopupOpen(true);
  }, []);

  const closeReviewDetailsPopup = useCallback(() => {
    setReviewDetailsPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className="absolute top-[calc(50%_+_688.5px)] left-[calc(50%_-_759px)] overflow-hidden flex flex-col items-start justify-start py-[21px] px-[70px] gap-[47px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-base text-black font-roboto"
        data-animate-on-scroll
      >
        <div className="flex flex-col items-start justify-start py-0 px-px gap-[8px] text-3xl">
          <div className="w-44 relative tracking-[0.2px] leading-[28px] font-semibold inline-block h-7 shrink-0">
            Reviews
          </div>
          <div className="w-[627px] h-[23px] flex flex-row items-center justify-start gap-[4px] text-base text-gray-200">
            <img
              className="w-4 relative h-[15px]"
              alt=""
              src="/divs197t1q2margin.svg"
            />
            <div className="w-[34.8px] relative h-5 text-mid">
              <div className="absolute top-[0px] left-[0px] leading-[20px] font-semibold">
                4.90
              </div>
            </div>
            <div className="w-[5px] relative h-5">
              <div className="absolute top-[0px] left-[0px] leading-[20px] font-semibold">
                ·
              </div>
            </div>
            <div className="w-[79.6px] relative rounded h-5">
              <div className="absolute top-[0px] left-[0px] [text-decoration:underline] leading-[20px] font-semibold">
                83 reviews
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1379px] flex flex-row items-start justify-start gap-[46px]">
          <RatingPieChart />
          <RatingBarChart />
        </div>
        <div
          className="w-[1354px] relative h-[109px] overflow-hidden shrink-0 cursor-pointer font-poppins"
          onClick={openReviewDetailsPopup}
        >
          <div className="absolute top-[15px] left-[14px] w-[1326px] h-[79px]">
            <div className="absolute top-[0px] left-[348px] capitalize [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] w-[978px]">
              <span className="w-full">
                <span>{`As soon as we arrived we were greeted by the villa staff so beautifully, as they put some flowers on our necks and welcoming drinks. Our stay was amazing we felt at peace. Also Agus and his wife made us wonderful welcoming dinner every bite was delicious. Thank you for the wonderful stay. `}</span>
                <span className="[text-decoration:underline] font-semibold">
                  See More
                </span>
              </span>
            </div>
            <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[21px]">
              <img
                className="w-[70px] relative h-[71px] object-cover"
                alt=""
                src="/usericon@2x.png"
              />
              <div className="flex flex-row items-start justify-start relative gap-[10px]">
                <div className="w-[236px] relative capitalize inline-block h-[79px] shrink-0 z-[0]">
                  <p className="[margin-block-start:0] [margin-block-end:10px] font-medium">
                    mayeesha Musarrat
                  </p>
                </div>
                <div className="w-[188px] absolute my-0 mx-[!important] top-[25px] left-[0px] bg-yellow h-5 overflow-hidden shrink-0 z-[1]" />
                <div className="w-[125px] absolute my-0 mx-[!important] top-[25px] left-[0px] capitalize inline-block z-[2]">
                  <p className="[margin-block-start:0] [margin-block-end:10px]">
                    &nbsp;
                  </p>
                  <p className="m-0 text-smi font-light">23 September 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ReviewCard />
        <div className="w-[188px] relative rounded-lg bg-white box-border h-12 text-center text-gray-200 border-[1px] border-solid border-gray-200">
          <div className="absolute top-[14.8px] left-[23.4px] leading-[20px] font-semibold">
            Show more reviews
          </div>
        </div>
      </div>
      {isReviewDetailsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeReviewDetailsPopup}
        >
          <ReviewDetails onClose={closeReviewDetailsPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ReviewSection;