<<<<<<< HEAD
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/sidepic.jpg' 
import googlelogo from '../../assets/images/googleicon.svg'

function LoginPage() {
  const [data, setData] = useState({name: "", username: "",email: "",address: "",phone: "",password: "",});

  const handleChange=(e)=>{
    setData((prevData)=>({
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/sidepic.jpg";
import googlelogo from "../../assets/images/googleicon.svg";

function LoginPage() {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setData((prevData) => ({
>>>>>>> auth
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
<<<<<<< HEAD
      <div className='container d-flex justify-content-center align-items-center min-vh-100'>


        <div className='row border p-2 bg-white shadow box-area w-50'>
              <img src={logo} className="img-fluid mt-2 mb-2" style={{width: "300px"}} />

          <form action='POST' className='col-md-6 right-box'>
            <div className='row align-items-center'>
              <div className="header-text mb-3 mx-2">
                <h1 className='font-weight-bold text-center fs-2 mt-4 mb-3'>Sign Up</h1>
              </div>

              <div className='input-group mb-2'>
                  <input type="text" id='name' name='name' value={data.name} placeholder='Name' className='form-control form-control-lg bg-light fs-6'  /> 
               </div>

               <div className='input-group mb-2'>
                  <input type="text" id='username' name='username' value={data.username} placeholder='Username' className='form-control form-control-lg bg-light fs-6'  /> 
               </div>

               <div className='input-group mb-2'>
                  <input type="text" id='address' name='address' value={data.address} placeholder='Address' className='form-control form-control-lg bg-light fs-6'  /> 
               </div>

               <div className='input-group mb-2'>
                  <input type="tel" id='phone' name='phone' value={data.phone} placeholder='Phone Number' className='form-control form-control-lg bg-light fs-6'  /> 
               </div>

               <div className='input-group mb-2'>
                  <input type="email" id='email' name='email' value={data.email} placeholder='Email' className='form-control form-control-lg bg-light fs-6'  /> 
               </div>

               <div className='input-group mb-2'>
                  <input type="password" id='password' name='password' value={data.password} placeholder='Password' className='form-control form-control-lg bg-light fs-6'  /> 
               </div>

              <div className='input-group mt-4'>
                <button className='btn btn-lg btn-primary w-100 fs-6'>Sign Up</button>
              </div>

              <div className='input-group mt-3 mb-2'>
                <button className='btn btn-lg btn-light w-100 fs-6'><img src={googlelogo} style={{width: "30px"}} alt=""  className='me-2'/>Sign Up with Google</button>
              </div>
            </div>

=======
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border p-2 bg-white shadow box-area w-50">
          <img
            src={logo}
            className="img-fluid mt-2 mb-2"
            style={{ width: "300px" }}
          />

          <form action="POST" className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-3 mx-2">
                <h1 className="font-weight-bold text-center fs-2 mt-4 mb-3">
                  Sign Up
                </h1>
              </div>

              <div className="input-group mb-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={data.name}
                  placeholder="Name"
                  className="form-control form-control-lg bg-light fs-6"
                />
              </div>

              <div className="input-group mb-2">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={data.username}
                  placeholder="Username"
                  className="form-control form-control-lg bg-light fs-6"
                />
              </div>

              <div className="input-group mb-2">
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={data.address}
                  placeholder="Address"
                  className="form-control form-control-lg bg-light fs-6"
                />
              </div>

              <div className="input-group mb-2">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  placeholder="Phone Number"
                  className="form-control form-control-lg bg-light fs-6"
                />
              </div>

              <div className="input-group mb-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  placeholder="Email"
                  className="form-control form-control-lg bg-light fs-6"
                />
              </div>

              <div className="input-group mb-2">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={data.password}
                  placeholder="Password"
                  className="form-control form-control-lg bg-light fs-6"
                />
              </div>

              <div className="input-group mt-4">
                <button className="btn btn-lg btn-primary w-100 fs-6">
                  Sign Up
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
                  Sign Up with Google
                </button>
              </div>
            </div>
>>>>>>> auth
          </form>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}

export default LoginPage
=======
  );
}

export default LoginPage;
>>>>>>> auth
