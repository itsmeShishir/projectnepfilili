import React from 'react'
import "./footer.css"
import { FaFacebookF ,FaInstagram,FaPhoneAlt} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer__wrapper">
    <div className="footer__container">
      <div className="foot__content">
        <div className="left__footer__content">
          <div className="left__content">
            <div className="logo__section">
              <a href="/" className="heading">
                {/* <img src="../logo.svg" alt="logo" /> */}
                NEPFILLI
              </a>
            </div>
            <div className="foot__social__icon__container">
              <a className="social__icon fb__icon">
                <FaFacebookF
                  className="sci"
                ></FaFacebookF>
              </a>
              <a className="social__icon insta__icon">
                <FaInstagram className="sci"></FaInstagram>
              </a>
            </div>
          </div>
        </div>

        <div className="right__footer__content">
          <div className="link__content">
            <div className="foot__title">Quick Links</div>
            <div className="foot__links">
              <a href="#">About</a>
              <a href="#">Blog</a>
            </div>
          </div>

          <div className="link__content">
            <div className="foot__title">Support</div>
            <div className="foot__links">
              <a href="#">FAQ</a>
              <a href="#">Trust & Policy</a>
              <a href="#">Contact Us</a>
            </div>
          </div>

          <div className="link__content">
            <div className="foot__title">Legal</div>
            <div className="foot__links">
              <a href="#">Terms of use</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="link__content">
            <div className="foot__title">Services</div>
            <div className="foot__links">
              <a href="#">Web Development</a>
              <a href="#">App Development</a>
              <a href="#">Marketing</a>
              <a href="#">Client Management</a>
            </div>
          </div>

          <div className="link__content">
            <div className="foot__title">Contact</div>
            <div className="foot__links">
              <p>10 am - 5 pm</p>
              <p>Sunday - Friday</p>
              <div className="foot__contact">
                <div className="contact">
                  <FaPhoneAlt></FaPhoneAlt>
                  <p>+977XXXXXXXX</p>
                </div>
                <div className="contact">
                  <FaPhoneAlt></FaPhoneAlt>
                  <p>+977XXXXXXXX</p>
                </div>
                <div className="contact">
                  <MdOutlineMail></MdOutlineMail>
                  <a className="email" href="#">nepfilili@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; <a href="#">nepfilili.com.</a> All Rights Reserved 2023</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
