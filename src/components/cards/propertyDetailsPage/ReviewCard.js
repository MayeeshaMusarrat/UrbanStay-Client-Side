import { useState, useCallback } from "react";
import ReviewDetails from "./ReviewDetails";
import PortalPopup from "./PortalPopup";

const ReviewCard = () => {
  const [isReviewDetailsPopup1Open, setReviewDetailsPopup1Open] =
    useState(false);

  const openReviewDetailsPopup1 = useCallback(() => {
    setReviewDetailsPopup1Open(true);
  }, []);

  const closeReviewDetailsPopup1 = useCallback(() => {
    setReviewDetailsPopup1Open(false);
  }, []);

  return (
    <>
      <div
        className="w-[1354px] relative h-[109px] overflow-hidden shrink-0 cursor-pointer text-left text-base text-black font-poppins"
        onClick={openReviewDetailsPopup1}
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
      {isReviewDetailsPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeReviewDetailsPopup1}
        >
          <ReviewDetails onClose={closeReviewDetailsPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default ReviewCard;