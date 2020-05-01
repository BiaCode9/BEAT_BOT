import React from 'react';
import { Link } from 'react-router-dom';




const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>BEAT BOT</h1>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Playlist">Playlist</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;