import React from "react";

const TeastimonialsCoponenets = () => {
  return (
    <div>
      <div className="col-md-4">
        <div className="card p-3 text-center px-4">
          <div className="user-image">
            <img
              src="https://i.imgur.com/PKHvlRS.jpg"
              className="rounded-circle"
              width="80"
            />
          </div>

          <div className="user-content">
            <h5 className="mb-1 text-primary">Bruce Hardy</h5>
            <span className="text-danger">Software Developer</span>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeastimonialsCoponenets;
