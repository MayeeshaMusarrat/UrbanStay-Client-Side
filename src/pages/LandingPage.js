import { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import ExploreBySection from "../components/ExploreBySection";
import Intersection from "../components/Intersection";
import ServiceSection from "../components/ServiceSection";
import PreferenceSection from "../components/PreferenceSection";
import FeaturedSection from "../components/FeaturedSection";
import TestimonialSection from "../components/TestimonialSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const LandingPage = () => {
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
      className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
      data-animate-on-scroll
    >
      <Header />
      <HeroSection />
      <IntroSection />
      <ExploreBySection />
      <Intersection />
      <ServiceSection />
      <PreferenceSection />
      <FeaturedSection />
      <div className="w-[1530px] relative bg-white h-[35px]" />
      <section
        className="self-stretch h-[895px] overflow-hidden shrink-0 flex flex-row flex-wrap items-center justify-center relative gap-[10px]"
        id="testimonials"
      >
        <img
          className="w-[calc(100%_-_3px)] absolute my-0 mx-[!important] h-full top-[0px] right-[1px] bottom-[0px] left-[2px] max-w-full overflow-hidden max-h-full object-cover z-[0]"
          alt=""
          src="/pseudo@2x.png"
          data-scroll-to="pseudoImage"
        />
        <TestimonialSection />
      </section>
      <FAQSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
