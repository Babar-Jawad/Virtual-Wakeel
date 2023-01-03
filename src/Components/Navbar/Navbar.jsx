import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdOutlineLogin } from "react-icons/md";
import logo from "../../images/logo.jpeg";
import Menu from "./DropdownMenu/Menu";
import { useState } from "react";

const Navbar = ({ menuShown, handleMenuShown }) => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="container-fluid p-2 py-3">
      <div className="row nav-container m-0">
        <div className="col-9 col-md-2 left-container p-1">
          <img src={logo} alt="" className="logo-img" />
          <h3 className="Nav-title">Virtual Wakeel</h3>
        </div>
        <div className="menu d-none d-md-block col-md-7 p-0">
          <ul>
            <li>
              <Link
                onClick={() => setSelected(1)}
                style={
                  selected === 1
                    ? {
                        borderBottom: "3px solid #921110",
                        paddingBottom: "4px",
                      }
                    : {}
                }
                className="list"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSelected(2)}
                style={
                  selected === 2
                    ? {
                        borderBottom: "3px solid #921110",
                        paddingBottom: "4px",
                      }
                    : {}
                }
                className="list"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSelected(3)}
                style={
                  selected === 3
                    ? {
                        borderBottom: "3px solid #921110",
                        paddingBottom: "4px",
                      }
                    : {}
                }
                className="list"
                to="/services"
              >
                Services
              </Link>
            </li>
            {/* <li>
              <Link
                onClick={() => setSelected(4)}
                style={
                  selected === 4
                    ? {
                        borderBottom: "3px solid #921110",
                        paddingBottom: "4px",
                      }
                    : {}
                }
                className="list"
                to="/"
              >
                Legal
              </Link>
            </li> */}
            <li>
              <Link
                onClick={() => setSelected(5)}
                style={
                  selected === 5
                    ? {
                        borderBottom: "3px solid #921110",
                        paddingBottom: "4px",
                      }
                    : {}
                }
                className="list"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="icons-div col-3 col-md-3 p-0">
          <GiHamburgerMenu
            onClick={handleMenuShown}
            className="mx-2 d-md-none"
          />
          <div className="d-md-block d-none">
            <button className="login-btn btn">
              <MdOutlineLogin className="icon" to="/login" />
              <Link className="user-link" to="/login">
                Login
              </Link>
            </button>
            <button className="register-btn btn">
              <SiGnuprivacyguard className="icon" />
              <Link className="user-link2" to="/register">
                Register
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* dropdown menu */}
      {menuShown && <Menu />}
    </div>
  );
};

export default Navbar;
