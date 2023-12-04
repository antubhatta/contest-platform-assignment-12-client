import AboutUsSection from "./AboutUs";
import Banner from "./Banner";
import BestCreators from "./BestCreators";
import PopularContests from "./PopularContests";
import ReviewSection from "./ReviewSection";
import WhyChooseUs from "./WhyChooseUs";
import Winners from "./Winners";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <PopularContests />
      <Winners />
      <BestCreators />
      <AboutUsSection></AboutUsSection>
      <WhyChooseUs></WhyChooseUs>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default HomePage;
