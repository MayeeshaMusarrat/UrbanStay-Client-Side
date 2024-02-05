import { useState, useRef, useCallback, useEffect } from "react";
import Header from "../../components/header/Header";

const HostingIntro = () => {
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
    <div className="w-full h-[735px] relative bg-shade-01 overflow-hidden flex flex-col items-center justify-start gap-[64px] tracking-[normal] text-center text-base text-shade-02 font-roboto mq450:gap-[64px] mq750:h-auto mq750:gap-[64px]">
      <Header />
      <section className="w-[1381px] flex flex-row flex-wrap items-center justify-start py-0 px-5 box-border gap-[177px] max-w-full shrink-0 text-left text-[48px] text-darkslategray-300 font-roboto lg:gap-[177px] mq450:gap-[177px] mq750:gap-[177px]">
        <h1 className="m-0 h-[354px] w-[504px] relative text-inherit capitalize font-bold font-inherit flex items-center shrink-0 max-w-full mq450:text-[29px] mq1050:text-[38px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        data-animate-on-scroll>
          It’s easy to host your place in urbanStay
        </h1>
        <div className="flex-1 flex flex-col items-start justify-start gap-[41px] min-w-[335px] max-w-full text-5xl mq750:gap-[41px] [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_slide-in-right] opacity-[0]"
        data-animate-on-scroll
        >
          <div className="flex flex-row items-center justify-center gap-[33px] max-w-full mq750:flex-wrap mq750:gap-[33px]">
            <img
              className="h-[120px] w-[120px] relative object-cover"
              loading="eager"
              alt=""
              src="/blueIcon(1).png"
            />
            <div className="flex flex-col items-start justify-start gap-[19px] max-w-full">
              <b className="relative capitalize mq450:text-lgi">
                Tell us about your place
              </b>
              <div className="relative text-xl capitalize mq450:text-base">
                Share some basic information, like where it is and how many
                guests can stay.
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[33px] max-w-full mq750:flex-wrap mq750:gap-[33px]">
            <img
              className="h-[119px] w-[119px] relative object-cover"
              alt=""
              src="/blueIcon(2).png"
            />
            <div className="flex flex-col items-start justify-start py-5 px-0 box-border gap-[19px] max-w-full">
              <b className="relative capitalize mq450:text-lgi">
                Add Necessary descriptions
              </b>
              <div className="relative text-xl capitalize mq450:text-base">
                Add at least 5 photos plus a title and description.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[33px] max-w-full mq750:flex-wrap mq750:gap-[33px]">
            <img
              className="h-[122px] w-[122px] relative object-cover"
              alt=""
              src="/blueIcon(3).png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[19px] min-w-[328px] max-w-full">
              <b className="relative capitalize mq450:text-lgi">
                verify and publish
              </b>
              <div className="self-stretch h-[46px] relative text-xl capitalize flex items-center mq450:text-base">
                Publish your listing! We will notify you of interested renters.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[2800px] pr-px pl-0 box-border max-w-full lg:pb-[1249px] lg:box-border mq750:pb-[812px] mq750:box-border">
        <footer className="flex-1 bg-shade-01 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.2)] flex flex-row items-center justify-end pt-[20px] px-[67px] pb-[29px] box-border max-w-full text-center text-base text-shade-01 font-inter mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[49px] w-32 rounded-[9.08px] bg-darkblue-100 flex flex-row flex-wrap items-center justify-center p-2.5 box-border whitespace-nowrap z-[1] hover:bg-blueviolet-200 hover:gap-[10px] hover:cursor-pointer">
            <b className="w-[166px] relative capitalize flex items-center justify-center shrink-0 ">
              Get Started
            </b>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default HostingIntro;