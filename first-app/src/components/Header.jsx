import React from 'react';
import logo from '../logo.svg'

const Header = () => {
    return (
        <header>
            <nav className='nav'>
                <img src={logo} alt="logo" className="logo" />
                <h1>Header</h1>
                <ul className='nav-items'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header