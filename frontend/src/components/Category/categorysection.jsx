import React from "react";
import { Link } from "react-router-dom";
import "./category.css";
import NameCategory from "../../shared/CategoryName/namecategory";

const CategorySection = () => {
  const arrow = ">>";
  return (
    <div className="container">
      <div className="topbar">
        <p>
          <Link to="/" className="topbar_link">
            Home
          </Link>
          {arrow}
          <Link to="/category" className="topbar_link">
            Category
          </Link>
        </p>
      </div>
      <div>
        <div className="maintitle">Find a Business by Category.</div>
        <p className="maininfo">
          Nepal Business Directory integrates all the best companies in Nepal
          into an easy-to-use, searchable database with a user-friendly
          interface. NepalYP business directory helps you look into the Nepal
          business world with confidence including 1216 categories for better
          browsing.
        </p>
      </div>
      <NameCategory />
      <NameCategory />
      <NameCategory />
      <NameCategory />
    </div>
  );
};

export default CategorySection;
