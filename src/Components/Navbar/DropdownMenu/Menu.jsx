import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="dropdown-menu-container drop-men-items">
      <ul>
        <li>
          <Link className="list" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="list" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="list" to="/services">
            Services
          </Link>
        </li>
        {/* <li>
          <Link className="list" to="/">
            Legal
          </Link>
        </li> */}
        <li>
          <Link className="list" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
