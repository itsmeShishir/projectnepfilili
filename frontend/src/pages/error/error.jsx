import React from "react";
import ErrorComponents from "../../components/error/error";
import Header from "../../components/LandingPage/Layout/Header/Header";
import Footer from "../../components/LandingPage/Layout/Footer/Footer";

const Error = () => {
  return (
    <div>
      <Header />
      <ErrorComponents />
      <Footer />
    </div>
  );
};

export default Error;
