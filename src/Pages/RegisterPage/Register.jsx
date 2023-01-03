import React, { useState } from "react";
import "./Register.css";
import img1 from "../../images/registerimg.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeRole = (e) => {
    setRole(e.target.value);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <div data-aos="fade-down" className="text-center p-3 login-title">
        SignUp
      </div>
      <div className="row m-0 p-5 login-div">
        <div data-aos="fade-right" className="col-md-4 img-divv m-0 p-0">
          <img src={img1} alt="img" />
        </div>
        <div className="col-md-6 form-div p-5">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputName1">User Name</label>
              <input
                type="text"
                className="form-control my-2"
                value={name}
                onChange={onChangeName}
                id="exampleInputName"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control my-2"
                value={email}
                onChange={onChangeEmail}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                value={password}
                onChange={onChangePassword}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="checks">
              <div className="row">
                <div className=" col-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="user"
                      value="user"
                      onChange={onChangeRole}
                      disabled={role === "advocate"}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      isUser?
                    </label>
                  </div>
                </div>
                <div className="col-8">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="advocate"
                      value="advocate"
                      onChange={onChangeRole}
                      disabled={role === "user"}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      is Advocate?
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn btn-login">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
