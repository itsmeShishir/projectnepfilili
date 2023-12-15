import React from "react";
import BlogComponent from "../../components/blog/blogComponent";
import HeaderComponent from "../../components/header/headerComponent";

const BlogPage = () => {
  return (
    <>
      <HeaderComponent />
      <section class="recent-blog-posts">
        <div class="container">
          <header class="section-header">
            <h2>Blog</h2>
            <p>Recent posts form our Blog</p>
          </header>
          <div class="row">
            <BlogComponent />
            <BlogComponent />
            <BlogComponent />
            <BlogComponent />
            <BlogComponent />
            <BlogComponent />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
