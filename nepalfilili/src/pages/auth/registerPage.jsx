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

function RegisterPage() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    address: "",
    phone: "",
  });
  const [formErrors, setFromErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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
    if (!value.username) {
      errors.username = "Username is required";
    }
    if (!value.name) {
      errors.name = "Name is required";
    }
    if (!value.email) {
      errors.email = "Email is required";
    } else if (!regex.test(value.email)) {
      errors.email = "This is not a Valid Email!";
    }
    if (!value.password) {
      errors.password = "Password is required";
    } else if (value.password.length > 4) {
      errors.password =
        "Password characters must be set more than 4 characters ";
    } else if (value.password.length < 12) {
      errors.password =
        "Password characters cannot exceed more than 12 characters";
    }

    if (!value.address) {
      errors.address = "Address is required";
    }
    if (!value.phone) {
      errors.phone = "Phone is required";
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
                <h1>Sing Up</h1>
                <p className="text-center mt-5">Become New Member in NFilili</p>
              </div>

              <div className="input-group mb-2">
                <p>{formErrors.name}</p>
                <input
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  value={formValue.name}
                  placeholder="Name"
                  className="form-control form-control-lg bg-light fs-6"
                  required
                />
              </div>

              <div className="input-group mb-2">
                <p>{formErrors.username}</p>
                <input
                  onChange={handleChange}
                  type="text"
                  id="username"
                  name="username"
                  value={formValue.username}
                  placeholder="Username"
                  className="form-control form-control-lg bg-light fs-6"
                  required
                />
              </div>

              <div className="input-group mb-2">
                <p>{formErrors.address}</p>
                <input
                  onChange={handleChange}
                  type="text"
                  id="address"
                  name="address"
                  value={formValue.address}
                  placeholder="Address"
                  className="form-control form-control-lg bg-light fs-6"
                  required
                />
              </div>

              <div className="input-group mb-2">
                <p>{formErrors.phone}</p>
                <input
                  onChange={handleChange}
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formValue.phone}
                  placeholder="Phone Number"
                  className="form-control form-control-lg bg-light fs-6"
                  required
                />
              </div>

              <div className="input-group mb-2">
                <p>{formErrors.email}</p>
                <input
                  onChange={handleChange}
                  type="email"
                  id="email"
                  name="email"
                  value={formValue.email}
                  placeholder="Email"
                  className="form-control form-control-lg bg-light fs-6"
                  required
                />
              </div>

              <div className="input-group mb-2">
                <p>{formErrors.password}</p>
                <input
                  onChange={handleChange}
                  type="password"
                  id="password"
                  name="password"
                  value={formValue.password}
                  placeholder="Password"
                  className="form-control form-control-lg bg-light fs-6"
                  required
                />
              </div>

              <div className="input-group mt-5">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary w-100 fs-5"
                >
                  Sign Up
                </button>
              </div>

              <div className="row mb-2 fs-5">
                <small>
                  Already Have An Account?
                  <Link
                    to="/auth/login"
                    className="mx-2 justify-content-center"
                  >
                    Sign-In
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

export default RegisterPage;
