import React from "react";
import "./namecategory.css";
import { Link } from "react-router-dom";

const NameCategory = () => {
  return (
    <div className="main_info">
      <h2 className="category_title">Category Name</h2>
      <div className="category_sub">
        <Link to="/" className="name">
          General Business <span>4,275</span>
        </Link>
        <Link to="/" className="name">
          General Business <span>4,275</span>
        </Link>
        <Link to="/" className="name">
          General Business <span>4,275</span>
        </Link>
        <Link to="/" className="name">
          General Business <span>4,275</span>
        </Link>
        <Link to="/" className="name">
          General Business <span>4,275</span>
        </Link>
        <Link to="/" className="name">
          General Business <span>4,275</span>
        </Link>
        <Link to="/" className="name">
          General Business <span>4,275</span>
        </Link>
        <Link to="/" className="name">
          General Business <span>4,275</span>
        </Link>
      </div>
    </div>
  );
};

export default NameCategory;
