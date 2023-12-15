import React from "react";
import BlogComponent from "../../components/blog/blogComponent";

const BlogPage = () => {
  return (
    <div>
      <section id="recent-blog-posts" class="recent-blog-posts">
        <div class="container" data-aos="fade-up">
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
    </div>
  );
};

export default BlogPage;
