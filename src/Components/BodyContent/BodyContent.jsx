import React, { useEffect } from "react";
import "./BodyContent.css";
import Aos from "aos";
import "aos/dist/aos.css";

const BodyContent = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="body-content-container">
      <h2 data-aos="fade-up">Helping You Help Yourselves</h2>
      <p data-aos="fade-up">
        Whether you are an individual, a family, or a small business owner,
        legal issues arise every day. My Virtual Lawyer is here to provide you
        access to an experienced attorney from the convenience of your home,
        office, or virtually anywhere you are. Choose and access your lawyer for
        all you legal questions, issues, and needs from your phone, computer, or
        tablet. If you have internet access, your attorney is a click away. My
        Virtual Lawyer provides convenient legal access at affordable prices.
        You control what legal services you need within your budget. Flexible
        fee agreements, including fixed and flat-rate fees and payment plans,
        help you control your costs. The general areas of law that your attorney
        can help you with include Family Law, Estate Planning, Traffic Law,
        Criminal Law, Landlord / Tenant Law, Consumer Debt Relief
        (Non-Bankruptcy), and Small Business Law. Your lawyer will discuss with
        you your desired goal and help determine your path to reaching that
        objective.
      </p>
    </div>
  );
};

export default BodyContent;
