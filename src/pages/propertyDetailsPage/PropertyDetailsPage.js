import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyPicturesSection from "../Frame 2114";
import ReviewSection from "../components/ReviewSection";
import CalendarSection from "../components/CalendarSection";
import PropertyCardContainerSection from "../components/PropertyCardContainerSection";
import LocationSection from "../components/LocationSection";
import PropertyInformationSection from "../components/PropertyInformationSection";
import AmenitieSection from "../components/AmenitieSection";

const PropertyDetailsPage = () => {
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
    <div className="w-full relative bg-white h-[4304px] overflow-hidden text-center text-sm text-gray-200 font-roboto">
      <Header />
      <img
        className="absolute top-[calc(50%_+_670px)] left-[calc(50%_-_660px)] w-[1300px] h-px"
        alt=""
        src="/div-npr0qi.svg"
      />
      <Footer />
      <PropertyPicturesSection />
      <ReviewSection />
      <div className="absolute top-[644px] left-[1255px] flex flex-row items-center justify-start gap-[0.21px]">
        <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
          <img className="w-4 relative h-4" alt="" src="/frame.svg" />
        </div>
        <div className="relative leading-[18px] font-semibold">Share</div>
      </div>
      <div className="absolute w-[calc(100%_-_1464.9px)] top-[644px] right-[128.7px] left-[1336.2px] flex flex-row items-center justify-start gap-[0.1px]">
        <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
          <img className="w-4 relative h-4" alt="" src="/frame.svg" />
        </div>
        <div className="relative leading-[18px] font-semibold">Save</div>
      </div>
      <CalendarSection />
      <PropertyCardContainerSection />
      <LocationSection />
      <PropertyInformationSection />
      <div
        className="absolute top-[calc(50%_-_1057px)] left-[calc(50%_-_700px)] w-[950px] overflow-hidden flex flex-col items-start justify-start py-2 px-1.5 box-border gap-[15px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        data-animate-on-scroll
      >
        <AmenitieSection />
        <img className="w-[944px] relative h-px" alt="" src="/div-npr0qi.svg" />
      </div>
    </div>
  );
};

export default PropertyDetailsPage;