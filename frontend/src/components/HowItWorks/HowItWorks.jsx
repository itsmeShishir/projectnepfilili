import React from 'react';
import "./index.css"
import { CiSearch } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";
import Lodging  from '../../assets/images/Lodging.jpg'
import Arts from '../../assets/images/Arts.jpg'
import Nightlife from '../../assets/images/Nightlife.jpg'
import Outdoor from '../../assets/images/Outdoor.jpg'
import Resturant from '../../assets/images/Resturant.jpg'
import George from '../../assets/images/George_Brown.jpg'
import Hotel from '../../assets/images/hotel.jpg'
import Hotelroom from '../../assets/images/hotel room.jpg'


const HowItWorks = () => {
  return (
    <div className='hiw__wrapper'>
      <div className="hiw__container">                
      <section className='main-title'>
              <h2>How it Works</h2>
              <p>Bringing business and community members together</p>
        </section>

        <div className='container-section'>
            <div className="card">  
                <CiSearch size={80} className='search' />

                <div className='cardtitle'>
                  <p>Find Businesses</p>
                </div>

                <div className='carddesc'>
                    <p>Explore and engage with excellent local establishments in your community, such as dental clinics, hairstylists, and various other services.</p>
                </div>
            </div>

            <div className="card2">  
                <TfiWrite size={70} className='search2' />

                <div className='cardtitle2'>
                  <p>Rating catalog</p>
                </div>

                <div className='carddesc2'>
                    <p>Gain valuable perspectives on listings and share your experiences with fellow readers by providing feedback for businesses.</p>
                </div>
            </div>

            <div className="card3">
            <TfiWrite size={70} className='search3' />

                <div className='cardtitle3'>
                  <p>Make a Reservation</p>
                </div>

                <div className='carddesc3'>
                    <p>Effortlessly schedule an appointment directly through the business listing page using our integrated booking features.</p>
                </div>
            </div>
        </div>

        <section className='main-title2'>
              <h2>What do you want to do?</h2>
              <p>Discover & connect with great local businesses in Nepal.</p>
        </section>

        <div className='mid-section'>
          <div className="mid-card">
            <img src={Lodging} alt="" />
            <p>Lodging</p>

          </div>

          <div className="mid-card2">
            <img src={Arts} alt="" />
            <p>Office</p>            
          </div>

          <div className="mid-card3">
            <img src={Nightlife} alt="" />
            <p>Nightlife</p>            
          </div>

          <div className="mid-card4">
            <img src={Outdoor} alt="" />
            <p>Outdoor</p>            
          </div>

          <div className="mid-card5">
            <img src={Resturant} alt="" />
            <p>Resturant</p>            
          </div>
        </div>

        <section className='main-title3'>
          <h2>The Most Popular Thing to do in the City</h2>
          <p>Discover some of the most popular listings in Toronto based on user reviews and ratings.</p>          
        </section>

        <div className='mid-section2'>
          <div className="mid-section-card2">
            <img src={George} alt="" />
            <h4>The Ivy at Verify</h4>
            <p>111C Queen Street East <br /> Toronto Ontario</p>
          </div>

          <div className='mid-section-card3'>
            <img src={Hotel} alt="" />
            <h4>The Gladstone Hotel</h4>
            <p>1214 Queen Street West <br /> Toronto Ontario</p>
          </div>

          <div className='mid-section-card4'>
            <img src={Hotelroom} alt="" />
            <h4>The Ritz-Carlton</h4>
            <p>181 Wellington Street West <br /> Toronto Ontario</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
