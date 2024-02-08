import { useCallback } from "react";
import Header from "../../components/header/Header";
import PropertyPriceCard from "../../components/cards/sendPropertyReservationRequestPage/PropertyPriceCard";
import Footer from "../../components/footer/Footer";

const ConfirmReservation = () => {
  const onConfirmPaymentBtnClick = useCallback(() => {
    // Please sync "myReservations" to the project
  }, []);

  return (
    <div className="w-full h-[1940px] relative bg-shade-01 overflow-hidden flex flex-col items-start justify-start gap-[114px] tracking-[normal] text-center text-base text-shade-02 font-roboto mq450:gap-[114px] mq750:gap-[114px] mq1275:h-auto">
      <Header />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[1745px] pr-96 pl-0 box-border max-w-full shrink-0 mq450:pr-5 mq450:box-border mq750:pr-24 mq750:pb-[479px] mq750:box-border mq1275:pr-48 mq1275:pb-[737px] mq1275:box-border">
        <main className="w-[1904px] flex flex-col items-start justify-start gap-[77px] max-w-[168%] shrink-0 mq450:gap-[77px] mq750:gap-[77px]">
          <section className="w-[1466px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-17xl text-darkblue-100 font-poppins">
            <div className="w-[1276px] flex flex-col items-start justify-start gap-[42px] max-w-full mq750:gap-[42px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[3px] max-w-full">
                <div className="w-[1179px] flex flex-row items-start justify-start py-0 px-[13px] box-border max-w-full">
                  <div className="flex-1 flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-full">
                    <h1 className="m-0 h-[52px] w-[351px] relative text-inherit tracking-[0.1px] leading-[32px] font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-3xl mq450:leading-[19px] mq750:text-10xl mq750:leading-[26px]">{`Property Details > `}</h1>
                    <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[521px] max-w-full mq1100:min-w-full">
                      <h1 className="m-0 self-stretch relative text-inherit tracking-[0.1px] leading-[32px] font-bold font-inherit mq450:text-3xl mq450:leading-[19px] mq750:text-10xl mq750:leading-[26px]">
                        Confirm and Pay
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full text-13xl text-black mq1275:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[54px] pb-0 px-0 box-border max-w-full mq1100:pt-[35px] mq1100:box-border mq1100:min-w-full mq750:pt-[23px] mq750:box-border">
                    <div className="w-[831px] flex flex-col items-start justify-start gap-[18px] max-w-[103%] shrink-0">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[13px] box-border max-w-full">
                        <h1 className="m-0 h-[52px] flex-1 relative text-inherit tracking-[0.1px] leading-[32px] font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[19px] mq750:text-7xl mq750:leading-[26px]">
                          Your Trip
                        </h1>
                      </div>
                      <div className="w-[734px] flex flex-col items-center justify-start gap-[31px] max-w-full text-5xl mq750:gap-[31px]">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[25px] pl-[13px] box-border max-w-full">
                          <div className="flex-1 flex flex-row items-start justify-start gap-[26px] max-w-full mq750:flex-wrap">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[72px] min-w-[239px] max-w-full mq450:gap-[72px]">
                              <div className="self-stretch flex flex-row items-end justify-start py-0 px-0 [row-gap:20px] mq450:flex-wrap">
                                <div className="w-[142px] flex flex-col items-start justify-start gap-[4px]">
                                  <h3 className="m-0 self-stretch h-[27px] relative text-inherit tracking-[0.1px] leading-[32px] font-medium font-inherit inline-block shrink-0 mq450:text-lgi mq450:leading-[26px]">
                                    Dates
                                  </h3>
                                  <div className="self-stretch h-[41.3px] relative text-xl tracking-[0.1px] leading-[32px] text-dimgray-900 inline-block shrink-0 mq450:text-base mq450:leading-[26px]">
                                    Oct 7-10
                                  </div>
                                </div>
                                <div className="h-[74px] w-[76px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border ml-[-3px]">
                                  <div className="w-px h-[60px] relative box-border z-[1] border-r-[1px] border-solid border-black" />
                                </div>
                                <div className="flex-1 flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border gap-[5px] min-w-[103px] ml-[-3px]">
                                  <h3 className="m-0 self-stretch h-7 relative text-inherit tracking-[0.1px] leading-[32px] font-medium font-inherit inline-block shrink-0 mq450:text-lgi mq450:leading-[26px]">
                                    Guests
                                  </h3>
                                  <div className="self-stretch h-[43px] relative text-xl tracking-[0.1px] leading-[32px] text-dimgray-900 inline-block shrink-0 mq450:text-base mq450:leading-[26px]">
                                    3 guests
                                  </div>
                                </div>
                                <div className="h-[73px] flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border ml-[-3px]">
                                  <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-black" />
                                </div>
                              </div>
                              <div className="w-[270px] flex flex-row items-start justify-start py-0 px-[3px] box-border text-13xl">
                                <h1 className="m-0 flex-1 relative text-inherit tracking-[0.1px] leading-[32px] font-medium font-inherit mq450:text-lgi mq450:leading-[19px] mq750:text-7xl mq750:leading-[26px]">
                                  Pay with
                                </h1>
                              </div>
                            </div>
                            <div className="w-[303px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[303px] mq750:flex-1">
                              <div className="self-stretch flex flex-col items-start justify-start gap-[66px] mq450:gap-[66px]">
                                <div className="w-[183px] flex flex-row items-start justify-start py-0 px-[31px] box-border">
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                                    <h3 className="m-0 self-stretch h-[27px] relative text-inherit tracking-[0.1px] leading-[32px] font-medium font-inherit inline-block shrink-0 mq450:text-lgi mq450:leading-[26px]">
                                      Rooms
                                    </h3>
                                    <div className="self-stretch h-[41px] relative text-xl tracking-[0.1px] leading-[32px] text-dimgray-900 inline-block shrink-0 mq450:text-base mq450:leading-[26px]">
                                      2 Rooms
                                    </div>
                                  </div>
                                </div>
                                <img
                                  className="self-stretch h-12 relative max-w-full overflow-hidden shrink-0 object-cover"
                                  loading="eager"
                                  alt=""
                                  src="paymentCards(1).png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          className="self-stretch h-[688px] relative max-w-full overflow-hidden shrink-0 object-cover"
                          loading="eager"
                          alt=""
                          src="/paymentCards(2).png"
                        />
                      </div>
                    </div>
                  </div>
                  <PropertyPriceCard />
                </div>
              </div>
              <div className="w-[268px] flex flex-row items-start justify-start py-0 px-4 box-border">
                <button
                  className="cursor-pointer [border:none] pt-[18px] pb-[19px] pr-[5px] pl-1 bg-darkblue-100 flex-1 rounded-[9.08px] flex flex-row flex-wrap items-center justify-center whitespace-nowrap hover:bg-mediumslateblue hover:gap-[10px_0px]"
                  onClick={onConfirmPaymentBtnClick}
                >
                  <b className="flex-1 relative text-xl capitalize font-inter text-shade-01 text-center">
                    Confirm and Pay
                  </b>
                </button>
              </div>
            </div>
          </section>
          <Footer />
        </main>
        
      </div>
      
      
    </div>
  );
};

export default ConfirmReservation;