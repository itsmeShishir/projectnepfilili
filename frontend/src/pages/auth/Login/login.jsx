import React from "react";
import Header from "../../../components/LandingPage/Layout/Header/Header";
import Footer from "../../../components/LandingPage/Layout/Footer/Footer";
import { FaUser } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "./login.css"

const Login = () => {
  return (
    <div>
      <Header />

      <div>
       <div className="sign-in-container">
        <div className="sign-in-box">
          <div className="sign-in-header">
            <h2>Login</h2>
          </div>

          <div className="input-box">
            <input type="text" id='user' placeholder='Email' className='input-field' required />

            <FaUser className='Icon' />
          </div>

          <div className="input-box">
            <input type="password" id='pass' className='input-field' placeholder='Password' required />
            <FaEyeSlash className='Icon' />
          </div>

          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id='remember' />
              <label htmlFor="remember">Remember me</label>
            </div>

            <div className="forgot">
              <a href="#">Forgot password?</a>
            </div>
          </div>

          <div className="input_box">
              <input type="submit" className='input-submit' value="Login"  />
            </div>

            <div className="register">
              <span>Don't have an account? <a href="#">Register</a></span>
            </div>
        </div>
       </div>
    </div>

      <Footer />
    </div>
  );
};

export default Login;
