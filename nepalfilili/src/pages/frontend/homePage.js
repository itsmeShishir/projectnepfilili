import React from "react";
import HeaderComponent from "../../components/header/headerComponent";
import FooterComponent from "../../components/footer/footerComponent";
import MainSectionComponent from "../../components/home/MainSectionComponent";
import AboutSectionComponent from "../../components/home/AboutSectionComponent";
import WhatOtherSay from "../../components/home/WhatOtherSay";
import CategoryComponents from "../../components/home/CategoryComponents";
import BlogComponent from "../../components/home/BlogComponent";
const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <MainSectionComponent />
      <AboutSectionComponent />
      <WhatOtherSay />
      <CategoryComponents />
      <BlogComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;
