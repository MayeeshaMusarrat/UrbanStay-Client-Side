import { useEffect } from "react";

const IntroSection = () => {
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
    <section
      className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[65px] px-44 gap-[37px]"
      id="intro"
    >
      <img
        className="h-[475px] w-[353px] relative rounded-tl-31xl rounded-tr-none rounded-br-31xl rounded-bl-none object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
        alt=""
        src="/intropic@2x.png"
        data-animate-on-scroll
      />
      <img
        className="h-[495px] w-[788px] relative object-cover [&.animate]:animate-[1s_linear_0.5s_1_alternate_backwards_slide-in-bottom] opacity-[1]"
        alt=""
        src="/introcontent@2x.png"
        data-animate-on-scroll
      />
    </section>
  );
};

export default IntroSection;
