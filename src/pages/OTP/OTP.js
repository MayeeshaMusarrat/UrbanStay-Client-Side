import OTPForm from "../../components/inputFields/OTPForm";;
import WhiteLogoIcon from "../../components/logos/WhiteLogoIcon";

const OTP = () => {
  return (
    <div className="w-full relative bg-shade-01 overflow-hidden flex flex-col items-center justify-start pt-12 pb-[210px] pr-[580px] pl-[41px] box-border gap-[70px] tracking-[normal] mq450:gap-[75px] mq450:pr-5 mq450:box-border mq750:gap-[75px] mq750:pr-[272px] mq750:box-border">
      <section className="absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px]" >
        <img 
        className="bg-cover"
        src="backgroundpic.png"
        />
    </section>
    <WhiteLogoIcon />
      <section className="self-stretch h-[90px] flex flex-row items-start justify-start text-left text-xl text-shade-01 font-inter">
        
      </section>
      <section className="self-stretch flex flex-row items-start justify-end max-w-full">
        <OTPForm />
      </section>
    </div>
  );
};

export default OTP;