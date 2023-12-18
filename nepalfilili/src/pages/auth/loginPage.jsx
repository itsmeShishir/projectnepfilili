import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../assets/images/sidepic.jpg";
import googlelogo from "../../assets/images/googleicon.svg";

function LoginPage() {
  const [data, setData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border p-2 bg-white shadow box-area w-50">
          <img
            src={logo}
            className="img-fluid mt-2 mb-2"
            style={{ width: "300px" }}
          />

          <form action="POST" className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4 mx-2">
                <h1 className="text-center fs-2 mt-4">Sign In</h1>
              </div>

              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Enter your Email"
                  onChange={handleChange}
                  value={data.username}
                  required
                />
              </div>

              <div className="input-group mb-1">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Enter your Password"
                  onChange={handleChange}
                  value={data.password}
                  required
                />
              </div>

              <div className="input-group mt-2 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="formCheck"
                  />
                  <label
                    for="formCheck"
                    className="form-check-label text-secondary"
                  >
                    <small>Remember Me</small>
                  </label>
                </div>

                <div className="forgot">
                  <small>
                    <a href="#">Forgot Password?</a>
                  </small>
                </div>
              </div>

              <div className="input-group mt-5">
                <button className="btn btn-lg btn-primary w-100 fs-6">
                  Login
                </button>
              </div>

              <div className="input-group mt-3 mb-2">
                <button className="btn btn-lg btn-light w-100 fs-6">
                  <img
                    src={googlelogo}
                    style={{ width: "30px" }}
                    alt=""
                    className="me-2"
                  />
                  Sign in with Google
                </button>
              </div>
              <div className="row mb-2 fs-6">
                <small>
                  Don't have an account?{" "}
                  <Link
                    to="/auth/register"
                    className="mx-2 justify-content-center"
                  >
                    Sign-Up
                  </Link>
                </small>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
