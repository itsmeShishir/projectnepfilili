import React from "react";
import "./signup.css"


const Register = () => {
  return <div>

<div>
    <div className="sign-up-container">
     <div className="sign-up-box">
       <div className="sign-up-header">
         <h2>Sign Up</h2>
       </div>

       <div className="input-box-first-name">
         <input type="text" id='user' placeholder='First Name' className='input-field' required />
       </div>

       <div className="input-box-last-name">
         <input type="text" id='user' placeholder='Last Name' className='input-field' required />
       </div>

       <div className="input-box-address">
         <input type="text" id='user' placeholder='Address' className='input-field' required />
       </div>
       
       <div className="input-box-phone">
         <input type="tel" id='user' placeholder='Phone Number' className='input-field' required />
       </div>

       <div className="input-box">
         <input type="email" id='user' placeholder='Email' className='input-field' required />
       </div>

       <div className="input-box">
         <input type="password" id='pass' className='input-field' placeholder='Password' required />
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
           <input type="submit" className='input-submit' value="Sign-Up"  />
         </div>

         <div className="register">
           <span>Don't have an account? <a href="#">Register</a></span>
         </div>
     </div>
    </div>
 </div>    

  </div>;
};

export default Register;
