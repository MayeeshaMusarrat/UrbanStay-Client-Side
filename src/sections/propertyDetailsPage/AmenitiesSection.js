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
import Radio from "./Radio";
import CarbonMonoxideAlarm from "./CarbonMonoxideAlarm";
import FirstAidKit from "./FirstAidKit";
import FireExtinguisher from "./FireExtinguisher";

const AmenitiesSection = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[40px] text-left text-base text-gray-200 font-roboto">
      <div className="flex flex-col items-start justify-start gap-[10px] text-3xl">
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[26px] font-semibold">Amenities</div>
        </div>
        <div className="relative text-sm leading-[18px] text-dimgray-100">
          Choose any of the amenities provided by the host. Your service charge
          will be calculated based on your chosen amenities.
        </div>
      </div>
      <div className="flex flex-row items-center justify-start py-0 pr-0 pl-10 gap-[61px]">
        <div className="flex flex-col items-start justify-center gap-[19px]">
          <Waterfront />
          <Wifi />
          <HotTub />
          <Washer />
          <AC />
        </div>
        <div className="flex flex-col items-start justify-center gap-[19px]">
          <Kitchen />
          <ParkingSpot />
          <TV />
          <Dryer />
          <CCTV />
        </div>
        <div className="flex flex-col items-start justify-center gap-[19px]">
          <SmokeAlarm />
          <Radio />
          <CarbonMonoxideAlarm />
          <FirstAidKit />
          <FireExtinguisher />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start text-center">
        <div className="w-[188px] relative rounded-lg bg-white box-border h-12 border-[1px] border-solid border-gray-200">
          <div className="absolute top-[calc(50%_-_9.2px)] left-[calc(50%_-_65.6px)] leading-[20px] font-semibold">
            Choose Amenities
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;