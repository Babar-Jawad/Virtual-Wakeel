import React from "react";
import "./About.css";
import img1 from "../../images/ser2.png";
import img2 from "../../images/ser3.png";
import img3 from "../../images/ser4.png";
import img4 from "../../images/ser5.png";
import img5 from "../../images/serv1.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="about-cont row p-0 m-0 border border-danger text-center p-3">
        <h4>We serve the best service</h4>
        <p>
          Our application will help people to understand the legal issues about
          their problem. It will provide complete and comprehensive details
          regarding the issues. Solution to their problems will be only a single
          click away.
        </p>
      </div>

      <div className="core-values">
        <h3 data-aos="fade-left">OUR CORE VALUES</h3>
      </div>

      <div className="cards row p-0 m-0 my-2">
        <div data-aos="fade-up" className="card col-md-3 border">
          <img src={img3} alt="img" className="about-img" />
          <h6>WE SHOW RESPECT</h6>
          <p>
            Being the First Digital Law Firm in Pakistan,we seek out new and
            better ways of working to be the best at what we do.
          </p>
        </div>
        <div data-aos="fade-up" className="card col-md-3 border">
          <img src={img5} alt="img" className="about-img" />
          <h6>WE PUT OUR CLIENT FIRST</h6>
          <p>
            We are passionate about delivering what clients want.We seek to
            provide the best solution to our clients.
          </p>
        </div>
        <div data-aos="fade-up" className="card col-md-3 border">
          <img src={img1} alt="img" className="about-img" />
          <h6>WE STRIVE FOR EXCELLENCE</h6>
          <p>
            Being the First Digital Law Firm in Pakistan,we seek out new and
            better ways of working to be the best at what we do.
          </p>
        </div>
      </div>

      <div className="cards row p-0 m-0 my-2">
        <div data-aos="fade-up" className="card col-md-3 border">
          <img src={img2} alt="img" className="about-img" />
          <h6>WE LEAD THROUGH TECHNOLOGICAL DEVELOPMENT</h6>
          <p>
            We Believe technology is the servant of good business practice and
            our aim is to lead innovation in practice management solutions.
          </p>
        </div>

        <div data-aos="fade-up" className="card col-md-3 border">
          <img src={img4} alt="img" className="about-img" />
          <h6>WE TAKE RESPONSIBILITY</h6>
          <p>
            As individuals we recognize and accept responsibility for our
            actions.Outside the workplace our social and community
            responsibilities are integral to our business approach.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
