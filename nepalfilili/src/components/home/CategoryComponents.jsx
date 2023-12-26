import React from "react";
import { BiSolidDirections } from "react-icons/bi";
import LocationComponents from "../propss/locationComponent";

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
            <LocationComponents location="Kathmandu" />
            <LocationComponents location="Pokhara" />
            <LocationComponents location="Biratnagar" />
            <LocationComponents location="Birgunj" />
            <LocationComponents location="Dharan" />
            <LocationComponents location="Bharatpur" />
            <LocationComponents location="Nepalgunj" />
            <LocationComponents location="Butwal" />
            <LocationComponents location="Hetauda" />
            <LocationComponents location="Bhaktapur" />
            <LocationComponents location="Janakpur" />
            <LocationComponents location="Banepa" />
            <LocationComponents location="Itahari" />
            <LocationComponents location="Dhangadhi" />
            <LocationComponents location="Kirtipur" />
            <LocationComponents location="See All" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryComponents;
