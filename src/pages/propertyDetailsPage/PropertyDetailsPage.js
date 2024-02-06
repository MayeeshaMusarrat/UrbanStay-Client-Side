import Header1 from "../components/Header1";
import PropertyPicturesSection from "../components/PropertyPicturesSection";
import ReviewText from "../components/ReviewText";
import PropertyPriceSection from "../components/BookingFrameShareSave";
import PropertyReviewSection from "../components/ShowmoreButton";
import Footer from "../components/Footer1";

const PropertyDetailsPage = () => {
  return (
    <div className="w-full relative bg-shade-01 overflow-hidden flex flex-col items-start justify-start gap-[20px] tracking-[normal]">
      <Header1 />
      <section className="self-stretch h-[552px] flex flex-row items-start justify-start pt-0 pb-[25px] pr-2.5 pl-0 box-border max-w-full">
        <PropertyPicturesSection />
      </section>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-[55px] box-border max-w-full mq750:pl-[27px] mq750:pr-[27px] mq750:box-border">
        <div className="flex-1 flex flex-row items-end justify-start [row-gap:20px] max-w-full mq1250:flex-wrap">
          <ReviewText />
          <PropertyPriceSection />
        </div>
      </section>
      <div className="self-stretch h-4 flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <img
          className="w-[1300px] relative max-h-full max-w-full"
          alt=""
          src="/div-npr0qi-1.svg"
        />
      </div>
      <PropertyReviewSection />
      <Footer />
    </div>
  );
};

export default PropertyDetailsPage;
