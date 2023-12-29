import React from "react";
import "./blogsection.css";
import imgs from "../../../assets/images/32.jpg";
import CardBlog from "../../../shared/BlogCard/cardBlog";

const BlogSection = () => {
  return (
    <div className="container">
      <p className="blog_maindesc">All the Latest Blog</p>
      <h1 className="blog_title">BlogSection</h1>
      <div className="main_blogs">
        <CardBlog
          imgUrl={imgs}
          title={
            "Traveling Abroad for Thanksgiving Is a Great Way to Save Money"
          }
          categoryName={"Travel"}
          author={"Penci Design"}
          date={"October 11, 2019"}
          description={
            "Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies..."
          }
        />
        <CardBlog
          imgUrl={imgs}
          title={
            "Traveling Abroad for Thanksgiving Is a Great Way to Save Money"
          }
          categoryName={"Travel"}
          author={"Penci Design"}
          date={"October 11, 2019"}
          description={
            "Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies..."
          }
        />
        <CardBlog
          imgUrl={imgs}
          title={
            "Traveling Abroad for Thanksgiving Is a Great Way to Save Money"
          }
          categoryName={"Travel"}
          author={"Penci Design"}
          date={"October 11, 2019"}
          description={
            "Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies..."
          }
        />
        <CardBlog
          imgUrl={imgs}
          title={
            "Traveling Abroad for Thanksgiving Is a Great Way to Save Money"
          }
          categoryName={"Travel"}
          author={"Penci Design"}
          date={"October 11, 2019"}
          description={
            "Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies..."
          }
        />
        <CardBlog
          imgUrl={imgs}
          title={
            "Traveling Abroad for Thanksgiving Is a Great Way to Save Money"
          }
          categoryName={"Travel"}
          author={"Penci Design"}
          date={"October 11, 2019"}
          description={
            "Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies..."
          }
        />
        <CardBlog
          imgUrl={imgs}
          title={
            "Traveling Abroad for Thanksgiving Is a Great Way to Save Money"
          }
          categoryName={"Travel"}
          author={"Penci Design"}
          date={"October 11, 2019"}
          description={
            "Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies..."
          }
        />
      </div>
    </div>
  );
};

export default BlogSection;
