import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const ErrorComponents = () => {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <Link to="/">Homepage</Link>
      </div>
    </div>
  );
};

export default ErrorComponents;
