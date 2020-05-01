import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>BEAT BOT</h1>
        <ul className="links">
          <span><li>
            <Link to="/">Home</Link>
          </li></span>
          <span><li>
            <Link to="/Playlist">Playlist</Link>
          </li></span>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;
