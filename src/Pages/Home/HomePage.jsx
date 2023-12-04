import { useState } from "react";
import AboutUsSection from "./AboutUs";
import Banner from "./Banner";
import BestCreators from "./BestCreators";
import PopularContests from "./PopularContests";
import ReviewSection from "./ReviewSection";
import WhyChooseUs from "./WhyChooseUs";
import Winners from "./Winners";
import usePopularContests from "../../hooks/usePopularContests";

const HomePage = () => {
  const [text, setText] = useState("");
  const { refetch } = usePopularContests(text);

  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };
  return (
    <div>
       <Banner handleSearch={handleSearch} text={text} setText={setText} />
      <PopularContests text={text} />
      <Winners />
      <BestCreators />
      <AboutUsSection></AboutUsSection>
      <WhyChooseUs></WhyChooseUs>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default HomePage;
