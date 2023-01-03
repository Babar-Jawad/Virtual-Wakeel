import React from "react";
import "./Footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">
        VIRTUAL WAKEEL
      </a>

      <div className="footer__socials">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <AiOutlineTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Virtual Wakeel || All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
