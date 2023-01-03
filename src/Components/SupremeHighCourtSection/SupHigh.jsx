import React from "react";
import "./SupHigh.css";
import logo from "../../images/Supreme&high-court.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SupHigh = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="text-center courts-cont">
      <h2 data-aos="fade-up">Court Performances</h2>
      <div className="row p-2 courts-div m-0">
        <div className="col-md-4 img-div line-div">
          <img src={logo} alt="court img" data-aos="fade-right" />
          <h4 data-aos="fade-right">Supreme Court</h4>
        </div>
        <div className="col-md-4 img-div line-div">
          <img src={logo} alt="court img" data-aos="fade-left" />
          <h4 data-aos="fade-left">High Court</h4>
        </div>
      </div>
    </div>
  );
};

export default SupHigh;
