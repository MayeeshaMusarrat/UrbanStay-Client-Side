import { useEffect } from "react";
import RatingPieChart from "./RatingPieChart";
import RatingBarChart from "./RatingBarChart";
import ReviewCard from "./ReviewCard";

const PropertyReviewSection = () => {
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
    <section
      className="self-stretch overflow-hidden flex flex-col items-center justify-start p-[21px] box-border gap-[47px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] max-w-full text-left text-3xl text-black font-roboto mq750:gap-[47px] mq1050:pt-5 mq1050:pb-5 mq1050:box-border"
      data-animate-on-scroll
    >
      <div className="w-[1378px] flex flex-row items-start justify-start max-w-full">
        <div className="w-44 flex flex-col items-start justify-start gap-[10px]">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[0.2px] leading-[28px] font-semibold font-inherit mq450:text-lg mq450:leading-[22px]">
            Reviews
          </h3>
          <div className="flex flex-row items-center justify-start gap-[4px] text-mid text-shade-02">
            <img
              className="h-[15px] w-4 relative"
              alt=""
              src="/divs197t1q2margin1.svg"
            />
            <div className="flex flex-row items-start justify-start gap-[5px]">
              <div className="relative leading-[20px] font-semibold">4.90</div>
              <div className="relative text-base leading-[20px] font-semibold">
                ·
              </div>
            </div>
            <div className="rounded flex flex-row items-center justify-center text-base">
              <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                83 reviews
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1379px] flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[45px] max-w-full mq750:gap-[45px] mq1250:flex-wrap">
        <RatingPieChart />
        <RatingBarChart />
      </div>
      <ReviewCard />
      <ReviewCard />
      <div className="w-[1380px] h-[49px] flex flex-row items-start justify-start max-w-full">
        <button className="cursor-pointer pt-[15px] pb-[13px] pr-[19px] pl-[22px] bg-shade-01 rounded-lg flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-shade-02 hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-500">
          <div className="relative text-base leading-[20px] font-semibold font-roboto text-shade-02 text-center">
            Show more reviews
          </div>
        </button>
      </div>
    </section>
  );
};

export default PropertyReviewSection;
