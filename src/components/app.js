import { useEffect } from "react";
import LowerSide from "./lowerside";
import MiddleSide from "./middlesection/middleside";
import UpperSide from "./upperside";
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
