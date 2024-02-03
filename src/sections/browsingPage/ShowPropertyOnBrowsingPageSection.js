import FilterAndSortBar from "../../components/bars/FilterAndSortBar";
import PropertyCardForBrowsePage from "../../components/cards/PropertyCardForBrowsePage";

const ShowPropertyOnBrowsingPageSection = () => {
  return (
    <div className="relative top-[120px] bottom-[486px] left-[calc(50%_-_711px)] flex flex-col items-left justify-left pt-5 px-0 pb-0 pl-5 box-border gap-[40px] text-left text-base text-darkslategray-100 font-poppins overflow-hidden">
      <FilterAndSortBar />
      <section
        className="self-stretch h-[1058px] overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start py-2.5 px-0 box-border text-left text-sm text-shade-02 font-header-22pt-regular"
        id="browse"
      >
        <PropertyCardForBrowsePage />
      </section>
    </div>
  );
};

export default ShowPropertyOnBrowsingPageSection;