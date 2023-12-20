import React from "react";
import HeaderComponent from "../../components/header/headerComponent";
import FooterComponent from "../../components/footer/footerComponent";
import MainSectionComponent from "../../components/home/MainSectionComponent";
import AboutSectionComponent from "../../components/home/AboutSectionComponent";
const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <MainSectionComponent />
      <AboutSectionComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;
