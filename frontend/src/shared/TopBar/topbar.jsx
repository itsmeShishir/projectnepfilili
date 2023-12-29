import React from "react";
import "./topbar.css";
const TopBar = ({ imgUrl, title }) => {
  return (
    <div
      className="hero__section__wrapper"
      style={{ backgroundImage: { imgUrl } }}
    >
      <div className="hero__content__wrapper">
        <div className="hero__content">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
