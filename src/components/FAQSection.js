import { useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";

const FAQSection = () => {
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
      className="bg-ghostwhite h-[1092px] flex flex-row flex-wrap items-start justify-center relative text-center text-sm text-white font-roboto"
      id="faq"
    >
      <div className="w-[1519px] my-0 mx-[!important] absolute top-[calc(50%_-_495px)] left-[calc(50%_-_761px)] flex flex-row flex-wrap items-start justify-center gap-[122px] z-[0]">
        <div
          className="h-[138px] flex flex-col items-center justify-end py-[18px] px-[432px] box-border gap-[16px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="w-[98.2px] relative rounded-8xs [background:linear-gradient(65.05deg,_#2c2e97,_#4b55c4)] h-7">
            <div className="absolute top-[4px] left-[calc(50%_-_13.3px)] leading-[21px] capitalize font-medium">
              FAQ
            </div>
          </div>
          <b className="relative text-11xl tracking-[0.03px] leading-[39px] capitalize font-montserrat text-darkslategray">
            Welcome to UrbanStay Help Desk!
          </b>
          <div className="w-20 relative box-border h-0.5 overflow-hidden shrink-0 border-t-[0.8px] border-solid border-midnightblue-100" />
        </div>
        <div className="h-[723px] flex flex-row items-start justify-center gap-[122px] text-left text-3xl text-midnightblue-300 font-poppins">
          <img
            className="h-[662px] w-[415px] relative rounded-3xs object-cover [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_slide-in-bottom] opacity-[0]"
            alt=""
            src="/pic@2x.png"
            data-animate-on-scroll
          />
          <div
            className="flex flex-col items-start justify-start gap-[25px] [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_slide-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="w-[752px] h-[175px] flex flex-col items-start justify-start gap-[32px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="w-[628px] hidden flex-row items-center justify-start pt-6 px-0 pb-0 box-border gap-[16px]">
                  <div className="w-[596px] relative font-semibold hidden" />
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/medium.svg"
                  />
                </div>
                <div className="self-stretch relative text-lg leading-[24px] inline-block h-36 shrink-0 text-dimgray-300">
                  <p className="m-0">
                    UrbanStay is your trusted partner in navigating the dynamic
                    and often challenging accommodation issues. With a team of
                    dedicated experts at your disposal, we are committed to
                    providing unparalleled support and guidance to ensure your
                    experience in the us is nothing short of extraordinary.
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0 [text-decoration:underline] text-gray-300">
                    Go to UrbanStay Home Page for more information.
                  </p>
                </div>
              </div>
              <div className="w-[629px] relative box-border h-px border-t-[1px] border-solid border-neutral-04" />
            </div>
            <Accordion className="w-[751px]" sx={{ width: 751 }}>
              <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                <Typography>How do I cancel my reservation?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Ensure you are logged in to your Urbanstay account. Navigate
                  to the "My Reservations" section. Find the reservation you
                  wish to cancel from the list of your upcoming bookings. Open
                  the reservation details and look for the "Cancel Reservation"
                  button. Click on it to initiate the cancellation process.
                  Follow the on-screen instructions to complete the
                  cancellation. You may be asked to provide a reason for
                  cancellation. Once the cancellation is successfully processed,
                  you'll receive a confirmation email with the details of the
                  cancellation.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="w-[751px]" sx={{ width: 751 }}>
              <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                <Typography>What if my host cancels my reservation?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  If your host cancels your reservation, you will be promptly
                  notified via email and through your Urbanstay account. Our
                  team is here to assist you during this process. Depending on
                  the circumstances, you may be eligible for a refund. Our
                  refund policy aims to provide fair compensation for any
                  inconvenience caused by a host cancellation. Hosts who
                  frequently cancel reservations without valid reasons may face
                  penalties, including removal from the Urbanstay platform.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="w-[751px]" sx={{ width: 751 }}>
              <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                <Typography>
                  How do I change the date of my reservation?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{`Ensure that you are logged in to your Urbanstay account. Navigate to the 'My Reservations' section within your account dashboard. Locate the reservation you want to modify in the list of your bookings. Review the changes to your reservation, including any associated costs due to date modifications.  Once you are satisfied with the new dates and any applicable fees, proceed to confirm the changes. `}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="w-[751px]" sx={{ width: 751 }}>
              <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                <Typography>
                  What is the reimbursement policy of UrbanStay?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  At UrbanStay, we value your peace of mind. Our reimbursement
                  policy is designed to ensure fairness and clarity for both
                  tenants and property owners Refunds are applicable under
                  specific circumstances, primarily related to cancellations.
                  The eligibility and amount of reimbursement depend on the
                  cancellation period. In unforeseen circumstances (e.g.,
                  natural disasters, government actions), UrbanStay may provide
                  flexible solutions. Please contact our support team for
                  assistance.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
