import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/main.jpg";
const AboutSectionComponent = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row gx-0">
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src={img} className="img-fluid " alt="" />
            </div>
            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="px-5">
                <h3 className="fs-3">
                  Maximize Your Business Online Marketing
                </h3>
                <h2 className="fs-5 text-justify">
                  Be visible! Obtain new customers and generate more traffic.
                  Improve social media shares. Get reviews and grow business
                  reputation online. Your company profile can include contacts
                  and description, products, photo gallery and your business
                  location on the map.
                </h2>
                <div className="text-center text-lg-start">
                  <Link
                    to="/auth/become-a-member"
                    className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>List Yout Business Here</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionComponent;
