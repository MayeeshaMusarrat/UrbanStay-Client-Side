import { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../sections/landingPage/HeroSection";
import IntroSection from '../../sections/landingPage/IntroSection';
import ExploreBySection from "../../sections/landingPage/ExploreBySection";
import Intersection from "../../sections/landingPage/Intersection";
import ServiceSection from "../../sections/landingPage/ServiceSection";
import PreferenceSection from "../../sections/landingPage/PreferenceSection";
import FeaturedSection from "../../sections/landingPage/FeaturedSection";
import TestimonialSection from "../../sections/landingPage/TestimonialSection";
import FAQSection from "../../sections/landingPage/FAQSection";

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
      className="w-full h-[7098px] relative bg-white overflow-hidden flex flex-col items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
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
        className="self-stretch h-[900px] overflow-hidden shrink-0 flex flex-row flex-wrap items-center justify-center relative"
        id="testimonials"
      >
        <TestimonialSection />
      </section>
      <FAQSection />
      <Footer />
    </div>
  );
};

export default LandingPage;