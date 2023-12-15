import React from "react";

const BlogComponent = () => {
  return (
    <>
      <div class="col-lg-4">
        <div class="post-box">
          <div class="post-img">
            <img src="assets/img/blog/blog-1.jpg" class="img-fluid" alt="" />
          </div>
          <span class="post-date">Tue, September 15</span>
          <h3 class="post-title">
            Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur
            sit
          </h3>
          <a href="blog-single.html" class="readmore stretched-link mt-auto">
            <span>Read More</span>
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogComponent;
