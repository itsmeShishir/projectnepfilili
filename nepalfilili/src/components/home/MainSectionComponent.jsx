import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const MainSectionComponent = () => {
  const [service, setService] = useState({ servic: "", locations: "" });

  const handleChange = (e) => {
    setService((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section class="hero d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">WELCOME TO Nepal Business Directory</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Maximize Your Business Online Marketing
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div class="text-center text-lg-start">
                  <a
                    href="#about"
                    class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Get Started</span>
                    <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="700"
                className="d-flex align-items-center my-4 justify-content-center"
              >
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-5 "
                  placeholder="Search service or Companies"
                  onChange={handleChange}
                  value={service.servic}
                  name="servic"
                  required
                />
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-5 mx-2"
                  placeholder="Enter Location"
                  onChange={handleChange}
                  value={service.locations}
                  name="locations"
                  required
                />
                <h1 className="btn btn-primary fs-5">Search</h1>
              </div>
            </div>
            <div
              class="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <video className="img-fluid" autoPlay muted loop>
                <source src="assets/video/vidoe.mp4" type="video/mp4" />
                Your browser does not support the video format.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSectionComponent;
