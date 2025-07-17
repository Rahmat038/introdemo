import Header from "./Header";
import LeftSide from "./LeftSide";
import MiniFooter from "./MiniFooter";
import RightSide from "./RightSide";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <Header />
      <div className="sides">
      <LeftSide />
      <RightSide />
      </div>
    
      <MiniFooter />
    </section>
  );
};

export default Banner;
