import React from "react";
import logo from "../Navbar/STOCK COIN LOGO-01.png";
import "./Login.css";


const Login = () => {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 flex-div height-login">
            <div className="flex-item">
              <img src={logo} className="img-fluid " alt="..." />
              <div>
                <input
                  className="w-100 bg-light raduis-login px-3 py-2 mt-4"
                  name="username"
                  id="username"
                  placeholder="Enter Username"
                  // onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="w-100 bg-light raduis-login px-3 py-2 mt-4"
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                  autoComplete="on"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="my-5 text-center">
                <button
                  type="button"
                  className="btn btn-lg bg-orange w-50 button-radius fs-6"
                >
                  Sign Up
                </button>
              </div>
              <div>
                  <p className="fs-no color-red">No real money involved.</p>
                  <p className="fs-this">This is a virtual Trading Application which has all the features to trade.</p>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
