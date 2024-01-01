import React from 'react';
import "./index.css"
import { CiSearch } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";

const HowItWorks = () => {
  return (
    <div className='hiw__wrapper'>
      <div className="hiw__container">
        
      <section className='pricing'>
              <h2>How it Works</h2>
              <p className="lead">Bringing business and community members together</p>
        </section>

        <div className='container'>
            <div className="card">  
                <CiSearch size={70} className='search' />

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

      </div>
    </div>
  )
}

export default HowItWorks
