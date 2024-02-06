import { useState, useCallback } from "react";
import ReviewDetails from "./ReviewDetails";
import PortalPopup from "./PortalPopup";

const ReviewCard = () => {
  const [isReviewDetailsPopupOpen, setReviewDetailsPopupOpen] = useState(false);

  const openReviewDetailsPopup = useCallback(() => {
    setReviewDetailsPopupOpen(true);
  }, []);

  const closeReviewDetailsPopup = useCallback(() => {
    setReviewDetailsPopupOpen(false);
  }, []);

  return (
    <>
      <div className="w-[1381px] flex flex-row items-start justify-start py-0 pr-[26px] pl-0 box-border max-w-full text-left text-base text-black font-poppins">
        <div
          className="flex-1 overflow-hidden flex flex-row items-center justify-center py-[15px] px-3.5 box-border max-w-full cursor-pointer"
          onClick={openReviewDetailsPopup}
        >
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 box-border gap-[20px] max-w-full">
            <div className="w-[328px] flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[20px] max-w-full mq450:flex-wrap">
              <img
                className="h-[71px] w-[70px] relative object-cover"
                alt=""
                src="/usericon-1@2x.png"
              />
              <div className="h-[124px] flex-1 flex flex-col items-start justify-start relative min-w-[153px]">
                <div className="w-[182px] flex flex-row items-start justify-start py-0 px-0 box-border">
                  <div className="h-[79px] w-[236px] relative capitalize inline-block shrink-0">
                    <p className="[margin-block-start:0] [margin-block-end:10px] font-medium">
                      mayeesha Musarrat
                    </p>
                  </div>
                </div>
                <div className="w-[188px] h-5 absolute my-0 mx-[!important] top-[24.5px] left-[-0.5px] bg-yellow overflow-hidden shrink-0" />
                <div className="w-[105px] flex flex-row items-start justify-start py-0 px-0 box-border">
                  <div className="h-11 relative capitalize inline-block shrink-0">
                    <p className="[margin-block-start:0] [margin-block-end:10px]">
                      &nbsp;
                    </p>
                    <p className="m-0 text-smi font-light">23 September 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative capitalize [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] min-w-[636px] max-w-full mq750:min-w-full">
              <span>
                <span>{`As soon as we arrived we were greeted by the villa staff so beautifully, as they put some flowers on our necks and welcoming drinks. Our stay was amazing we felt at peace. Also Agus and his wife made us wonderful welcoming dinner every bite was delicious. Thank you for the wonderful stay. `}</span>
                <span className="[text-decoration:underline] font-semibold">
                  See More
                </span>
              </span>
            </div>
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

export default ReviewCard;
