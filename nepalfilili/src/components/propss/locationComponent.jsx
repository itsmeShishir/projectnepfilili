import React from "react";

const LocationComponents = (props) => {
  return (
    <div className="col-md-3 pb-2">
      <div className="card p-3 text-center px-4">
        <div className="user-content">
          <h5 className="mb-0">{props.location}</h5>
        </div>
      </div>
    </div>
  );
};

export default LocationComponents;
