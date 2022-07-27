import React from 'react';
import twitter from '../images/Twitter Icon.jpg';
import facebook from '../images/Facebook Icon.jpg';
import instagram from '../images/Instagram Icon.jpg';
import github from '../images/GitHub Icon.jpg'

const Project1Footer = () => {
  return (
      <footer className="logos-footer">
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={github} alt="" />          
    </footer>
  )
}

export default Project1Footer