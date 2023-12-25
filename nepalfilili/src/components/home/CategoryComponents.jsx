import React from "react";
import { BiSolidDirections } from "react-icons/bi";
import LocationComponents from "../propss/locationComponent";
import { locationsData } from "../../mockData/data";

const CategoryComponents = () => {
  return (
    <>
      <div className="container text-center">
        <BiSolidDirections className="text-primary fs-1 " />
        <h1 className="text-center fs-2 text-primary font-weight-bold">
          Browse Locations
        </h1>
        <div className="container mt-5 mb-5">
          <div className="row ">
            {
              locationsData.map((location,index)=>(
                <LocationComponents key={index} location={location}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryComponents;
