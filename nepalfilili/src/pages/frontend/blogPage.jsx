import React from "react";
import BlogComponent from "../../components/blog/blogComponent";
import HeaderComponent from "../../components/header/headerComponent";
import FooterComponent from "../../components/footer/footerComponent";

const BlogPage = () => {
  return (
    <>
      <HeaderComponent />
      <BlogComponent />
      <FooterComponent />
    </>
  );
};

export default BlogPage;
