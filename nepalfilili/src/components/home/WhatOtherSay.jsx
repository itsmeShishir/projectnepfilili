import React from "react";
import { FaComments } from "react-icons/fa6";
import { teamCardData } from "../../mockData/data";
import TeamCard from "../../shared/TeamCard/TeamCard";

const WhatOtherSay = () => {
  return (
    <div>
      <div className="container text-center">
        <FaComments className="fs-1 mt-5 " />
        <h3 className="about fs-1 text-center text-primary">
          What do Company Owners Say?
        </h3>
        <div className="container mt-5 mb-5">
          <div className="row g-2 ">
            {
              teamCardData.map((teamInfo,index)=>(
                <TeamCard key={index} imgUrl={teamInfo.imgUrl} name={teamInfo.name} role={teamInfo.role}  rating={teamInfo.rating} whatSay={teamInfo.whatSay}/>
              ))
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhatOtherSay;
