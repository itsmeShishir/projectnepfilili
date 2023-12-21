import React, {useState} from "react";
import HeaderComponent from "../../components/header/headerComponent";
import FooterComponent from "../../components/footer/footerComponent";
import logo from '../../assets/images/sidepic.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const ContactPage = () => {
    const [data, setData] = useState({firstname:"", lastname:"", email:"", subject:"", message:"" });
  
    const handleChange=(e)=>{
      const {name, value} = e.target;
      setData({...data, [name]: value});
    };
  
    const handleSubmit=(e)=>{
      e.preventDefault()
    }

  return (
    <div>

    <HeaderComponent />

      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border shadow box-area w-70 bg-light">
          <div className="col-md-4 p-5 bg-dark text-white">
            <h2 className="text-center">Contact Us</h2>
            <div className="mt-5">
              <div className="d-flex">
                <FaLocationDot size={30}/>
                <h4 className="fs-5 mx-4">Address:</h4>
              </div>
                <p className="fs-5 mx-5 text-secondary">198 West 21th Street, Suite 721 New York NY 10016</p>

                <div className="d-flex mt-5">
                <FaPhoneAlt size={30}/>
                <h4 className="fs-5 mx-4">Phone:</h4>
              </div>
                <p className="fs-5 mx-5 text-secondary">+1 5589 55488 55</p>
  
                <div className="d-flex mt-5">
                <MdEmail size={30}/>
                <h4 className="fs-5 mx-4">Email:</h4>
              </div>
                <p className="fs-5 mx-5 text-secondary">info@example.com</p>
  

            </div>
          </div>
          
          <div className="col-md-8 p-5 text-center">
            <h2>Get In Touch</h2>

              <form method="POST" onSubmit={handleSubmit} className="row g-3 contactFormInput-4 mt-3">
              <div className="col-md-6 mt-5">
                  <input type="text" placeholder="First Name" style={{height:"50px"}} className="form-control" id="firstname" onChange={handleChange} value={data.firstname} name="firstname" required />
                </div>

              <div className="col-md-6 mt-5">
                  <input type="text" placeholder="Last Name" style={{height:"50px"}} className="form-control" id="lastname" onChange={handleChange} value={data.lastname} name="lastname" required />
                </div>

                <div className="col-md-12 mt-4">
                  <input type="email" placeholder="Email" style={{height:"50px"}} className="form-control" id="email" onChange={handleChange} value={data.email} name="email" required />
                </div>

                <div className="col-md-12 mt-4">
                  <input type="text" placeholder="Enter your Message" style={{height:"100px"}} className="form-control" id="message" onChange={handleChange} 
                  value={data.message} name="message" required />
                </div>

                <div className="input-group mt-5">
                <button className="btn btn-lg btn-success w-100 fs-6 rounded-0">
                  Send Message
                </button>
              </div>
              </form>
          </div>
        </div>
      </div>

    <FooterComponent />
  </div>
  ) 
};

export default ContactPage;
