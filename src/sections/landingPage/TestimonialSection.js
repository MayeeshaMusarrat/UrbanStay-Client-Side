import { useEffect } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const TestimonialSection = () => {
  const reviews = [
     "/review1.png",
     "/review2.png", 
     "/review3.png"
  ];

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
    <div className="w-full my-0 mx-[!important] absolute h-[100%] top-[1px] right-[0px] bottom-[6px] left-[0px] bg-midnightblue-200 flex flex-col items-center justify-center py-[100px] px-0 box-border z-[0] text-center text-sm text-white font-roboto">
      <div className="flex flex-col items-center justify-start gap-[56px]">
        <div className="w-[1368px] h-24 flex flex-col items-center justify-center gap-[20px]">
          <div className="rounded-8xs [background:linear-gradient(65.05deg,_#2c2e97,_#4b55c4)] flex flex-row items-center justify-center py-[3px] px-3.5">
            <div className="relative leading-[21px] capitalize font-medium">
              Testimonials
            </div>
          </div>
          <div className="w-[1313px] flex flex-row items-center justify-center pt-2.5 px-[345px] pb-0 box-border text-11xl font-montserrat">
            <b className="w-[1098px] relative tracking-[0.03px] leading-[39px] capitalize flex items-center justify-center shrink-0">
              Find out about our service from the Happy Clients!
            </b>
          </div>
          <div className="overflow-hidden border-t-[0.8px] border-solid border-midnightblue-100" />
        </div>
        <div
          className="pt-10 w-[1394px] h-[540px] relative overflow-visible shrink-0 [&.animate]:animate-[1s_ease-out_0s_1_normal_forwards_slide-in-right] opacity-[0]"
          data-animate-on-scroll
        >
          <Slide
            autoplay
            arrows={false}
            duration="1500"
            pauseOnHover
            infinite
            canSwipe
            easing="ease-out"
          >
            <div>
               <img src={reviews[0]} />
            </div>
            <div>
              <img src={reviews[1]} />
            </div>
            <div>
              <img src={reviews[2]} />
            </div>
          </Slide>

        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;