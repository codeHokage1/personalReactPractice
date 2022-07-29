import React from 'react';
import logo from '../images/airbnb 1.png';

const Navbar = () => {
  return (
      <div>
          <nav className='nav-bar'>
              <img src={logo} alt="airbnb" />
          </nav>
    </div>
  )
}

export default Navbar