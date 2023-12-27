import React from 'react';
import "./card.css";

const Card = ({imgUrl,title,description}) => {
  return (
    <div className='card'>
      <div className="card__body">
        <div className="card__img">
            <img src={imgUrl} alt="" />
        </div>
        <p className="card__title">{title}</p>
        <p className='description'>{description}</p>
      </div>
    </div>
  )
}

export default Card
