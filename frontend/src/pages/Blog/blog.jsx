import React from "react";
import Header from "../../components/LandingPage/Layout/Header/Header";
import Footer from "../../components/LandingPage/Layout/Footer/Footer";
import TopBar from "../../shared/TopBar/topbar";
import BlogSection from "../../components/Blog/blogsection/blogSection";

const Blog = () => {
  return (
    <div className="home__wrapper">
      <Header />
      <TopBar
        imgUrl={"../../assets/images/how-it-works.jpg"}
        title={"Article & Tips"}
      />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Blog;
