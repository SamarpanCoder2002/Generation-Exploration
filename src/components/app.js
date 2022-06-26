import { useEffect } from "react";
import LowerSide from "./landing/lowerside";
import MiddleSide from "./landing/middlesection/middleside";
import UpperSide from "./landing/upperside";
import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <UpperSide />
      <MiddleSide />
      <LowerSide />
    </div>
  );
};

export default LandingPage;
