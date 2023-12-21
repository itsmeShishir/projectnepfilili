import React from "react";
import HeaderComponent from "../../components/header/headerComponent";
import FooterComponent from "../../components/footer/footerComponent";
import SingleBlogComponent from "../../components/singleblog/SingleBlogComponent";

const SingleBlogPage = () => {
  return (
    <div>
      <HeaderComponent />
      <SingleBlogComponent />
      <FooterComponent />
    </div>
  );
};

export default SingleBlogPage;
