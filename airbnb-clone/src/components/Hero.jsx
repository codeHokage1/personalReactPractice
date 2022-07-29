import React from 'react';
import heroImage from '../images/Group 77.png';

const Hero = () => {
  return (
      <section className="hero">
          <img src={heroImage} alt="hero" className='hero-image'/>
          <h3 className='hero-header'>Online Experiences</h3>
          <p className='hero-content'>
              Join unique interactive activities led by one-of-a-kind hosts; 
              all without leaving home.
          </p>
    </section>
  )
}

export default Hero