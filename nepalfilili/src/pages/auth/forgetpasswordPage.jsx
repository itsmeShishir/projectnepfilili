import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/sidepic.jpg";
import googlelogo from "../../assets/images/googleicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderComponent from "../../components/header/headerComponent";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ForgetPasswordPage() {
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
                <h1>Forget Password</h1>
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

              <div className="input-group mt-5">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary w-100 fs-5"
                >
                  Forget Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgetPasswordPage;
