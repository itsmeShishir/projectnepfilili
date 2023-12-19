import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/sidepic.jpg";
import googlelogo from "../../assets/images/googleicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderComponent from "../../components/header/headerComponent";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

function LoginPage() {
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const [formErrors, setFromErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFromErrors(validate(formValue));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formErrors]);

  const validate = (value) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    if (!value.email) {
      errors.email = "Email is required";
    } else if (!regex.test(value.email)) {
      errors.email = "This is not a Valid Email!";
    }
    if (!value.password) {
      errors.password = "Password is required";
    } else if (value.password > 4) {
      errors.password =
        "Password characters must be set more than 4 characters ";
    } else if (value.password < 12) {
      errors.password =
        "Password characters cannot exceed more than 12 characters";
    }
    return errors;
  };

  return (
    <>
      <HeaderComponent />
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        {Object.keys(formErrors).length === 0 && isSubmit}
        <div className="row border bg-white shadow box-area w-80">
          <img
            src={logo}
            className="img-fluid d-none d-md-block"
            style={{ width: "500px", padding: "0px" }}
          />

          <form
            onSubmit={handleSubmit}
            action="POST"
            className="col-md-6 right-box"
          >
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ minHeight: "70vh", minWidth: "50vh" }}
            >
              <div className="">
                <h1>Sing In</h1>
                <p className="text-center mt-5">Welcome Back to NFilili</p>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  id="email"
                  type="email"
                  className="form-control form-control-lg bg-light fs-5"
                  placeholder="Enter your Email"
                  onChange={handleChange}
                  value={formValue.username}
                  required
                />
              </div>

              <div className="input-group mb-1">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  className="form-control form-control-lg bg-light fs-5"
                  placeholder="Enter your Password"
                  onChange={handleChange}
                  name="password"
                  value={formValue.password}
                  required
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={passwordVisible ? faEyeSlash : faEye}
                  />
                </button>
              </div>

              <div className="input-group mt-2 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="formCheck"
                  />
                  <label
                    htmlFor="formCheck"
                    className="form-check-label text-secondary"
                  >
                    <small>Remember Me</small>
                  </label>
                </div>

                <div className="forgot">
                  <small>
                    <a href="/auth/forgetpassword">Forgot Password?</a>
                  </small>
                </div>
              </div>

              <div className="input-group mt-5">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary w-100 fs-5"
                >
                  Login
                </button>
              </div>

              <div className="input-group mt-3 mb-2">
                <button
                  type="submit"
                  className="btn btn-lg btn-light w-100 fs-6"
                >
                  <img
                    src={googlelogo}
                    style={{ width: "30px" }}
                    alt=""
                    className="me-2"
                  />
                  Sign in with Google
                </button>
              </div>
              <div className="row mb-2 fs-5">
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
    </>
  );
}

export default LoginPage;
