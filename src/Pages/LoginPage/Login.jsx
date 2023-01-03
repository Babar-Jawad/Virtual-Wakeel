import React, { useState } from "react";
import "./Login.css";
import img1 from "../../images/loginpageimg.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

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
        Login
      </div>
      <div className="row m-0 p-5 login-div">
        <div className="col-md-6 form-div p-5">
          <form>
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
                <div className=" col-6">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="user"
                      value="user"
                      onChange={onChangeRole}
                      disabled={role === "admin" || role === "advocate"}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      isUser?
                    </label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="admin"
                      value="admin"
                      onChange={onChangeRole}
                      disabled={role === "user" || role === "advocate"}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      isAdmin?
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="advocate"
                      value="advocate"
                      onChange={onChangeRole}
                      disabled={role === "admin" || role === "user"}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      is Advocate?
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn btn-login">Login</button>
          </form>
        </div>
        <div data-aos="fade-left" className="col-md-4 img-divv m-0 p-0">
          <img src={img1} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Login;
