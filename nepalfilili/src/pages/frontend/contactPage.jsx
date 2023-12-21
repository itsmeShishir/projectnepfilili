import React, {useState} from "react";
import HeaderComponent from "../../components/header/headerComponent";
import FooterComponent from "../../components/footer/footerComponent";
import logo from '../../assets/images/sidepic.jpg'

const ContactPage = () => {
    const [data, setData] = useState({name:"", email:"", subject:"", message:"" });
  
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
        <div className="row border bg-white shadow box-area w-70">
          <div className="col-md-4">
            <img src={logo} className="img-fluid" alt="" />
          </div>

          <div className="col-md-8 p-4 text-center">
            <h2>Get In Touch</h2>

              <form method="POST" onSubmit={handleSubmit} className="row g-3 contactFormInput-4">
              <div className="col-md-6 mt-5">
                  <label htmlFor="name" className="form-label">FULL NAME</label>
                  <input type="text" className="form-control bg-light" id="name" onChange={handleChange} value={data.name} name="name" required />
                </div>

                <div className="col-md-6 mt-5">
                  <label htmlFor="email" className="form-label">EMAIL</label>
                  <input type="email" className="form-control bg-light" id="email" onChange={handleChange} value={data.email} name="email" required />
                </div>

                <div className="col-md-12 mt-4">
                  <label htmlFor="subject" className="form-label">SUBJECT</label>
                  <input type="text" className="form-control bg-light" id="subject" onChange={handleChange} value={data.subject} name="subject" required />
                </div>

                <div className="col-md-12 mt-4">
                  <label htmlFor="message" className="form-label">YOUR MESSAGE</label>
                  <input type="text" className="form-control p-5 bg-light" id="message" onChange={handleChange} value={data.message} name="message" required />
                </div>

                <div className="input-group mt-5">
                <button className="btn btn-lg btn-success w-100 fs-6">
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
