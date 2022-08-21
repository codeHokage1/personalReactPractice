import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({search, setSearch}) => {
  return (
    <nav className="nav">
      <form onSubmit={e => e.preventDefault()}>
        <input type='text' placeholder='Search Posts' className="search-box" value={search} onChange={e => setSearch(e.target.value)} />
      </form>
      <ul>
        <li>
          <Link to='/' className="link">Home</Link>
        </li>
        <li>
          <Link to='/create' className="link">New Post</Link>
        </li>
        <li>
          <Link to='/about' className="link">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav