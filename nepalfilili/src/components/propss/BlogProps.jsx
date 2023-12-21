import React from "react";
import { Link } from "react-router-dom";

const BlogProps = (props) => {
  return (
    <>
      <div class="col-lg-4">
        <div class="post-box">
          <div class="post-img">
            <img src={props.image} class="img-fluid" alt="" />
          </div>
          <span class="post-date">{props.date}</span>
          <h3 class="post-title">{props.title}</h3>
          <p class="fs-5">{props.description}</p>
          <Link
            href="/blog/single-blog"
            class="readmore stretched-link mt-auto"
          >
            <span>Read More</span>
            <i class="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogProps;
