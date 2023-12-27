import React from 'react';
import Footer from '../../components/LandingPage/Layout/Footer/Footer';
import Header from '../../components/LandingPage/Layout/Header/Header';
import HeroSection from '../../components/Hero/HeroSection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';

const Home = () => {
  return (
    <div className="home__wrapper">
      <Header />
      <HeroSection/>
      <HowItWorks/>
      <Footer />
    </div>
  );
};

export default Home;
