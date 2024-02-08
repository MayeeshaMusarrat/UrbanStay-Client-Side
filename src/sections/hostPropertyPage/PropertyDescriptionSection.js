const PropertyDescriptionSection = () => {
    return (
      <div
        className="flex-1 flex flex-row items-start justify-start pt-4 pb-7 pr-[30px] pl-0 box-border gap-[22px] max-w-full text-left text-5xl text-black font-poppins lg:flex-wrap"
        data-scroll-to="container"
      >
        <div className="h-[204px] w-[339px] relative capitalize inline-block shrink-0 min-w-[339px] max-w-full lg:flex-1 mq750:min-w-full">
          <p className="m-0">Description</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0 text-base text-darkslategray-400">
            Put up a catchy description for your property.
          </p>
        </div>
        <div className="flex-1 rounded-3xs bg-shade-01 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start pt-[37px] pb-[43px] pr-[35px] pl-9 box-border gap-[25px] min-w-[1000px] max-w-full text-base mq1050:min-w-full">
          <div className="w-[1200px] h-[274px] relative rounded-3xs bg-shade-01 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />
          <div className="relative capitalize font-medium z-[1]">description</div>
          <textarea className="bg-whitesmoke-100 [outline:none] self-stretch h-[145px] relative rounded-8xs box-border overflow-hidden shrink-0 min-w-[250px] z-[1] border-[1px] border-solid border-gainsboro-300" />
        </div>
      </div>
    );
  };
  
  export default PropertyDescriptionSection;  