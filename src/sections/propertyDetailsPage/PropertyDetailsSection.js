import InformationSection from "./InformationSection";
import AmenitiesSection from "./AmenitiesSection";
import AvailabilitySection from "./Location List";
import LocationSection from "./LocationSection";

const ReviewText = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-[36px] max-w-full text-left text-base text-black font-roboto mq750:gap-[36px] mq750:min-w-full">
      <InformationSection />
      <AmenitiesSection />
      <AvailabilitySection />
      <LocationSection />
    </div>
  );
};

export default ReviewText;
