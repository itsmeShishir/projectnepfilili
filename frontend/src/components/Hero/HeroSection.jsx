import React from 'react';
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className='hero__section__wrapper'>
      <div className="hero__content__wrapper">
            <div className="hero__content">
                <h1>Explore This City</h1>
                <p>Nepfilili helps you find out whats happening in your city.Let's Explore</p>
                <div className="search__box">
                <input type="text" placeholder="Search here"/>
                <input type="text" placeholder='location' />
                 <button>Search</button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default HeroSection
