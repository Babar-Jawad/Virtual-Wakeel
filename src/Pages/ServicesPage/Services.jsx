import React from "react";
import "./Services.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img1 from "../../images/service-img1.jpg";
import img2 from "../../images/service-img-2.jpg";
import img3 from "../../images/service-img-3.jpg";
import img4 from "../../images/service-img-4.jpg";
import img5 from "../../images/service-img5.jpg";
import img6 from "../../images/service-img6.jpg";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div style={{ marginTop: "100px" }}>
      <h2 data-aos="fade-down" className="service-heading text-center p-3">
        Our Services
      </h2>
      <div className="row m-0 p-0 ser-card-div">
        <div data-aos="fade-right" className="ser-detail-div col-md-4">
          <h4>Legal Coaching</h4>
          <p>
            Your virtual Wakeel will help you identify your legal issues and
            discuss your goals. He or she will guide you through legal issues
            you will have to address to attain your goals.
          </p>
        </div>
        <div data-aos="fade-left" className="service-img-div col-md-4">
          <img src={img1} alt="img" />
        </div>
      </div>

      <div className="row m-0 p-0 ser-card-div">
        <div data-aos="fade-right" className="service-img-div col-md-4">
          <img src={img2} alt="img" />
        </div>
        <div data-aos="fade-left" className="ser-detail-div col-md-4">
          <h4>Document Review</h4>
          <p>
            Your virtual wakeel will review your documents and help you to
            understand your rights and obligations created from and the
            consequences of such documents.
          </p>
        </div>
      </div>

      <div className="row m-0 p-0 ser-card-div">
        <div data-aos="fade-right" className="ser-detail-div col-md-4">
          <h4>Document Drafting</h4>
          <p>
            Your virtual wakeel will help you draft legal documents such as
            wills, contracts, and business agreements.
          </p>
        </div>
        <div data-aos="fade-left" className="service-img-div col-md-4">
          <img src={img3} alt="img" />
        </div>
      </div>

      <div className="row m-0 p-0 ser-card-div">
        <div data-aos="fade-right" className="service-img-div col-md-4">
          <img src={img4} alt="img" />
        </div>
        <div data-aos="fade-left" className="ser-detail-div col-md-4">
          <h4>Preparation for Court</h4>
          <p>
            Your virtual wakeel will advise you on court procedures and
            courtroom behavior. Your lawyer will role play with you so that you
            know what you may be walking into when representing yourself.
          </p>
        </div>
      </div>

      <div className="row m-0 p-0 ser-card-div">
        <div data-aos="fade-right" className="ser-detail-div col-md-4">
          <h4>Legal Research</h4>
          <p>
            Your virtual wakeel will research any legal question that you have.
          </p>
        </div>
        <div data-aos="fade-left" className="service-img-div col-md-4">
          <img src={img5} alt="img" />
        </div>
      </div>

      <div className="row m-0 p-0 ser-card-div">
        <div data-aos="fade-right" className="service-img-div col-md-4">
          <img src={img6} alt="img" />
        </div>
        <div data-aos="fade-left" className="ser-detail-div col-md-4">
          <h4>Limited Appearance in Court</h4>
          <p>
            Virtual wakeel may be able to appear on your behalf for a limited
            purpose. You may find while representing yourself that a situation
            arises in court that you would prefer to have your lawyer appear
            with you for that limited situation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
