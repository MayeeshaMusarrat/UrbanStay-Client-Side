import { useEffect } from "react";
import Waterfront from "./Waterfront";
import Wifi from "./Wifi";
import HotTub from "./HotTub";
import Washer from "./Washer";
import AC from "./AC";
import Kitchen from "./Kitchen";
import ParkingSpot from "./ParkingSpot";
import TV from "./TV";
import Dryer from "./Dryer";
import CCTV from "./CCTV";
import SmokeAlarm from "./SmokeAlarm";
import EmergencyRadio from "./EmergencyRadio";
import CarbonMonoxideAlarm from "./CarbonMonoxideAlarm";
import FirstAidKit from "./FirstAidKit";
import FireExtinguisher from "./Vector";

const AmenitiesSection = () => {
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
    <div
      className="self-stretch overflow-hidden flex flex-col items-center justify-start py-2 px-1.5 box-border gap-[40px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] max-w-full text-left text-base text-shade-02 font-roboto mq750:gap-[40px]"
      data-animate-on-scroll
    >
      <div className="self-stretch flex flex-row items-start justify-start max-w-full shrink-0 text-3xl">
        <div className="flex flex-col items-start justify-start gap-[10px] max-w-full">
          <h3 className="m-0 relative text-inherit leading-[26px] font-semibold font-inherit mq450:text-lg mq450:leading-[21px]">
            Amenities
          </h3>
          <div className="relative text-sm leading-[18px] text-dimgray-100">
            Choose any of the amenities provided by the host. Your service
            charge will be calculated based on your chosen amenities.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="flex flex-row items-center justify-start py-0 pr-0 pl-10 box-border gap-[61px] max-w-full mq750:gap-[61px] mq1050:flex-wrap mq450:gap-[61px]">
          <div className="w-[150.1px] flex flex-col items-start justify-center gap-[19px]">
            <Waterfront />
            <Wifi />
            <HotTub />
            <Washer />
            <AC />
          </div>
          <div className="w-[246.1px] flex flex-col items-start justify-center gap-[19px]">
            <Kitchen />
            <ParkingSpot />
            <TV />
            <Dryer />
            <CCTV />
          </div>
          <div className="flex flex-col items-start justify-center gap-[19px]">
            <SmokeAlarm />
            <EmergencyRadio />
            <CarbonMonoxideAlarm />
            <FirstAidKit />
            <FireExtinguisher />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-center">
        <div className="rounded-lg bg-shade-01 flex flex-row items-center justify-center pt-[15px] pb-[13px] pr-[22px] pl-[27px] whitespace-nowrap border-[1px] border-solid border-shade-02">
          <div className="relative leading-[20px] font-semibold">
            Choose Amenities
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          alt=""
          src="/div-npr0qi.svg"
        />
      </div>
    </div>
  );
};

export default AmenitiesSection;
