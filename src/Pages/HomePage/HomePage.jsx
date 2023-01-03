import React from "react";
import "./HomePage.css";
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../../images/bg.jpg";
import image2 from "../../images/bg1.jpg";
import logo from "../../images/logo.jpeg";
import BodyContent from "../../Components/BodyContent/BodyContent";
import SupHigh from "../../Components/SupremeHighCourtSection/SupHigh";
import CourtsOfPk from "../../Components/MultipleCourtsSection/CourtsOfPk";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  const images = [
    {
      url: image1,
    },
    {
      url: image2,
    },
  ];
  return (
    <>
      <div>
        <SimpleImageSlider
          style={{ opacity: 0.3 }}
          width={"100%"}
          height={"100%"}
          images={images}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={4.0}
        />
      </div>
      <div className="home-content p-3">
        <img
          src={logo}
          alt=""
          className="home-logo d-md-block d-none"
          style={{ marginTop: 25 }}
        />
        <h1>Virtual Wakeel</h1>
        <h3>Helping you help yourself</h3>
        <p>
          Access your lawyer to help you help yourself with legal questions or
          issues conveniently from your phone, smartphone, computer, or tablet.
        </p>
        <button>Search case</button>
      </div>
      <div style={{ marginTop: "100vh" }}></div> {/*very Imp line*/}
      <BodyContent />
      <SupHigh />
      <CourtsOfPk />
      <Footer />
    </>
  );
};

export default HomePage;
