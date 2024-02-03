import Header from "../../components/header/Header";
import ShowPropertyOnBrowsingPageSection from "../../sections/browsingPage/ShowPropertyOnBrowsingPageSection";
import Footer from "../../components/footer/Footer";
import Intersection from "../../sections/landingPage/Intersection";
import SearchBar from "../../components/bars/SearchBar";

const Browse = () => {
  return (
    <div className="w-full relative bg-shade-01 h-[1740px] overflow-hidden">
      <Header />
      <div className="absolute h-[calc(100%_-_1635px)] w-full top-[69px] right-[0px] bottom-[1694px] left-[0px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-midnightblue-200" />
        <div className="absolute top-[calc(50%_-_28px)] left-[calc(50%_-_700px)] w-[1432px] h-[56px] overflow-hidden flex flex-row justify-center" >
          <SearchBar />
        </div>
      </div>
      <ShowPropertyOnBrowsingPageSection />
      <Footer />
    </div>
  );
};

export default Browse;