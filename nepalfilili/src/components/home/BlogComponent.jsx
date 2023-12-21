import React from "react";
import BlogProps from "../propss/BlogProps";

const BlogComponent = () => {
  return (
    <>
      <section class="recent-blog-posts">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <h2>Blog</h2>
            <p>Recent posts form our Blog</p>
          </header>

          <div class="row">
            <BlogProps
              image="assets/img/blog/blog-1.jpg"
              date="Fri, August 28"
              title="Eum ad dolor et. Autem aut fugiat debitis voluptatem
                  consequuntur sit"
              description="Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            />
            <BlogProps
              image="assets/img/blog/blog-2.jpg"
              date="Fri, August 28"
              title="Eum ad dolor et. Autem aut fugiat debitis voluptatem
                  consequuntur sit"
              description="Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            />
            <BlogProps
              image="assets/img/blog/blog-3.jpg"
              date="Fri, August 28"
              title="Eum ad dolor et. Autem aut fugiat debitis voluptatem
                  consequuntur sit"
              description="Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogComponent;
