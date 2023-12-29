import React from "react";
import Header from "../../components/LandingPage/Layout/Header/Header";
import Footer from "../../components/LandingPage/Layout/Footer/Footer";
import TopBar from "../../shared/TopBar/topbar";
import SingleSection from "../../components/Blog/singleBlog/singlesection";

const SingleBlog = () => {
  return (
    <div>
      <Header />
      <TopBar
        imgUrl={"../../assets/images/how-it-works.jpg"}
        title={"Single Blog"}
      />
      <SingleSection />
      <Footer />
    </div>
  );
};

export default SingleBlog;
