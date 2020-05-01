import React from 'react';
import { Link } from "react-router-dom"
import './searchresults.css';
const SearchResults = (props) => {
  return (
    <div className="container">
      {
        props.tracks.map((item, index) => (
          <div className="searchResults">
            <div className="artistInfo">
              <Link to={`/songs/${index}`}>
                <h1>{item.name}</h1>
              </Link>
              <h2>{item.artist}</h2>
            </div>
            <button onClick={() => props.addToPlaylist(item)}>+ Add to Playlist
            </button>
            <Link to={`/Playlist/${index}`}>
              <h2>{props.items && props.item.name}</h2>
            </Link>
          </div>
        )
        )
      }
    </div>
  )
}
export default SearchResults;




