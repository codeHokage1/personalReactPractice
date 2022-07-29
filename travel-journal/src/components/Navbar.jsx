import React from 'react';
import globe from '../images/globe.png';

const Navbar = () => {
  return (
      <nav className='navbar'>
          <img src={globe} alt="" className='globe'/>
          <h1>My Travel Journal</h1>
    </nav>
  )
}

export default Navbar