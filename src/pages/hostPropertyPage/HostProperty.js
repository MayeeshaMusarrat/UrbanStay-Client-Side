import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navigations/hostPropertyPage/Navbar";
import InputPropertyInformationSection from "../../sections/hostPropertyPage/InputPropertyInformationSection";
import SelectAmenitiesSection from "../../sections/hostPropertyPage/SelectAmenitiesSection";
import UploadPictureSection from "../../sections/hostPropertyPage/UploadPictureSection";
import PropertyDescriptionSection from "../../sections/hostPropertyPage/PropertyDescriptionSection";
import InputLocationSection from "../../sections/hostPropertyPage/InputLocationSection";

const HostProperty = () => {
  return (
    <div className="w-full relative bg-ghostwhite overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-px box-border gap-[58px] tracking-[normal] mq750:gap-[58px]">
      <Header />
      <div className="w-[123px] h-[26px] relative overflow-hidden shrink-0 hidden" />
      <section className="w-[1407px] flex flex-col items-end justify-start py-0 px-5 box-border gap-[63px] min-h-[933px] shrink-0 max-w-full mq450:gap-[63px] mq750:gap-[63px]">
        <Navbar />
        <InputPropertyInformationSection />
      </section>
      <SelectAmenitiesSection />
      <section className="w-[1462px] flex flex-row items-start justify-start py-0 pr-14 pl-12 box-border shrink-0 max-w-full text-center text-mini text-shade-01 font-inter lg:pr-7 lg:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[63px] max-w-full mq450:gap-[61px] mq750:gap-[61px]">
          <UploadPictureSection />
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full">
            <PropertyDescriptionSection />
          </div>
          <InputLocationSection />
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-[30px]">
            <div className="h-[61px] w-[164px] rounded-[9.08px] bg-darkblue-100 flex flex-row flex-wrap items-center justify-center p-2.5 box-border whitespace-nowrap hover:cursor-pointer hover:bg-blueviolet-200 hover:gap-[10px]">
              <b className="w-[227px] relative capitalize flex items-center justify-center shrink-0">
                Confirm Listing
              </b>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HostProperty;