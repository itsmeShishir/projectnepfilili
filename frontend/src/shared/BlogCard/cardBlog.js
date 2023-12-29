import React from "react";
import { Link } from "react-router-dom";
import "./cardBlog.css";
const CardBlog = ({
  title,
  imgUrl,
  categoryName,
  author,
  date,
  description,
}) => {
  return (
    <div className="blog_one">
      <img src={imgUrl} alt="" className="blog_one_img" />
      <h2 className="blog_one_title">{title}</h2>
      <div className="blog_category">
        <p className="blog_category1">
          Category: <span className="category_title">{categoryName}</span>
        </p>
        <p className="blog_category2">by: {author}</p>
        <p className="blog_category3">{date}</p>
      </div>
      <p className="blogdescription">{description}</p>
      <Link to="/blog/singleblog" className="blogbutton">
        Read More
      </Link>
    </div>
  );
};

export default CardBlog;
