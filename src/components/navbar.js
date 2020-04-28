import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>BEAT BOX</h1>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Playlist">Playlist</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;