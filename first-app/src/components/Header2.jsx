import React from 'react';
import logo from '../images/logo.svg'

const Header2 = () => {
  return (
      <header className="header">
          <nav className='nav-header2'>
              <img src={logo} alt="" className='logo' />
              <h3>ReactFacts</h3>
              <h4>React Course - Project 1</h4>
          </nav>
    </header>
  )
}

export default Header2