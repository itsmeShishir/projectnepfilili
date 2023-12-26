import React from 'react';

const TeamCard = ({ imgUrl, name, role, whatSay, rating }) => {
  return (
    <div className="col-md-4">
      <div className="card p-3 text-center px-4">
        <div className="user-image">
          <img src={imgUrl} className="rounded-circle" width="80" alt="owner" />
        </div>

        <div className="user-content">
          <h5 className="mb-0">{name}</h5>
          <span>{role}</span>
          <p>{whatSay}</p>
        </div>

        <div className="ratings">
          {rating.map((_, idx) => (
            <i key={idx} className="fa fa-star"></i>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
