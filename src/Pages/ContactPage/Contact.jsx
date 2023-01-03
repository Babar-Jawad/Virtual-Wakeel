import React from "react";
import "./Contact.css";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="contact-divv" style={{ marginTop: "100px" }}>
      <h2>Send us a message</h2>
      <div className="container cont-cont">
        <form className="form-contact">
          <input
            type="text"
            className="text"
            name="name"
            placeholder="Your Full Name..."
            required
          />
          <input
            type="email"
            className="text"
            name="email"
            placeholder="Your Email..."
            required
          />
          <textarea
            name="message"
            className="text"
            placeholder="Your Message..."
            rows="7"
            required
          ></textarea>
          <button className="btn msg-btn" type="submit">
            <FiSend className="mx-1" /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
